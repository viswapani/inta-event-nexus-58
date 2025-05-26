
import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface CountdownSectionProps {
  eventData?: {
    name: string;
    startDate: string;
    endDate: string;
    location: string;
  };
}

const CountdownSection = ({ eventData }: CountdownSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = eventData ? new Date(eventData.startDate) : new Date('2028-03-15');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventData]);

  const eventName = eventData?.name || 'INTA EVENT 2028';
  const location = eventData?.location || 'San Francisco, CA';
  const dates = eventData ? `${eventData.startDate} - ${eventData.endDate}` : 'March 15-17, 2028';

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
