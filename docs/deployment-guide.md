
# Deployment Guide

## Deployment Architecture

### Production Environment Setup

#### Frontend Deployment (Lovable)
- **Platform**: Lovable hosting
- **Domain**: events.inta.org (subdomain)
- **SSL**: Automatic SSL certificate management
- **CDN**: Global content delivery network

#### Backend Services

**Supabase Configuration:**
- **Database**: PostgreSQL with extensions
- **Storage**: File storage for media assets
- **Edge Functions**: API endpoints and webhooks
- **Authentication**: JWT-based auth system

**WordPress Integration:**
- **Environment**: inta.org production
- **Custom Plugins**: Event sync and API extensions
- **Webhooks**: Real-time data synchronization

#### Third-party Services

**Algolia Search:**
- **Production Index**: Optimized for search performance
- **Analytics**: Search behavior tracking
- **API Keys**: Production keys with rate limiting

## Environment Configuration

### Environment Variables
```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# WordPress Integration
VITE_WORDPRESS_API_URL=https://inta.org/wp-json
VITE_WORDPRESS_WEBHOOK_SECRET=your-webhook-secret

# Algolia Configuration
VITE_ALGOLIA_APP_ID=your-app-id
VITE_ALGOLIA_SEARCH_KEY=your-search-key

# Analytics
VITE_GA_TRACKING_ID=GA-XXXXXXXXX
VITE_HOTJAR_ID=your-hotjar-id
```

### Build Configuration
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
          charts: ['recharts'],
          search: ['algoliasearch', 'react-instantsearch']
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
});
```

## Deployment Process

### Pre-deployment Checklist
- [ ] Database migrations completed
- [ ] WordPress plugins updated
- [ ] Search indices synchronized
- [ ] SSL certificates valid
- [ ] Performance tests passed
- [ ] Security scan completed

### Deployment Steps

#### 1. Database Setup
```sql
-- Run migration scripts
\i migrations/001_initial_schema.sql
\i migrations/002_add_sponsors.sql
\i migrations/003_add_venues.sql

-- Enable RLS policies
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
```

#### 2. WordPress Configuration
```php
// wp-config.php additions
define('INTA_EVENTS_API_ENDPOINT', 'https://events.inta.org/api');
define('INTA_EVENTS_WEBHOOK_SECRET', 'your-secret-key');
define('INTA_EVENTS_SYNC_ENABLED', true);
```

#### 3. Algolia Index Setup
```javascript
// Setup search indices
const indices = [
  { name: 'events', settings: eventIndexSettings },
  { name: 'speakers', settings: speakerIndexSettings },
  { name: 'sessions', settings: sessionIndexSettings }
];

for (const index of indices) {
  await algolia.initIndex(index.name).setSettings(index.settings);
}
```

#### 4. Frontend Deployment
```bash
# Build production assets
npm run build

# Deploy to Lovable
lovable deploy --production

# Verify deployment
curl https://events.inta.org/health
```

### Post-deployment Verification

#### Health Checks
- [ ] Application loads successfully
- [ ] Database connections working
- [ ] WordPress sync functional
- [ ] Search results appearing
- [ ] Analytics tracking active

#### Performance Validation
- [ ] Core Web Vitals passing
- [ ] Search response times < 200ms
- [ ] Image loading optimized
- [ ] Mobile responsiveness verified

## Monitoring and Maintenance

### Application Monitoring

**Uptime Monitoring:**
- Pingdom for availability checks
- StatusPage for status communications
- Slack alerts for downtime

**Performance Monitoring:**
- Google Analytics for user behavior
- Hotjar for user experience insights
- Supabase dashboard for database performance

**Error Tracking:**
- Sentry for error logging and alerts
- Custom error boundaries in React
- Supabase logs for backend issues

### Backup Strategy

**Database Backups:**
- Daily automated backups via Supabase
- Weekly full database exports
- Point-in-time recovery capability

**Media Backups:**
- Automated backup to AWS S3
- Redundant storage across regions
- Version control for media assets

**Code Backups:**
- GitHub repository with branches
- Tagged releases for rollback capability
- Deployment artifact storage

### Update Process

**Regular Updates:**
1. **Weekly**: Security patches and minor updates
2. **Monthly**: Feature releases and improvements
3. **Quarterly**: Major version updates and reviews

**Emergency Updates:**
- Hotfix deployment process
- Rollback procedures
- Communication protocols

### Scaling Considerations

**Database Scaling:**
- Read replicas for high-traffic events
- Connection pooling optimization
- Query performance monitoring

**Frontend Scaling:**
- CDN optimization for global audience
- Asset compression and caching
- Progressive loading strategies

**Search Scaling:**
- Algolia usage monitoring
- Index optimization for performance
- Faceted search efficiency

## Disaster Recovery

### Backup Restoration
- RTO (Recovery Time Objective): 2 hours
- RPO (Recovery Point Objective): 15 minutes
- Automated failover procedures

### Incident Response
1. **Detection**: Automated monitoring alerts
2. **Assessment**: Team notification and triage
3. **Response**: Immediate mitigation steps
4. **Recovery**: Full service restoration
5. **Post-mortem**: Root cause analysis and improvements

### Business Continuity
- Fallback to WordPress-only experience
- Essential features maintained during outages
- Communication plan for stakeholders
