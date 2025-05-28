
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WireframeView = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="w-20 h-8 bg-gray-300 rounded"></div>
            <div className="flex space-x-4">
              <div className="w-16 h-6 bg-gray-300 rounded"></div>
              <div className="w-16 h-6 bg-gray-300 rounded"></div>
              <div className="w-16 h-6 bg-gray-300 rounded"></div>
              <div className="w-20 h-8 bg-blue-300 rounded"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">HEADER - Navigation & Logo</p>
        </div>

        {/* Hero Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-8 rounded-lg">
          <div className="text-center space-y-4">
            <div className="w-80 h-12 bg-gray-300 rounded mx-auto"></div>
            <div className="w-60 h-6 bg-gray-300 rounded mx-auto"></div>
            <div className="w-96 h-48 bg-gray-200 rounded mx-auto"></div>
            <div className="flex justify-center space-x-4">
              <div className="w-32 h-10 bg-blue-300 rounded"></div>
              <div className="w-32 h-10 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-center space-x-8 mt-8">
              <div className="w-24 h-16 bg-gray-300 rounded"></div>
              <div className="w-24 h-16 bg-gray-300 rounded"></div>
              <div className="w-24 h-16 bg-gray-300 rounded"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">HERO SECTION - Main banner with video, CTA buttons, and stats</p>
        </div>

        {/* Countdown Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="text-center">
            <div className="w-48 h-8 bg-gray-300 rounded mx-auto mb-4"></div>
            <div className="flex justify-center space-x-4">
              <div className="w-16 h-20 bg-gray-300 rounded"></div>
              <div className="w-16 h-20 bg-gray-300 rounded"></div>
              <div className="w-16 h-20 bg-gray-300 rounded"></div>
              <div className="w-16 h-20 bg-gray-300 rounded"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">COUNTDOWN - Event countdown timer</p>
        </div>

        {/* Video Highlights */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="w-48 h-8 bg-gray-300 rounded mb-6"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full h-32 bg-gray-200 rounded"></div>
            <div className="w-full h-32 bg-gray-200 rounded"></div>
            <div className="w-full h-32 bg-gray-200 rounded"></div>
          </div>
          <p className="text-xs text-gray-500 mt-4">VIDEO HIGHLIGHTS - Featured videos from previous events</p>
        </div>

        {/* Agenda Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="w-32 h-8 bg-gray-300 rounded mb-6"></div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="w-32 h-8 bg-blue-300 rounded"></div>
              <div className="w-32 h-8 bg-blue-300 rounded"></div>
              <div className="w-32 h-8 bg-blue-300 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-gray-200 rounded"></div>
              <div className="w-full h-16 bg-gray-200 rounded"></div>
              <div className="w-full h-16 bg-gray-200 rounded"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">AGENDA - Event schedule with filters and session cards</p>
        </div>

        {/* Favorites Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="w-32 h-8 bg-gray-300 rounded mb-4"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full h-20 bg-gray-200 rounded"></div>
            <div className="w-full h-20 bg-gray-200 rounded"></div>
          </div>
          <p className="text-xs text-gray-500 mt-4">FAVORITES - User's bookmarked sessions and speakers</p>
        </div>

        {/* Speakers Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="w-32 h-8 bg-gray-300 rounded mb-6"></div>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
              <div className="w-20 h-4 bg-gray-300 rounded mx-auto"></div>
              <div className="w-16 h-3 bg-gray-300 rounded mx-auto"></div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
              <div className="w-20 h-4 bg-gray-300 rounded mx-auto"></div>
              <div className="w-16 h-3 bg-gray-300 rounded mx-auto"></div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
              <div className="w-20 h-4 bg-gray-300 rounded mx-auto"></div>
              <div className="w-16 h-3 bg-gray-300 rounded mx-auto"></div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
              <div className="w-20 h-4 bg-gray-300 rounded mx-auto"></div>
              <div className="w-16 h-3 bg-gray-300 rounded mx-auto"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">SPEAKERS - Featured speakers with photos and bios</p>
        </div>

        {/* Venue & Hotels Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="w-48 h-8 bg-gray-300 rounded mb-6"></div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="w-full h-32 bg-gray-200 rounded mb-4"></div>
              <div className="w-32 h-6 bg-gray-300 rounded mb-2"></div>
              <div className="w-full h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="space-y-4">
              <div className="w-24 h-6 bg-gray-300 rounded mb-4"></div>
              <div className="w-full h-24 bg-gray-200 rounded"></div>
              <div className="w-full h-24 bg-gray-200 rounded"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">VENUE & ACCOMMODATION - Location details and hotel recommendations</p>
        </div>

        {/* Sponsors Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="w-32 h-8 bg-gray-300 rounded mb-6"></div>
          <div className="grid grid-cols-6 gap-4">
            <div className="w-full h-16 bg-gray-200 rounded"></div>
            <div className="w-full h-16 bg-gray-200 rounded"></div>
            <div className="w-full h-16 bg-gray-200 rounded"></div>
            <div className="w-full h-16 bg-gray-200 rounded"></div>
            <div className="w-full h-16 bg-gray-200 rounded"></div>
            <div className="w-full h-16 bg-gray-200 rounded"></div>
          </div>
          <p className="text-xs text-gray-500 mt-4">SPONSORS - Sponsor logos and partnerships</p>
        </div>

        {/* Registration Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="text-center space-y-4">
            <div className="w-48 h-8 bg-gray-300 rounded mx-auto"></div>
            <div className="w-64 h-4 bg-gray-300 rounded mx-auto"></div>
            <div className="w-32 h-10 bg-blue-300 rounded mx-auto"></div>
          </div>
          <p className="text-xs text-gray-500 mt-4">REGISTRATION - Call-to-action for event registration</p>
        </div>

        {/* Chatbot Section */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="w-32 h-8 bg-gray-300 rounded mb-4"></div>
          <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
          <div className="flex">
            <div className="flex-1 h-8 bg-gray-300 rounded-l"></div>
            <div className="w-16 h-8 bg-blue-300 rounded-r"></div>
          </div>
          <p className="text-xs text-gray-500 mt-4">AI ASSISTANT - Chatbot for event inquiries</p>
        </div>

        {/* Footer */}
        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <div className="grid grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-20 h-4 bg-gray-300 rounded"></div>
              <div className="w-16 h-3 bg-gray-300 rounded"></div>
              <div className="w-18 h-3 bg-gray-300 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="w-20 h-4 bg-gray-300 rounded"></div>
              <div className="w-16 h-3 bg-gray-300 rounded"></div>
              <div className="w-18 h-3 bg-gray-300 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="w-20 h-4 bg-gray-300 rounded"></div>
              <div className="w-16 h-3 bg-gray-300 rounded"></div>
              <div className="w-18 h-3 bg-gray-300 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="w-20 h-4 bg-gray-300 rounded"></div>
              <div className="w-16 h-3 bg-gray-300 rounded"></div>
              <div className="w-18 h-3 bg-gray-300 rounded"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">FOOTER - Links, contact info, and legal information</p>
        </div>

        {/* Page Info */}
        <div className="text-center text-gray-500 text-sm">
          <p>INTA Event 2025 - Low Fidelity Wireframe</p>
          <p>Event Management System Layout Structure</p>
        </div>
      </div>
    </div>
  );
};

export default WireframeView;
