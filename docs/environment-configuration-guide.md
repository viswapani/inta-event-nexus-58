
# Environment Configuration Guide

## Overview
Detailed configuration specifications for development, staging, and production environments supporting the INTA Event Management System.

## Development Environment

### Supabase Configuration
```yaml
Project Name: inta-events-dev
Region: us-east-1
Tier: Free (Development)

Database Settings:
  - PostgreSQL Version: 15
  - Connection Limit: 60
  - Statement Timeout: 8000ms
  - Lock Timeout: 3000ms

Storage Settings:
  - Bucket: event-media-dev
  - File Size Limit: 10MB
  - Allowed MIME Types: 
    - image/jpeg, image/png, image/webp
    - application/pdf
    - video/mp4

API Settings:
  - Auto API Documentation: Enabled
  - OpenAPI Schema: Auto-generated
  - Rate Limiting: Disabled (development)
```

### Environment Variables (.env.development)
```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://xxxdev.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# WordPress Integration (Development)
VITE_WORDPRESS_API_URL=https://dev.inta.org/wp-json
VITE_WORDPRESS_WEBHOOK_SECRET=dev_webhook_secret_key

# Algolia Search (Development Index)
VITE_ALGOLIA_APP_ID=DEV_APP_ID
VITE_ALGOLIA_SEARCH_KEY=dev_search_only_key

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_ERROR_REPORTING=false
VITE_DEBUG_MODE=true

# Development-specific
VITE_API_BASE_URL=http://localhost:3000
VITE_LOG_LEVEL=debug
```

### Local Development Setup
```bash
# Required Node.js version
node: ">=18.0.0"
npm: ">=8.0.0"

# Development dependencies
{
  "devDependencies": {
    "@types/node": "^20.0.0",
    "vite": "^5.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}

# Start development server
npm run dev
# Runs on http://localhost:5173
```

## Staging Environment

### Supabase Configuration
```yaml
Project Name: inta-events-staging
Region: us-east-1
Tier: Pro ($25/month)

Database Settings:
  - PostgreSQL Version: 15
  - Connection Limit: 200
  - Statement Timeout: 8000ms
  - Lock Timeout: 3000ms
  - Point-in-time Recovery: Enabled
  - Daily Backups: Enabled

Storage Settings:
  - Bucket: event-media-staging
  - File Size Limit: 50MB
  - CDN Acceleration: Enabled
  - Image Optimization: Enabled

Edge Functions:
  - Webhook Processing: Enabled
  - Email Notifications: Enabled
  - Analytics Collection: Enabled

Security:
  - Row Level Security: Enabled
  - API Rate Limiting: 100 requests/minute
  - JWT Expiry: 24 hours
```

### Environment Variables (.env.staging)
```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://xxxstaging.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# WordPress Integration (Staging)
VITE_WORDPRESS_API_URL=https://staging.inta.org/wp-json
VITE_WORDPRESS_WEBHOOK_SECRET=staging_webhook_secret_key

# Algolia Search (Staging Index)
VITE_ALGOLIA_APP_ID=STAGING_APP_ID
VITE_ALGOLIA_SEARCH_KEY=staging_search_only_key

# Analytics (Development/Testing)
VITE_GA_TRACKING_ID=GA-STAGING-ID
VITE_HOTJAR_ID=staging_hotjar_id

# Performance Monitoring
VITE_SENTRY_DSN=https://staging@sentry.io/project
VITE_ENABLE_ERROR_REPORTING=true

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_DEBUG_MODE=false
VITE_MAINTENANCE_MODE=false
```

### Staging Infrastructure
```yaml
Hosting:
  Platform: Lovable Staging
  Domain: events-staging.lovable.app
  SSL: Auto-managed
  CDN: Enabled

Monitoring:
  Uptime: Pingdom Basic
  Performance: WebPageTest API
  Error Tracking: Sentry (Development Plan)

Backup Strategy:
  Database: Daily automated backups
  File Storage: Incremental backups
  Code: GitHub repository tags
```

## Production Environment

### Supabase Configuration
```yaml
Project Name: inta-events-production
Region: us-east-1
Tier: Pro ($25/month)

Database Settings:
  - PostgreSQL Version: 15
  - Connection Limit: 500
  - Statement Timeout: 8000ms
  - Lock Timeout: 3000ms
  - Point-in-time Recovery: Enabled
  - Automated Backups: Every 6 hours
  - Read Replicas: 2 (for scaling)

Storage Settings:
  - Bucket: event-media-production
  - File Size Limit: 100MB
  - CDN Acceleration: Enabled
  - Image Optimization: Enabled
  - Geographic Replication: Enabled

Edge Functions:
  - Webhook Processing: Production config
  - Email Notifications: SendGrid integration
  - Analytics Collection: Enhanced tracking
  - Rate Limiting: Advanced rules

Security:
  - Row Level Security: Strict policies
  - API Rate Limiting: 1000 requests/minute
  - JWT Expiry: 12 hours
  - Two-factor Authentication: Required
  - IP Whitelisting: Admin functions only
```

### Environment Variables (.env.production)
```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://xxxprod.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# WordPress Integration (Production)
VITE_WORDPRESS_API_URL=https://inta.org/wp-json
VITE_WORDPRESS_WEBHOOK_SECRET=production_webhook_secret_key

# Algolia Search (Production Index)
VITE_ALGOLIA_APP_ID=PRODUCTION_APP_ID
VITE_ALGOLIA_SEARCH_KEY=production_search_only_key

# Analytics (Production)
VITE_GA_TRACKING_ID=GA-PRODUCTION-ID
VITE_HOTJAR_ID=production_hotjar_id

# Performance Monitoring
VITE_SENTRY_DSN=https://production@sentry.io/project
VITE_NEW_RELIC_LICENSE_KEY=production_license_key

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_DEBUG_MODE=false
VITE_MAINTENANCE_MODE=false

# Security
VITE_ENFORCE_HTTPS=true
VITE_CONTENT_SECURITY_POLICY=strict
```

