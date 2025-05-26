
# WordPress Integration Plan

## Integration Overview

The INTA Event Management System will integrate with the existing WordPress site (inta.org) to leverage existing content and maintain editorial workflows.

## Integration Approach

### 1. Hybrid Architecture
- **WordPress**: Primary CMS for content creation and management
- **React App**: Enhanced event experience and functionality
- **Supabase**: Real-time data and advanced features

### 2. Data Synchronization Strategy

#### WordPress to Supabase Sync
- **Real-time Webhooks**: WordPress publishes → Supabase updates
- **Scheduled Sync**: Hourly sync for data consistency
- **Manual Sync**: Admin-triggered full synchronization

#### Content Types Synchronized
- Events (posts with custom fields)
- Speakers (custom post type)
- Sessions/Agenda (custom post type)
- Sponsors (custom post type)
- Media gallery items

### 3. WordPress Custom Development

#### Required WordPress Components

**Custom Post Types:**
```php
// Events CPT
register_post_type('inta_events', [
    'public' => true,
    'rest_api' => true,
    'supports' => ['title', 'editor', 'custom-fields']
]);

// Speakers CPT  
register_post_type('inta_speakers', [
    'public' => true,
    'rest_api' => true,
    'supports' => ['title', 'editor', 'thumbnail', 'custom-fields']
]);

// Sessions CPT
register_post_type('inta_sessions', [
    'public' => true,
    'rest_api' => true,
    'supports' => ['title', 'editor', 'custom-fields']
]);
```

**Custom Fields (ACF Pro):**
- Event theme settings (colors, fonts)
- Speaker details (bio, company, social links)
- Session metadata (time, location, track)
- Sponsor tier and benefits

**REST API Extensions:**
```php
// Custom endpoint for event data
add_action('rest_api_init', function() {
    register_rest_route('inta/v1', '/events/(?P<slug>[a-zA-Z0-9-]+)', [
        'methods' => 'GET',
        'callback' => 'get_event_data',
    ]);
});
```

### 4. Authentication Integration

#### Single Sign-On (SSO)
- WordPress users can access React app features
- JWT token exchange for seamless authentication
- Role-based permissions synchronized

#### Implementation:
```javascript
// WordPress JWT plugin configuration
const wpAuth = {
    endpoint: 'https://inta.org/wp-json/jwt-auth/v1/token',
    validateEndpoint: 'https://inta.org/wp-json/jwt-auth/v1/token/validate'
};
```

### 5. Content Management Workflow

#### Editorial Process:
1. **Content Creation**: WordPress admin interface
2. **Preview**: Live preview in React app
3. **Publishing**: Triggers sync to Supabase
4. **Updates**: Real-time updates to frontend

#### Admin Interface Locations:
- **WordPress Admin**: Primary content editing
- **React Admin Panel**: Event-specific configurations
- **Analytics Dashboard**: Performance and engagement metrics

### 6. URL Structure Integration

#### WordPress Pages:
- `/events/` - Event listing page
- `/events/{slug}/` - WordPress event detail page
- `/speakers/` - Speaker directory

#### React App Pages:
- `/event/{slug}/experience` - Interactive event experience
- `/event/{slug}/live` - Live event features
- `/event/{slug}/networking` - Networking tools

### 7. SEO and Performance

#### WordPress SEO:
- Yoast SEO for main event pages
- Structured data for events
- Social media meta tags

#### React App SEO:
- Server-side rendering for critical paths
- Dynamic meta tags per event
- Sitemap generation

### 8. Development Phases

#### Phase 1: Foundation (Week 1-2)
- WordPress custom post types
- Basic REST API endpoints
- Supabase schema setup

#### Phase 2: Sync Implementation (Week 3-4)
- Webhook system development
- Data transformation layer
- Error handling and logging

#### Phase 3: Integration Testing (Week 5-6)
- End-to-end testing
- Performance optimization
- Security audit

#### Phase 4: Deployment (Week 7-8)
- Production deployment
- Monitoring setup
- User training

### 9. Maintenance and Updates

#### Ongoing Tasks:
- WordPress plugin updates
- API compatibility monitoring
- Performance optimization
- Content backup and recovery

#### Monitoring:
- API response times
- Sync success rates
- Error logging and alerting
- User experience metrics
