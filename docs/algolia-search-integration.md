
# Algolia Search Integration

## Search Strategy Overview

Algolia will provide powerful, real-time search capabilities across all INTA events, speakers, sessions, and content.

## Search Indices Structure

### 1. Primary Indices

#### Events Index
```json
{
  "objectID": "event_123",
  "name": "INTA Annual Meeting 2028",
  "type": "annual",
  "location": "San Francisco, CA",
  "startDate": "2028-03-15",
  "tracks": ["AI Innovation", "Brand Protection"],
  "speakers": ["Dr. Sarah Chen", "Mark Rodriguez"],
  "tags": ["trademark", "intellectual property", "ai"]
}
```

#### Speakers Index
```json
{
  "objectID": "speaker_456",
  "name": "Dr. Sarah Chen",
  "company": "TechLegal Innovations",
  "title": "Chief Innovation Officer",
  "expertise": ["AI", "Machine Learning", "IP Law"],
  "events": ["event_123", "event_124"],
  "bio": "Leading expert in AI applications...",
  "social": {
    "linkedin": "https://linkedin.com/in/sarahchen",
    "twitter": "@sarahchen_ai"
  }
}
```

#### Sessions Index
```json
{
  "objectID": "session_789",
  "title": "AI and the Future of Trademark Law",
  "description": "Exploring how artificial intelligence...",
  "track": "AI Innovation",
  "eventId": "event_123",
  "speakers": ["speaker_456", "speaker_789"],
  "startTime": "2028-03-15T09:00:00Z",
  "location": "Main Auditorium",
  "tags": ["ai", "trademark", "future"]
}
```

#### Content Index (Media, Documents)
```json
{
  "objectID": "media_101",
  "title": "Opening Ceremony 2027",
  "type": "video",
  "eventId": "event_122",
  "tags": ["ceremony", "keynote"],
  "description": "Highlights from the opening ceremony",
  "url": "https://media.inta.org/videos/ceremony-2027.mp4"
}
```

### 2. Search Features Implementation

#### Instant Search Components
```typescript
// SearchBox component
import { SearchBox } from 'react-instantsearch';

const EventSearchBox = () => (
  <SearchBox
    placeholder="Search events, speakers, sessions..."
    className="w-full p-4 border rounded-lg"
    autoFocus
  />
);

// Multi-index search results
const SearchResults = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Index indexName="events">
      <Hits hitComponent={EventHit} />
    </Index>
    <Index indexName="speakers">
      <Hits hitComponent={SpeakerHit} />
    </Index>
    <Index indexName="sessions">
      <Hits hitComponent={SessionHit} />
    </Index>
  </div>
);
```

#### Faceted Search Filters
```typescript
const SearchFilters = () => (
  <div className="space-y-6">
    <RefinementList 
      attribute="type" 
      title="Event Type"
      showMore
    />
    <RefinementList 
      attribute="tracks" 
      title="Track"
      showMore
    />
    <RefinementList 
      attribute="expertise" 
      title="Speaker Expertise"
      showMore
    />
    <RangeInput 
      attribute="startDate" 
      title="Event Date"
    />
  </div>
);
```

### 3. Search Analytics and Insights

#### Tracked Metrics
- Search query frequency
- Click-through rates by result type
- User journey patterns
- Popular search terms
- Zero-result queries

#### Analytics Implementation
```typescript
// Track search events
const trackSearch = (query: string, results: number) => {
  analytics.track('Search Performed', {
    query,
    resultsCount: results,
    timestamp: new Date(),
    userId: user?.id
  });
};

// Track result clicks
const trackResultClick = (objectID: string, position: number) => {
  analytics.track('Search Result Clicked', {
    objectID,
    position,
    timestamp: new Date()
  });
};
```

### 4. Data Synchronization

#### Supabase to Algolia Sync
```javascript
// Supabase webhook handler
const syncToAlgolia = async (record, operation) => {
  const index = algolia.initIndex(getIndexName(record.table));
  
  switch(operation) {
    case 'INSERT':
    case 'UPDATE':
      await index.saveObject(transformRecord(record));
      break;
    case 'DELETE':
      await index.deleteObject(record.id);
      break;
  }
};

// Transform Supabase records for Algolia
const transformRecord = (record) => {
  return {
    objectID: record.id,
    ...record,
    _tags: extractTags(record),
    searchableText: generateSearchableText(record)
  };
};
```

### 5. Advanced Search Features

#### Auto-complete and Suggestions
```typescript
// Query suggestions
const QuerySuggestions = () => (
  <div className="suggestions-container">
    <Index indexName="events_query_suggestions">
      <Hits hitComponent={SuggestionHit} />
    </Index>
  </div>
);

// Recent searches
const RecentSearches = () => {
  const [searches] = useLocalStorage('recentSearches', []);
  return (
    <div className="recent-searches">
      {searches.map(search => (
        <button 
          key={search} 
          onClick={() => setQuery(search)}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          {search}
        </button>
      ))}
    </div>
  );
};
```

#### Geo-search for Events
```typescript
// Location-based search
const LocationSearch = () => (
  <Configure
    aroundLatLng="37.7749,-122.4194" // San Francisco coordinates
    aroundRadius={50000} // 50km radius
  />
);
```

### 6. Performance Optimization

#### Search Configuration
```javascript
const searchClient = algoliasearch(APP_ID, SEARCH_API_KEY);

// Configure search parameters
const searchConfig = {
  hitsPerPage: 20,
  attributesToRetrieve: [
    'name', 'title', 'description', 'startDate', 'location'
  ],
  attributesToHighlight: [
    'name', 'title', 'description'
  ],
  typoTolerance: 'min',
  removeWordsIfNoResults: 'lastWords'
};
```

#### Caching Strategy
- Client-side result caching
- CDN distribution for search assets
- Preload popular search results

### 7. Implementation Timeline

#### Week 1: Setup and Configuration
- Algolia account setup
- Index schema design
- Basic search implementation

#### Week 2: Data Synchronization
- Supabase to Algolia sync
- Real-time update handlers
- Error handling and retry logic

#### Week 3: Advanced Features
- Faceted search implementation
- Auto-complete and suggestions
- Analytics integration

#### Week 4: Testing and Optimization
- Performance testing
- Search relevance tuning
- User experience testing

### 8. Security and API Keys

#### API Key Management
- **Search-only API key**: Public, rate-limited
- **Admin API key**: Server-side only, full permissions
- **Analytics API key**: Limited to analytics endpoints

#### Rate Limiting
- 10,000 search queries per hour (public)
- 1,000 admin operations per hour
- Graceful degradation on rate limit exceeded
