
# INTA Event Management System - Database Schema

## Core Architecture
This schema supports multiple events (monthly, quarterly, annual) with dynamic theming and content management.

## Table Structure

### 1. Events Table
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
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 2. Event Themes Table
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

### 3. Event Sections Table
```sql
CREATE TABLE event_sections (
  section_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(event_id) ON DELETE CASCADE,
  section_type VARCHAR(50) NOT NULL, -- 'hero', 'countdown', 'agenda', 'speakers', 'sponsors', 'venue', 'registration'
  title VARCHAR(255),
  content_data JSONB NOT NULL, -- Section-specific content
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 4. Speakers Table
```sql
CREATE TABLE speakers (
  speaker_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255),
  company VARCHAR(255),
  bio TEXT,
  headshot_url VARCHAR(500),
  email VARCHAR(255),
  phone VARCHAR(50),
  expertise_areas TEXT[], -- Array of expertise topics
  social_links JSONB, -- {linkedin, twitter, website, etc}
  speaking_fee DECIMAL(10,2),
  travel_required BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 5. Event Speakers (Junction Table)
```sql
CREATE TABLE event_speakers (
  event_id UUID REFERENCES events(event_id) ON DELETE CASCADE,
  speaker_id UUID REFERENCES speakers(speaker_id) ON DELETE CASCADE,
  role VARCHAR(50) DEFAULT 'speaker', -- 'keynote', 'speaker', 'moderator', 'panelist'
  speaker_fee DECIMAL(10,2),
  travel_covered BOOLEAN DEFAULT false,
  confirmed BOOLEAN DEFAULT false,
  PRIMARY KEY (event_id, speaker_id)
);
```

### 6. Programs Table
```sql
CREATE TABLE programs (
  program_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(event_id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  target_audience VARCHAR(255), -- 'all', 'young-professionals', 'corporate-counsel'
  program_type VARCHAR(50), -- 'main', 'specialized', 'workshop'
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 7. Sessions Table
```sql
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

### 8. Session Speakers (Junction Table)
```sql
CREATE TABLE session_speakers (
  session_id UUID REFERENCES sessions(session_id) ON DELETE CASCADE,
  speaker_id UUID REFERENCES speakers(speaker_id) ON DELETE CASCADE,
  role VARCHAR(50) DEFAULT 'speaker', -- 'speaker', 'moderator', 'panelist'
  presentation_order INTEGER DEFAULT 0,
  PRIMARY KEY (session_id, speaker_id)
);
```

### 9. Sponsors Table
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
```

### 10. Event Sponsors (Junction Table)
```sql
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

### 11. Venues Table
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
  parking_info TEXT,
  accessibility_info TEXT,
  catering_options JSONB,
  av_equipment JSONB,
  wifi_info TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 12. Event Venues (Junction Table)
```sql
CREATE TABLE event_venues (
  event_id UUID REFERENCES events(event_id) ON DELETE CASCADE,
  venue_id UUID REFERENCES venues(venue_id) ON DELETE CASCADE,
  is_primary BOOLEAN DEFAULT false,
  rental_cost DECIMAL(10,2),
  setup_requirements TEXT,
  PRIMARY KEY (event_id, venue_id)
);
```

### 13. Hotels Table
```sql
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

### 14. Event Hotels (Junction Table)
```sql
CREATE TABLE event_hotels (
  event_id UUID REFERENCES events(event_id) ON DELETE CASCADE,
  hotel_id UUID REFERENCES hotels(hotel_id) ON DELETE CASCADE,
  is_partner BOOLEAN DEFAULT false,
  group_rate_available BOOLEAN DEFAULT false,
  block_expiry_date DATE,
  booking_deadline DATE,
  special_amenities TEXT[],
  PRIMARY KEY (event_id, hotel_id)
);
```

### 15. Media Gallery Table
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

### 16. Registrations Table
```sql
CREATE TABLE registrations (
  registration_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(event_id) ON DELETE CASCADE,
  attendee_name VARCHAR(255) NOT NULL,
  attendee_email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  title VARCHAR(255),
  phone VARCHAR(50),
  registration_type VARCHAR(50), -- 'full', 'day-pass', 'virtual'
  ticket_price DECIMAL(10,2),
  payment_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'paid', 'refunded'
  dietary_restrictions TEXT,
  accessibility_needs TEXT,
  session_preferences JSONB, -- Array of preferred session IDs
  networking_opt_in BOOLEAN DEFAULT true,
  marketing_opt_in BOOLEAN DEFAULT false,
  registration_date TIMESTAMP DEFAULT NOW(),
  check_in_time TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 17. User Accounts Table (Admin Management)
```sql
CREATE TABLE user_accounts (
  user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role VARCHAR(50) DEFAULT 'admin', -- 'super_admin', 'admin', 'editor', 'viewer'
  permissions JSONB, -- Granular permissions
  last_login TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Indexes for Performance
```sql
-- Event queries
CREATE INDEX idx_events_date_range ON events(start_date, end_date);
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_events_type ON events(event_type);

-- Session queries
CREATE INDEX idx_sessions_event_time ON sessions(event_id, start_time);
CREATE INDEX idx_sessions_track ON sessions(track);

-- Speaker queries
CREATE INDEX idx_speakers_name ON speakers(name);

-- Registration queries
CREATE INDEX idx_registrations_event ON registrations(event_id);
CREATE INDEX idx_registrations_email ON registrations(attendee_email);

-- Media queries
CREATE INDEX idx_media_event_type ON media_items(event_id, media_type);
```

## Content Management Features
1. **Dynamic Theming** - Events can have custom color schemes and styling
2. **Flexible Content** - Each section can have different content per event
3. **Multi-Event Support** - Single database supports unlimited events
4. **Media Management** - Centralized media storage with tagging
5. **User Permissions** - Role-based access for content management
6. **Registration Tracking** - Complete attendee management
7. **Sponsor Management** - Tiered sponsorship with benefits tracking
8. **Venue Integration** - Multiple venues and hotel partnerships

This schema provides the granularity needed for a comprehensive event management system while maintaining flexibility for different event types and content management requirements.
