
# INTA Event Management System - Architecture Overview

## System Overview

The INTA Event Management System is designed as a multi-event platform supporting monthly, quarterly, and annual events with dynamic theming, content management, and WordPress integration.

## Core Architecture Principles

### 1. Multi-Event Support
- Single codebase supports unlimited events
- Dynamic routing: `/event/{event-slug}`
- Event-specific content and theming
- Centralized admin management

### 2. Technology Stack
- **Frontend**: React + TypeScript + Vite
- **UI Framework**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (PostgreSQL + Edge Functions)
- **CMS Integration**: WordPress (existing INTA.org)
- **Search**: Algolia (speakers, sessions, content)
- **Deployment**: Lovable platform

### 3. Integration Architecture

#### WordPress Integration
- **Content Sync**: WordPress serves as primary CMS
- **API Layer**: WordPress REST API + custom endpoints
- **Data Flow**: WordPress → Supabase → React frontend
- **Authentication**: Single sign-on with WordPress users

#### Algolia Search Integration
- **Real-time Search**: Speakers, sessions, agenda items
- **Faceted Search**: By track, speaker expertise, event type
- **Auto-complete**: Smart suggestions for events and content
- **Analytics**: Search behavior tracking

## Component Architecture

### Dynamic Components
All components accept event data as props for multi-event support:

```typescript
interface EventComponentProps {
  eventData: Event;
  themeConfig: ThemeConfig;
  contentData: SectionContent;
}
```

### Theme System
- CSS custom properties for dynamic theming
- Event-specific color schemes and styling
- Component-level theme overrides
- Responsive design patterns

### Content Management
- Section-based content editing
- Version control for content changes
- Preview and publish workflow
- Multi-language support (future)

## Data Flow Architecture

1. **WordPress CMS** → Content creation and management
2. **Sync Service** → Automated data synchronization
3. **Supabase Database** → Event data storage and APIs
4. **React Frontend** → Dynamic rendering and user interaction
5. **Algolia Search** → Enhanced search capabilities

## Scalability Considerations

- **Event Volume**: Support for 50+ events annually
- **Concurrent Users**: 10,000+ during major events
- **Content Volume**: Unlimited speakers, sessions, media
- **Geographic Distribution**: Global CDN for performance

## Security Architecture

- **Authentication**: WordPress SSO + Supabase auth
- **Authorization**: Role-based access control
- **Data Protection**: GDPR compliant data handling
- **API Security**: Rate limiting and input validation

## Future Enhancements

- Mobile app integration
- Real-time event updates
- Advanced analytics dashboard
- AI-powered content recommendations
- Multi-language internationalization
