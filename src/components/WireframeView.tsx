
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WireframeView = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=40&fit=crop" 
              alt="INTA Logo" 
              className="w-20 h-8 object-cover rounded"
            />
            <div className="flex space-x-4 items-center">
              <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded">Agenda</span>
              <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded">Favorites (3)</span>
              <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded">Speakers</span>
              <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded">Sponsors & Media</span>
              <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded">AI Assistant</span>
              <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded">Search</span>
              <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded">Profile</span>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">Register Now</Button>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <p className="text-sm font-semibold text-blue-800">HEADER SECTION</p>
            <p className="text-xs text-blue-600">Contains the INTA logo, main navigation menu (Agenda, Favorites with badge count, Speakers, Sponsors & Media, AI Assistant), search, profile, and prominent registration button. Sticky navigation for easy access.</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-8 rounded-lg">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">INTA Annual Meeting 2025</h1>
            <p className="text-lg text-gray-600">Join us for the premier intellectual property event</p>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop" 
              alt="Conference venue" 
              className="w-96 h-48 object-cover rounded mx-auto shadow-lg"
            />
            <div className="flex justify-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8">Register Now</Button>
              <Button variant="outline" className="px-8">Watch Promo</Button>
            </div>
            <div className="flex justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5000+</div>
                <div className="text-sm text-gray-600">Attendees</div>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded mt-6">
            <p className="text-sm font-semibold text-green-800">HERO SECTION</p>
            <p className="text-xs text-green-600">Main banner featuring event title, date, location, hero video/image, primary CTA buttons (Register, Watch Promo), and key statistics (speaker count, attendee numbers, session count).</p>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Starts In</h2>
            <div className="flex justify-center space-x-6">
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">45</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">30</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">15</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-purple-800">COUNTDOWN TIMER</p>
            <p className="text-xs text-purple-600">Real-time countdown to event start date with animated numbers. Creates urgency and excitement. Updates automatically every second.</p>
          </div>
        </div>

        {/* Video Highlights */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Highlights from Previous Events</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop" 
                alt="Keynote presentation" 
                className="w-full h-32 object-cover rounded shadow"
              />
              <p className="text-sm font-medium">Keynote Highlights</p>
            </div>
            <div className="space-y-2">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" 
                alt="Panel discussion" 
                className="w-full h-32 object-cover rounded shadow"
              />
              <p className="text-sm font-medium">Panel Discussions</p>
            </div>
            <div className="space-y-2">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop" 
                alt="Networking events" 
                className="w-full h-32 object-cover rounded shadow"
              />
              <p className="text-sm font-medium">Networking Moments</p>
            </div>
          </div>
          <div className="bg-orange-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-orange-800">VIDEO HIGHLIGHTS</p>
            <p className="text-xs text-orange-600">Showcase of video content from previous INTA events including keynote speeches, panel discussions, and networking moments. Builds credibility and excitement.</p>
          </div>
        </div>

        {/* Agenda Section with Tabs - View by Programs */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Agenda</h2>
          
          {/* Agenda Search and Filters */}
          <div className="mb-6 space-y-4">
            <div className="flex flex-wrap gap-4">
              <input 
                placeholder="Search sessions, speakers, tracks..." 
                className="flex-1 min-w-64 px-4 py-2 border rounded-lg"
              />
              <select className="px-4 py-2 border rounded-lg">
                <option>All Tracks</option>
                <option>AI Innovation</option>
                <option>Brand Protection</option>
                <option>Digital Innovation</option>
              </select>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mb-6">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <Button className="flex-1 bg-blue-600 text-white">View by Programs</Button>
              <Button variant="ghost" className="flex-1">View by Date</Button>
            </div>
          </div>

          {/* View by Programs Content */}
          <div className="space-y-4">
            <div className="bg-gray-50 border rounded-lg">
              <div className="p-4 border-b bg-blue-50">
                <h3 className="text-lg font-semibold text-blue-800">Main Conference Program</h3>
                <p className="text-sm text-blue-600">Core sessions, keynotes, and networking events</p>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">Opening Keynote: AI and the Future of Trademark Law</h4>
                      <p className="text-sm text-gray-600">9:00 AM - 10:30 AM • Main Auditorium</p>
                      <p className="text-sm text-blue-600">Dr. Sarah Chen, Mark Rodriguez</p>
                    </div>
                    <Button size="sm" variant="outline">Bookmark</Button>
                  </div>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-600">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">Global Brand Protection Strategies</h4>
                      <p className="text-sm text-gray-600">11:00 AM - 12:30 PM • Conference Room A</p>
                      <p className="text-sm text-green-600">Alice Wang, James Miller, Roberto Silva</p>
                    </div>
                    <Button size="sm" variant="outline">Bookmark</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border rounded-lg">
              <div className="p-4 border-b bg-purple-50">
                <h3 className="text-lg font-semibold text-purple-800">Young Professionals Program</h3>
                <p className="text-sm text-purple-600">Specialized sessions for emerging IP professionals</p>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-purple-600">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">Career Development in IP Law</h4>
                      <p className="text-sm text-gray-600">2:00 PM - 3:30 PM • Meeting Room C</p>
                      <p className="text-sm text-purple-600">Jennifer Adams, Michael Brown</p>
                    </div>
                    <Button size="sm" variant="outline">Bookmark</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-indigo-800">AGENDA - VIEW BY PROGRAMS</p>
            <p className="text-xs text-indigo-600">Organizes sessions by program tracks (Main Conference, Young Professionals, Corporate Counsel, etc.). Users can expand each program to see its sessions and bookmark individual sessions.</p>
          </div>
        </div>

        {/* View by Date Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Agenda - View by Date</h2>
          
          {/* Tab Navigation (Date View Active) */}
          <div className="mb-6">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <Button variant="ghost" className="flex-1">View by Programs</Button>
              <Button className="flex-1 bg-blue-600 text-white">View by Date</Button>
            </div>
          </div>

          {/* Date-wise Content */}
          <div className="space-y-6">
            <div className="bg-gray-50 border rounded-lg">
              <div className="p-4 bg-blue-600 text-white">
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="w-6 h-6 mr-3">📅</span>
                  Wednesday, May 28, 2025
                </h3>
              </div>
              <div className="divide-y">
                <div className="p-4 flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="text-sm font-mono text-gray-500 w-24">9:00 AM</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Opening Keynote: AI and the Future of Trademark Law</h4>
                        <p className="text-sm text-gray-600">Main Auditorium • Main Conference Program</p>
                        <p className="text-sm text-blue-600">Dr. Sarah Chen, Mark Rodriguez</p>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-1">AI Innovation</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Bookmark</Button>
                </div>
                
                <div className="p-4 flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="text-sm font-mono text-gray-500 w-24">11:00 AM</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Global Brand Protection Strategies</h4>
                        <p className="text-sm text-gray-600">Conference Room A • Main Conference Program</p>
                        <p className="text-sm text-green-600">Alice Wang, James Miller, Roberto Silva</p>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-1">Brand Protection</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Bookmark</Button>
                </div>

                <div className="p-4 flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="text-sm font-mono text-gray-500 w-24">2:00 PM</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Career Development in IP Law</h4>
                        <p className="text-sm text-gray-600">Meeting Room C • Young Professionals Program</p>
                        <p className="text-sm text-purple-600">Jennifer Adams, Michael Brown</p>
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mt-1">Career Development</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Bookmark</Button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border rounded-lg">
              <div className="p-4 bg-blue-600 text-white">
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="w-6 h-6 mr-3">📅</span>
                  Thursday, May 29, 2025
                </h3>
              </div>
              <div className="divide-y">
                <div className="p-4 flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="text-sm font-mono text-gray-500 w-24">9:00 AM</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Digital Evidence Collection Workshop</h4>
                        <p className="text-sm text-gray-600">Tech Lab B • Specialized Workshops</p>
                        <p className="text-sm text-orange-600">Lisa Thompson, David Park</p>
                        <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mt-1">Digital Innovation</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Bookmark</Button>
                </div>

                <div className="p-4 flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="text-sm font-mono text-gray-500 w-24">11:00 AM</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Managing Global IP Portfolios</h4>
                        <p className="text-sm text-gray-600">Executive Boardroom • Corporate Counsel Program</p>
                        <p className="text-sm text-teal-600">Rebecca Kim, John Anderson</p>
                        <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded mt-1">Portfolio Management</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Bookmark</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-cyan-800">AGENDA - VIEW BY DATE</p>
            <p className="text-xs text-cyan-600">Chronological view of all sessions across all programs organized by date and time. Shows session details, tracks, locations, and which program each session belongs to. Users can bookmark individual sessions.</p>
          </div>
        </div>

        {/* Favorites Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Favorites</h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded border">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-yellow-800">Bookmarked Sessions (3)</h3>
                <Button size="sm" variant="outline">View All</Button>
              </div>
              <div className="space-y-2">
                <div className="bg-white p-2 rounded text-sm">
                  <span className="font-medium">Opening Keynote: AI and the Future of Trademark Law</span>
                  <span className="text-gray-500 ml-2">May 28, 9:00 AM</span>
                </div>
                <div className="bg-white p-2 rounded text-sm">
                  <span className="font-medium">Global Brand Protection Strategies</span>
                  <span className="text-gray-500 ml-2">May 28, 11:00 AM</span>
                </div>
                <div className="bg-white p-2 rounded text-sm">
                  <span className="font-medium">Career Development in IP Law</span>
                  <span className="text-gray-500 ml-2">May 28, 2:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded border">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-yellow-800">Favorite Speakers (2)</h3>
                <Button size="sm" variant="outline">View All</Button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded text-sm text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d11994c94?w=50&h=50&fit=crop&crop=face"
                    alt="Dr. Sarah Chen"
                    className="w-10 h-10 rounded-full mx-auto mb-1"
                  />
                  <span className="font-medium text-xs">Dr. Sarah Chen</span>
                </div>
                <div className="bg-white p-2 rounded text-sm text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d11994c95?w=50&h=50&fit=crop&crop=face"
                    alt="Prof. Michael Brown"
                    className="w-10 h-10 rounded-full mx-auto mb-1"
                  />
                  <span className="font-medium text-xs">Prof. Michael Brown</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-yellow-800">FAVORITES SECTION</p>
            <p className="text-xs text-yellow-600">Personalized area where users can view their bookmarked sessions, favorite speakers, and saved content. Enables custom agenda creation and personal event planning. Shows bookmark count in header navigation.</p>
          </div>
        </div>

        {/* Speakers Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Speakers</h2>
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((speaker) => (
              <div key={speaker} className="text-center space-y-3">
                <img 
                  src={`https://images.unsplash.com/photo-${1535713875002 + speaker}-d1d11994c94?w=150&h=150&fit=crop&crop=face`}
                  alt={`Speaker ${speaker}`}
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                />
                <div>
                  <h4 className="font-semibold">Dr. Speaker {speaker}</h4>
                  <p className="text-sm text-gray-600">IP Law Expert</p>
                  <p className="text-xs text-blue-600">Harvard Law School</p>
                  <Button size="sm" variant="outline" className="mt-2">Follow</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline">View All Speakers</Button>
          </div>
          <div className="bg-teal-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-teal-800">SPEAKERS SECTION</p>
            <p className="text-xs text-teal-600">Showcase of keynote speakers and panelists with professional photos, credentials, bios, and their session details. Users can follow speakers and view their complete profiles. Links to their presentations and social profiles.</p>
          </div>
        </div>

        {/* Venue & Hotels Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Venue & Accommodation</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop" 
                alt="Convention center" 
                className="w-full h-32 object-cover rounded shadow mb-4"
              />
              <h3 className="font-semibold text-lg">Boston Convention Center</h3>
              <p className="text-sm text-gray-600">415 Summer Street, Boston, MA 02210</p>
              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline">Get Directions</Button>
                <Button size="sm" variant="outline">Parking Info</Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Recommended Hotels</h3>
              <div className="bg-gray-50 p-3 rounded">
                <h4 className="font-medium">Hilton Boston Back Bay</h4>
                <p className="text-sm text-gray-600">0.5 miles • $299/night</p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline">Book Now</Button>
                  <Button size="sm" variant="ghost">Details</Button>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <h4 className="font-medium">Marriott Copley Place</h4>
                <p className="text-sm text-gray-600">0.8 miles • $349/night</p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline">Book Now</Button>
                  <Button size="sm" variant="ghost">Details</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cyan-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-cyan-800">VENUE & ACCOMMODATION</p>
            <p className="text-xs text-cyan-600">Event location details with maps, directions, parking information, and curated list of nearby hotels with special rates for attendees. Integration with booking platforms and travel planning tools.</p>
          </div>
        </div>

        {/* Sponsors & Media Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Sponsors & Media Partners</h2>
          
          {/* Platinum Sponsors */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Platinum Sponsors</h3>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((sponsor) => (
                <div key={sponsor} className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded flex items-center justify-center h-20 border">
                  <span className="text-lg font-bold text-gray-600">Platinum {sponsor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Gold Sponsors</h3>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((sponsor) => (
                <div key={sponsor} className="bg-yellow-50 p-4 rounded flex items-center justify-center h-16 border">
                  <span className="text-sm font-medium text-gray-600">Gold {sponsor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Media Partners */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Media Partners</h3>
            <div className="grid grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((media) => (
                <div key={media} className="bg-blue-50 p-3 rounded flex items-center justify-center h-12 border">
                  <span className="text-xs font-medium text-gray-600">Media {media}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-pink-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-pink-800">SPONSORS & MEDIA SECTION</p>
            <p className="text-xs text-pink-600">Display of sponsor logos organized by sponsorship tiers (Platinum, Gold, Silver) and media partners. Clickable logos linking to sponsor information, special offers for attendees, and media coverage details.</p>
          </div>
        </div>

        {/* AI Assistant Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Event Assistant</h2>
          <div className="bg-gray-50 border rounded p-4 h-64 mb-4 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
                <p className="text-sm">👋 Hi! I'm your INTA 2025 assistant. How can I help you today?</p>
              </div>
              <div className="bg-gray-200 p-3 rounded-lg max-w-xs ml-auto">
                <p className="text-sm">What sessions cover AI and patents?</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg max-w-md">
                <p className="text-sm">I found 3 sessions on AI and patents:</p>
                <ul className="text-xs mt-2 space-y-1">
                  <li>• "AI and the Future of Trademark Law" - Wed 9:00 AM</li>
                  <li>• "Digital Evidence Collection Workshop" - Thu 9:00 AM</li>
                  <li>• "Patent Analytics with AI" - Fri 2:00 PM</li>
                </ul>
                <p className="text-xs mt-2 text-blue-600">Would you like me to bookmark any of these?</p>
              </div>
              <div className="bg-gray-200 p-3 rounded-lg max-w-xs ml-auto">
                <p className="text-sm">Yes, bookmark the first two please</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
                <p className="text-sm">✅ Done! I've bookmarked both sessions for you.</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Ask about sessions, speakers, venue, networking..." 
              className="flex-1 px-3 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="rounded-l-none bg-blue-600">Send</Button>
          </div>
          <div className="flex gap-2 mt-3">
            <Button size="sm" variant="outline">Find networking events</Button>
            <Button size="sm" variant="outline">Show my schedule</Button>
            <Button size="sm" variant="outline">Venue directions</Button>
          </div>
          <div className="bg-blue-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-blue-800">AI ASSISTANT</p>
            <p className="text-xs text-blue-600">Interactive chatbot to help attendees find sessions, speakers, venue information, manage bookmarks, and answer event-related questions. Powered by AI with event-specific knowledge base. Accessible from main navigation.</p>
          </div>
        </div>

        {/* Search Functionality Wireframe */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Search Functionality</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <input 
                  type="text" 
                  placeholder="Search sessions, speakers, sponsors..." 
                  className="flex-1 px-4 py-2 border rounded-lg"
                  defaultValue="AI trademark"
                />
                <Button>Search</Button>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Session</span>
                  <h4 className="font-medium mt-1">AI and the Future of Trademark Law</h4>
                  <p className="text-sm text-gray-600">Keynote session exploring how artificial intelligence...</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Speaker</span>
                  <h4 className="font-medium mt-1">Dr. Sarah Chen</h4>
                  <p className="text-sm text-gray-600">Leading expert in AI applications for trademark law...</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Track</span>
                  <h4 className="font-medium mt-1">AI Innovation Track</h4>
                  <p className="text-sm text-gray-600">All sessions related to artificial intelligence...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-gray-800">SEARCH FUNCTIONALITY</p>
            <p className="text-xs text-gray-600">Global search accessible from header navigation. Searches across sessions, speakers, sponsors, tracks, and content. Provides categorized results with quick access to relevant information.</p>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile & My Event</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Profile Information</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Name:</span> John Doe</p>
                  <p><span className="font-medium">Company:</span> IP Law Firm LLC</p>
                  <p><span className="font-medium">Registration:</span> Full Conference</p>
                  <p><span className="font-medium">Badge:</span> Ready for pickup</p>
                </div>
                <Button size="sm" className="mt-2">Edit Profile</Button>
              </div>
              
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-semibold mb-2">My Schedule</h3>
                <div className="space-y-1 text-sm">
                  <p>• Opening Keynote (Wed 9:00 AM)</p>
                  <p>• Brand Protection Panel (Wed 11:00 AM)</p>
                  <p>• Networking Lunch (Wed 12:30 PM)</p>
                </div>
                <Button size="sm" className="mt-2" variant="outline">View Full Schedule</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Networking</h3>
                <div className="space-y-2 text-sm">
                  <p>• 5 Connection requests sent</p>
                  <p>• 3 New messages</p>
                  <p>• 2 Meeting requests</p>
                </div>
                <Button size="sm" className="mt-2" variant="outline">Manage Connections</Button>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Event Resources</h3>
                <div className="space-y-1 text-sm">
                  <p>• Event mobile app</p>
                  <p>• Digital event guide</p>
                  <p>• Session recordings</p>
                  <p>• Presentation downloads</p>
                </div>
                <Button size="sm" className="mt-2" variant="outline">Access Resources</Button>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-slate-800">USER PROFILE & MY EVENT</p>
            <p className="text-xs text-slate-600">Personal dashboard accessible from header navigation. Shows user information, personalized schedule, networking activity, and access to event resources. Central hub for attendee's event experience.</p>
          </div>
        </div>

        {/* Registration Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Don't Miss Out!</h2>
            <p className="text-lg text-gray-600">Early bird pricing ends in 10 days</p>
            <div className="bg-green-100 p-4 rounded inline-block">
              <span className="text-2xl font-bold text-green-800">$599</span>
              <span className="text-sm text-green-600 ml-2">Early Bird Price</span>
              <span className="text-xs text-gray-500 block">Regular price: $799</span>
            </div>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-12">Register Now</Button>
              <Button size="lg" variant="outline" className="px-8">Group Rates</Button>
            </div>
          </div>
          <div className="bg-emerald-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-emerald-800">REGISTRATION CTA</p>
            <p className="text-xs text-emerald-600">Final call-to-action with pricing information, registration deadlines, group discounts, and prominent registration button. Emphasizes urgency and value proposition throughout the site.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="grid grid-cols-4 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Event Info</h4>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Schedule</p>
                <p className="text-sm text-gray-600">Venue</p>
                <p className="text-sm text-gray-600">Registration</p>
                <p className="text-sm text-gray-600">Travel</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Resources</h4>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Mobile App</p>
                <p className="text-sm text-gray-600">Event Guide</p>
                <p className="text-sm text-gray-600">Networking</p>
                <p className="text-sm text-gray-600">Live Stream</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Support</h4>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Contact Us</p>
                <p className="text-sm text-gray-600">FAQs</p>
                <p className="text-sm text-gray-600">Tech Support</p>
                <p className="text-sm text-gray-600">Accessibility</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Legal</h4>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Privacy Policy</p>
                <p className="text-sm text-gray-600">Terms of Use</p>
                <p className="text-sm text-gray-600">Code of Conduct</p>
                <p className="text-sm text-gray-600">Cookie Policy</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-4 mt-6">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">© 2025 International Trademark Association. All rights reserved.</p>
              <div className="flex space-x-4">
                <span className="text-sm text-gray-400">Follow us:</span>
                <span className="text-sm text-blue-600">LinkedIn</span>
                <span className="text-sm text-blue-600">Twitter</span>
                <span className="text-sm text-blue-600">YouTube</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-gray-800">FOOTER SECTION</p>
            <p className="text-xs text-gray-600">Comprehensive footer with organized links to event information, resources, support contacts, and legal pages. Includes social media links, copyright information, and accessibility features.</p>
          </div>
        </div>

        {/* Mobile Bottom Action Bar */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Mobile Bottom Action Bar</h2>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <div className="w-6 h-6 bg-blue-500 rounded mx-auto"></div>
                <span className="text-xs font-medium">Agenda</span>
              </div>
              <div className="space-y-1 relative">
                <div className="w-6 h-6 bg-red-500 rounded mx-auto relative">
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                </div>
                <span className="text-xs font-medium">Favorites</span>
              </div>
              <div className="space-y-1">
                <div className="w-6 h-6 bg-gray-500 rounded mx-auto"></div>
                <span className="text-xs font-medium">Search</span>
              </div>
              <div className="space-y-1">
                <div className="w-6 h-6 bg-green-500 rounded mx-auto"></div>
                <span className="text-xs font-medium">My Event</span>
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-indigo-800">MOBILE BOTTOM ACTION BAR</p>
            <p className="text-xs text-indigo-600">Fixed bottom navigation for mobile devices with quick access to primary functions: Agenda, Favorites (with badge count), Search, and My Event profile. Provides consistent mobile navigation experience.</p>
          </div>
        </div>

        {/* Page Info */}
        <div className="text-center text-gray-500 text-sm space-y-2 py-8">
          <p className="text-lg font-semibold">INTA Event 2025 - Complete Wireframe</p>
          <p>Full Event Management System Layout with All Navigation Items</p>
          <p className="text-xs">This wireframe includes all header menu items (Agenda, Favorites, Speakers, Sponsors & Media, AI Assistant, Search, Profile) with detailed functionality and mobile-responsive design patterns</p>
        </div>
      </div>
    </div>
  );
};

export default WireframeView;
