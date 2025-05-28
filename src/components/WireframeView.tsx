
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
              <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded">Home</span>
              <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded">Agenda</span>
              <span className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded">Speakers</span>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">Register</Button>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <p className="text-sm font-semibold text-blue-800">HEADER SECTION</p>
            <p className="text-xs text-blue-600">Contains the INTA logo, main navigation menu (Home, Agenda, Speakers, Venue, etc.), and prominent registration/login button. Sticky navigation for easy access.</p>
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

        {/* Agenda Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Agenda</h2>
          <div className="space-y-4">
            <div className="flex justify-center space-x-4 mb-6">
              <Button className="bg-blue-600">Day 1</Button>
              <Button variant="outline">Day 2</Button>
              <Button variant="outline">Day 3</Button>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-600">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Opening Keynote: Future of IP Law</h4>
                    <p className="text-sm text-gray-600">9:00 AM - 10:00 AM • Main Auditorium</p>
                    <p className="text-sm text-blue-600">Speaker: Dr. Sarah Johnson</p>
                  </div>
                  <Button size="sm" variant="outline">Add to Calendar</Button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-green-600">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Panel: AI and Trademark Protection</h4>
                    <p className="text-sm text-gray-600">10:30 AM - 11:30 AM • Conference Room A</p>
                    <p className="text-sm text-green-600">4 Expert Panelists</p>
                  </div>
                  <Button size="sm" variant="outline">Add to Calendar</Button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-purple-600">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Workshop: Patent Filing Strategies</h4>
                    <p className="text-sm text-gray-600">2:00 PM - 4:00 PM • Workshop Room 1</p>
                    <p className="text-sm text-purple-600">Interactive Session</p>
                  </div>
                  <Button size="sm" variant="outline">Add to Calendar</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-indigo-800">AGENDA SECTION</p>
            <p className="text-xs text-indigo-600">Complete event schedule with day-wise filters, session details, speaker information, venue, timing, and personal calendar integration. Users can bookmark sessions and create personal agendas.</p>
          </div>
        </div>

        {/* Favorites Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">My Favorites</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-yellow-50 p-4 rounded border">
              <h4 className="font-semibold text-yellow-800">Bookmarked Sessions (3)</h4>
              <p className="text-sm text-yellow-600">AI in IP Law, Patent Workshop, Closing Keynote</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded border">
              <h4 className="font-semibold text-yellow-800">Favorite Speakers (2)</h4>
              <p className="text-sm text-yellow-600">Dr. Sarah Johnson, Prof. Michael Chen</p>
            </div>
          </div>
          <div className="bg-yellow-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-yellow-800">FAVORITES SECTION</p>
            <p className="text-xs text-yellow-600">Personalized area where users can view their bookmarked sessions, favorite speakers, and saved content. Enables custom agenda creation and personal event planning.</p>
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
                </div>
              </div>
            ))}
          </div>
          <div className="bg-teal-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-teal-800">SPEAKERS SECTION</p>
            <p className="text-xs text-teal-600">Showcase of keynote speakers and panelists with professional photos, credentials, bios, and their session details. Links to their presentations and social profiles.</p>
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
              <Button size="sm" className="mt-2" variant="outline">Get Directions</Button>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Recommended Hotels</h3>
              <div className="bg-gray-50 p-3 rounded">
                <h4 className="font-medium">Hilton Boston Back Bay</h4>
                <p className="text-sm text-gray-600">0.5 miles • $299/night</p>
                <Button size="sm" className="mt-1" variant="outline">Book Now</Button>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <h4 className="font-medium">Marriott Copley Place</h4>
                <p className="text-sm text-gray-600">0.8 miles • $349/night</p>
                <Button size="sm" className="mt-1" variant="outline">Book Now</Button>
              </div>
            </div>
          </div>
          <div className="bg-cyan-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-cyan-800">VENUE & ACCOMMODATION</p>
            <p className="text-xs text-cyan-600">Event location details with maps, directions, parking information, and curated list of nearby hotels with special rates for attendees. Integration with booking platforms.</p>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Sponsors</h2>
          <div className="grid grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((sponsor) => (
              <div key={sponsor} className="bg-gray-100 p-4 rounded flex items-center justify-center h-16">
                <span className="text-sm font-medium text-gray-600">Sponsor {sponsor}</span>
              </div>
            ))}
          </div>
          <div className="bg-pink-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-pink-800">SPONSORS SECTION</p>
            <p className="text-xs text-pink-600">Display of sponsor logos organized by sponsorship tiers (Platinum, Gold, Silver). Clickable logos linking to sponsor information and special offers for attendees.</p>
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
            </div>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-12">Register Now</Button>
          </div>
          <div className="bg-emerald-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-emerald-800">REGISTRATION CTA</p>
            <p className="text-xs text-emerald-600">Final call-to-action with pricing information, registration deadlines, and prominent registration button. Emphasizes urgency and value proposition.</p>
          </div>
        </div>

        {/* Chatbot Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Event Assistant</h2>
          <div className="bg-gray-50 border rounded p-4 h-48 mb-4 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-blue-100 p-2 rounded max-w-xs">
                <p className="text-sm">Hi! I'm your INTA 2025 assistant. How can I help you today?</p>
              </div>
              <div className="bg-gray-200 p-2 rounded max-w-xs ml-auto">
                <p className="text-sm">What sessions cover AI and patents?</p>
              </div>
              <div className="bg-blue-100 p-2 rounded max-w-xs">
                <p className="text-sm">I found 3 sessions on AI and patents. Here are the details...</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <input 
              type="text" 
              placeholder="Ask about sessions, speakers, venue..." 
              className="flex-1 px-3 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="rounded-l-none bg-blue-600">Send</Button>
          </div>
          <div className="bg-blue-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-blue-800">AI ASSISTANT</p>
            <p className="text-xs text-blue-600">Interactive chatbot to help attendees find sessions, speakers, venue information, and answer event-related questions. Powered by AI with event-specific knowledge base.</p>
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
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Resources</h4>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Mobile App</p>
                <p className="text-sm text-gray-600">Event Guide</p>
                <p className="text-sm text-gray-600">Networking</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Support</h4>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Contact Us</p>
                <p className="text-sm text-gray-600">FAQs</p>
                <p className="text-sm text-gray-600">Tech Support</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Legal</h4>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Privacy Policy</p>
                <p className="text-sm text-gray-600">Terms of Use</p>
                <p className="text-sm text-gray-600">Code of Conduct</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-4 mt-6 text-center">
            <p className="text-sm text-gray-500">© 2025 International Trademark Association. All rights reserved.</p>
          </div>
          <div className="bg-gray-50 p-3 rounded mt-4">
            <p className="text-sm font-semibold text-gray-800">FOOTER SECTION</p>
            <p className="text-xs text-gray-600">Comprehensive footer with organized links to event information, resources, support contacts, and legal pages. Includes copyright and contact information.</p>
          </div>
        </div>

        {/* Page Info */}
        <div className="text-center text-gray-500 text-sm space-y-2 py-8">
          <p className="text-lg font-semibold">INTA Event 2025 - Detailed Wireframe</p>
          <p>Complete Event Management System Layout with Visual Content</p>
          <p className="text-xs">This wireframe shows the full user journey from landing to registration with actual content examples</p>
        </div>
      </div>
    </div>
  );
};

export default WireframeView;