### Production Infrastructure
```yaml
Hosting:
  Platform: Lovable Production
  Domain: events.inta.org
  SSL: Production certificate
  CDN: Global distribution
  
Load Balancing:
  Strategy: Round-robin
  Health Checks: Enabled
  Failover: Automatic

Monitoring:
  Uptime: Pingdom Professional
  Performance: New Relic Pro
  Error Tracking: Sentry Production
  Security: OWASP ZAP scanning

Backup Strategy:
  Database: Every 2 hours + daily snapshots
  File Storage: Real-time replication
  Code: Tagged releases with rollback capability
  
Disaster Recovery:
  RTO: 2 hours (Recovery Time Objective)
  RPO: 15 minutes (Recovery Point Objective)
  Failover: Multi-region setup
```

## Database Schema per Environment

### Development Schema
```sql
-- Simplified schema for development
-- Relaxed constraints for testing
-- Mock data seeding included
-- Development-specific tables for testing

CREATE SCHEMA IF NOT EXISTS development;

-- Sample data triggers
CREATE OR REPLACE FUNCTION seed_development_data()
RETURNS void AS $$
BEGIN
  -- Insert sample events, speakers, sessions
  -- For development and testing purposes
END;
$$ LANGUAGE plpgsql;
```

### Staging Schema
```sql
-- Production-identical schema
-- Real-world data volumes
-- Performance testing data
-- Migration testing capabilities

CREATE SCHEMA IF NOT EXISTS staging;

-- Data migration validation
CREATE OR REPLACE FUNCTION validate_data_migration()
RETURNS boolean AS $$
BEGIN
  -- Validate data integrity
  -- Check constraint compliance
  -- Verify referential integrity
  RETURN true;
END;
$$ LANGUAGE plpgsql;
```

### Production Schema
```sql
-- Optimized for performance
-- Full constraint enforcement
-- Audit logging enabled
-- Backup and recovery procedures

-- Production-specific extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";

-- Audit logging
CREATE TABLE audit_log (
  log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name VARCHAR(100) NOT NULL,
  operation VARCHAR(10) NOT NULL,
  old_values JSONB,
  new_values JSONB,
  user_id UUID,
  timestamp TIMESTAMP DEFAULT NOW()
);
```

## Security Configuration per Environment

### Development Security
```yaml
Security Level: Minimal
- HTTPS: Optional (localhost)
- Authentication: Simplified
- Rate Limiting: Disabled
- CORS: Permissive
- Logging: Debug level
- Data Encryption: Basic
```

### Staging Security
```yaml
Security Level: Production-like
- HTTPS: Required
- Authentication: Full implementation
- Rate Limiting: Moderate
- CORS: Restricted to staging domains
- Logging: Info level
- Data Encryption: Full encryption
- Vulnerability Scanning: Weekly
```

### Production Security
```yaml
Security Level: Maximum
- HTTPS: Enforced with HSTS
- Authentication: Multi-factor required
- Rate Limiting: Strict limits
- CORS: Restricted to production domains
- Logging: Audit level
- Data Encryption: End-to-end encryption
- Vulnerability Scanning: Daily
- Penetration Testing: Quarterly
- Security Headers: Full implementation
```

## Monitoring and Alerting Configuration

### Development Monitoring
```yaml
Level: Basic
Tools:
  - Console logging
  - Browser DevTools
  - Local error reporting

Alerts:
  - None (development only)
```

### Staging Monitoring
```yaml
Level: Comprehensive
Tools:
  - Application Performance Monitoring
  - Error tracking and reporting
  - Uptime monitoring
  - User behavior analytics

Alerts:
  - Email notifications for errors
  - Slack integration for critical issues
  - Weekly performance reports
```

### Production Monitoring
```yaml
Level: Enterprise
Tools:
  - Real-time performance monitoring
  - Comprehensive error tracking
  - 24/7 uptime monitoring
  - Advanced user analytics
  - Security monitoring
  - Business metrics tracking

Alerts:
  - Immediate PagerDuty alerts for critical issues
  - SMS/call escalation for outages
  - Real-time Slack notifications
  - Executive dashboard reporting
  - Automated incident response
```

## Deployment Pipeline Configuration

### Development Deployment
```yaml
Trigger: Manual or feature branch push
Process:
  1. Automated tests run
  2. Code quality checks
  3. Deploy to development environment
  4. Smoke tests executed
  
Rollback: Manual, immediate
```

### Staging Deployment
```yaml
Trigger: Main branch merge
Process:
  1. Full test suite execution
  2. Security scanning
  3. Performance testing
  4. Deploy to staging environment
  5. Integration tests
  6. User acceptance testing
  
Rollback: Automated, version-based
```

### Production Deployment
```yaml
Trigger: Release tag creation
Process:
  1. Final security audit
  2. Database migration dry-run
  3. Blue-green deployment
  4. Health checks
  5. Gradual traffic routing
  6. Post-deployment verification
  
Rollback: Automated with health check failures
Maintenance Window: Scheduled during low-traffic periods
```

## Performance Targets per Environment

### Development
- Build Time: <30 seconds
- Hot Reload: <2 seconds
- Test Execution: <60 seconds

### Staging
- Page Load: <3 seconds
- API Response: <500ms
- Search Results: <300ms

### Production
- Page Load: <2 seconds
- API Response: <200ms
- Search Results: <200ms
- Uptime: >99.9%
- Error Rate: <0.1%
