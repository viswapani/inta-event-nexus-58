
# Technical Specifications

## Database Schema Details

### Core Tables Structure

#### 1. Events Table
```sql
CREATE TABLE events (
  event_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  event_type VARCHAR(50) NOT NULL, -- 'monthly', 'quarterly', 'annual'
  description TEXT,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  timezone VARCHAR(50) DEFAULT 'UTC',
  status VARCHAR(20) DEFAULT 'draft', -- 'draft', 'published', 'cancelled'
  registration_open BOOLEAN DEFAULT false,
  registration_deadline TIMESTAMP,
  max_attendees INTEGER,
  featured BOOLEAN DEFAULT false,
  theme_id UUID REFERENCES event_themes(theme_id),
  wordpress_post_id INTEGER, -- Link to WordPress post
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 2. Event Themes Table
```sql
CREATE TABLE event_themes (
  theme_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  primary_color VARCHAR(7) NOT NULL, -- Hex color
  secondary_color VARCHAR(7) NOT NULL,
  accent_color VARCHAR(7) NOT NULL,
  background_gradient JSONB, -- Gradient definitions
  typography_config JSONB, -- Font settings
  component_styles JSONB, -- Custom component styling
  background_images JSONB, -- Array of background image URLs
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 3. Sponsors and Tiers
```sql
CREATE TABLE sponsors (
  sponsor_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  logo_url VARCHAR(500),
  website_url VARCHAR(500),
  description TEXT,
  contact_email VARCHAR(255),
  contact_phone VARCHAR(50),
  industry VARCHAR(100),
  company_size VARCHAR(50), -- 'startup', 'small', 'medium', 'enterprise'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE event_sponsors (
  event_id UUID REFERENCES events(event_id) ON DELETE CASCADE,
  sponsor_id UUID REFERENCES sponsors(sponsor_id) ON DELETE CASCADE,
  sponsorship_tier VARCHAR(50) NOT NULL, -- 'platinum', 'gold', 'silver', 'bronze'
  sponsorship_amount DECIMAL(10,2),
  benefits_included JSONB, -- Array of benefits
  logo_placement INTEGER DEFAULT 0, -- Display order
  booth_number VARCHAR(20),
  is_active BOOLEAN DEFAULT true,
  contract_signed BOOLEAN DEFAULT false,
  PRIMARY KEY (event_id, sponsor_id)
);
```

#### 4. Venues and Hotels
```sql
CREATE TABLE venues (
  venue_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(100),
  state VARCHAR(50),
  country VARCHAR(50),
  postal_code VARCHAR(20),
  description TEXT,
  capacity INTEGER,
  amenities TEXT[], -- Array of amenities
  contact_info JSONB, -- Phone, email, contact person
  map_coordinates JSONB, -- {lat, lng}
  google_maps_url VARCHAR(500),
  google_maps_embed_url VARCHAR(500),
  parking_info TEXT,
  accessibility_info TEXT,
  catering_options JSONB,
  av_equipment JSONB,
  wifi_info TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE hotels (
  hotel_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  distance_from_venue VARCHAR(50),
  standard_rate DECIMAL(10,2),
  group_rate DECIMAL(10,2),
  booking_url VARCHAR(500),
  booking_code VARCHAR(50),
  amenities TEXT[],
  image_urls TEXT[],
  contact_info JSONB,
  cancellation_policy TEXT,
  check_in_time TIME,
  check_out_time TIME,
  pet_policy TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 5. Programs and Sessions
```sql
CREATE TABLE programs (
  program_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(event_id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  target_audience VARCHAR(255), -- 'all', 'young-professionals', 'corporate-counsel'
  program_type VARCHAR(50), -- 'main', 'specialized', 'workshop'
  color_theme VARCHAR(7), -- Hex color for visual distinction
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sessions (
  session_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(event_id) ON DELETE CASCADE,
  program_id UUID REFERENCES programs(program_id) ON DELETE CASCADE,
  title VARCHAR(500) NOT NULL,
  description TEXT,
  session_type VARCHAR(50), -- 'keynote', 'panel', 'workshop', 'networking', 'break'
  track VARCHAR(100), -- 'AI Innovation', 'Brand Protection', etc
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  location VARCHAR(255),
  room_capacity INTEGER,
  registration_required BOOLEAN DEFAULT false,
  session_fee DECIMAL(10,2) DEFAULT 0,
  materials_url VARCHAR(500),
  recording_url VARCHAR(500),
  live_stream_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 6. Media and Content
```sql
CREATE TABLE media_items (
  media_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(event_id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  media_type VARCHAR(20) NOT NULL, -- 'image', 'video', 'document'
  file_url VARCHAR(500) NOT NULL,
  thumbnail_url VARCHAR(500),
  file_size BIGINT, -- in bytes
  duration INTEGER, -- for videos, in seconds
  alt_text VARCHAR(255),
  tags TEXT[],
  upload_date TIMESTAMP DEFAULT NOW(),
  photographer_credit VARCHAR(255),
  is_featured BOOLEAN DEFAULT false,
  download_allowed BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## API Specifications

### Event Data API
```typescript
interface EventAPI {
  // Get event by slug
  GET /api/events/{slug}: Event;
  
  // Get event speakers
  GET /api/events/{slug}/speakers: Speaker[];
  
  // Get event agenda
  GET /api/events/{slug}/agenda: Session[];
  
  // Get event by program
  GET /api/events/{slug}/programs: Program[];
  
  // Get event sponsors by tier
  GET /api/events/{slug}/sponsors: Record<SponsorTier, Sponsor[]>;
  
  // Get event venue and hotels
  GET /api/events/{slug}/venue: VenueInfo;
  
  // Get event media
  GET /api/events/{slug}/media: MediaItem[];
}
```

### WordPress Sync API
```typescript
interface WordPressSyncAPI {
  // Webhook endpoints
  POST /api/sync/event: void;
  POST /api/sync/speaker: void;
  POST /api/sync/session: void;
  POST /api/sync/sponsor: void;
  
  // Manual sync triggers
  POST /api/sync/full: SyncResult;
  GET /api/sync/status: SyncStatus;
}
```

## Component Architecture

### Theme Provider
```typescript
interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundGradient?: GradientConfig;
  typography: TypographyConfig;
  componentStyles: Record<string, CSSProperties>;
}

const ThemeProvider = ({ theme, children }: {
  theme: ThemeConfig;
  children: ReactNode;
}) => {
  // Apply CSS custom properties
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
    document.documentElement.style.setProperty('--accent-color', theme.accentColor);
  }, [theme]);
  
  return <>{children}</>;
};
```

### Event Data Context
```typescript
interface EventContextType {
  event: Event | null;
  speakers: Speaker[];
  sessions: Session[];
  programs: Program[];
  sponsors: Record<SponsorTier, Sponsor[]>;
  venue: VenueInfo | null;
  media: MediaItem[];
  loading: boolean;
  error: string | null;
}

const EventContext = createContext<EventContextType | null>(null);

export const useEventData = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventData must be used within EventProvider');
  }
  return context;
};
```

## Performance Specifications

### Loading Targets
- **Initial Page Load**: < 2 seconds
- **Route Transitions**: < 500ms
- **Search Results**: < 200ms
- **Image Loading**: Progressive with placeholders

### Caching Strategy
- **Event Data**: 1 hour cache with stale-while-revalidate
- **Static Assets**: CDN with 1 year cache
- **Search Results**: 5 minute client-side cache
- **User Data**: Session storage only

### Bundle Size Targets
- **Initial Bundle**: < 200KB gzipped
- **Route Chunks**: < 100KB each
- **Vendor Chunks**: < 150KB total

## Security Specifications

### Authentication Flow
1. WordPress user login
2. JWT token generation
3. Supabase session creation
4. React app authentication state

### Data Protection
- **PII Encryption**: At rest and in transit
- **API Rate Limiting**: Per user and global limits
- **Input Validation**: Server-side validation for all inputs
- **CORS Policy**: Restricted to allowed domains

### Compliance
- **GDPR**: Data protection and user rights
- **CCPA**: California privacy compliance
- **COPPA**: Child privacy protection
- **SOC 2**: Security and availability standards
