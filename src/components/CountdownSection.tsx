
import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CountdownSectionProps {
  eventData?: {
    name: string;
    startDate: string;
    endDate: string;
    location: string;
  };
}

interface CurrentDaySession {
  time: string;
  title: string;
  location: string;
  track: string;
}

const CountdownSection = ({ eventData }: CountdownSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isEventActive, setIsEventActive] = useState(false);

  // Mock current day sessions - in real implementation, this would come from API
  const getCurrentDaySessions = (): CurrentDaySession[] => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    
    // Mock sessions for current day
    return [
      {
        time: '9:00 AM - 10:30 AM',
        title: 'Opening Keynote: AI and the Future of Trademark Law',
        location: 'Main Auditorium',
        track: 'AI Innovation'
      },
      {
        time: '11:00 AM - 12:30 PM',
        title: 'Global Brand Protection Strategies',
        location: 'Conference Room A',
        track: 'Brand Protection'
      },
      {
        time: '2:00 PM - 3:30 PM',
        title: 'Digital Evidence Collection Workshop',
        location: 'Tech Lab B',
        track: 'Digital Innovation'
      }
    ];
  };

  useEffect(() => {
    const targetDate = eventData ? new Date(eventData.startDate) : new Date('2025-05-28');
    const endDate = eventData ? new Date(eventData.endDate) : new Date('2025-05-30');
    
    const timer = setInterval(() => {
      const now = new Date();
      const startTime = targetDate.getTime();
      const endTime = endDate.getTime();
      const currentTime = now.getTime();

      // Check if event is currently active
      if (currentTime >= startTime && currentTime <= endTime) {
        setIsEventActive(true);
      } else {
        setIsEventActive(false);
        
        // Calculate countdown for future events
        const distance = startTime - currentTime;
        
        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setTimeLeft({ days, hours, minutes, seconds });
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventData]);

  const eventName = eventData?.name || 'INTA 2025 Annual Meeting';
  const location = eventData?.location || 'San Francisco, CA';
  const dates = eventData ? `${eventData.startDate} - ${eventData.endDate}` : 'May 28-30, 2025';

  const currentDaySessions = getCurrentDaySessions();

  if (isEventActive) {
    // Show current day agenda when event is active
    return (
      <section className="py-16 bg-gradient-to-r from-inta-navy via-inta-blue to-inta-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Today's Agenda</h2>
            <p className="text-xl text-blue-200">Live from {eventName}</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg mt-4">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-inta-accent" />
                <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-inta-accent" />
                <span>{location}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 max-w-4xl mx-auto mb-8">
            {currentDaySessions.map((session, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-5 h-5 text-inta-accent" />
                        <span className="font-semibold text-inta-accent">{session.time}</span>
                        <span className="px-2 py-1 bg-inta-accent text-inta-navy rounded-full text-xs font-medium">
                          {session.track}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{session.title}</h3>
                      <p className="text-blue-200 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {session.location}
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-inta-navy"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="bg-inta-accent hover:bg-yellow-500 text-inta-navy font-bold"
              size="lg"
            >
              View Full Agenda
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Show countdown for future events
  return (
    <section className="py-16 bg-gradient-to-r from-inta-navy via-inta-blue to-inta-navy text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Event Countdown</h2>
        <p className="text-xl mb-8 text-blue-200">Don't miss {eventName}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-inta-accent">{timeLeft.days}</div>
            <div className="text-sm text-blue-200">Days</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-inta-accent">{timeLeft.hours}</div>
            <div className="text-sm text-blue-200">Hours</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-inta-accent">{timeLeft.minutes}</div>
            <div className="text-sm text-blue-200">Minutes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-inta-accent">{timeLeft.seconds}</div>
            <div className="text-sm text-blue-200">Seconds</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
          <div className="flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-inta-accent" />
            <span>{dates}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-6 h-6 mr-2 text-inta-accent" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
