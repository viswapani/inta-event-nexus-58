
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Wifi, Car, Utensils, ExternalLink } from 'lucide-react';

interface VenueSectionProps {
  venueData?: {
    name: string;
    address: string;
    description: string;
    amenities: string[];
    mapUrl: string;
  };
  hotelsData?: Array<{
    name: string;
    rating: number;
    distance: string;
    price: string;
    amenities: string[];
    bookingUrl: string;
    image: string;
  }>;
}

const VenueSection = ({ venueData, hotelsData }: VenueSectionProps) => {
  const venue = venueData || {
    name: 'Moscone Convention Center',
    address: '747 Howard St, San Francisco, CA 94103',
    description: 'State-of-the-art convention center in the heart of downtown San Francisco.',
    amenities: ['Free WiFi', 'Parking Available', 'Multiple Restaurants', 'Accessibility'],
    mapUrl: 'https://maps.google.com'
  };

  const hotels = hotelsData || [
    {
      name: 'The St. Regis San Francisco',
      rating: 5,
      distance: '0.3 miles',
      price: '$450/night',
      amenities: ['Spa', 'Fitness Center', 'Restaurant'],
      bookingUrl: 'https://booking.com',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop'
    },
    {
      name: 'Hotel Zephyr',
      rating: 4,
      distance: '1.2 miles',
      price: '$280/night',
      amenities: ['Waterfront Views', 'Free WiFi', 'Parking'],
      bookingUrl: 'https://booking.com',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop'
    },
    {
      name: 'Hampton Inn Downtown',
      rating: 4,
      distance: '0.8 miles',
      price: '$180/night',
      amenities: ['Free Breakfast', 'Gym', 'Business Center'],
      bookingUrl: 'https://booking.com',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
      case 'free wifi':
        return <Wifi className="w-4 h-4" />;
      case 'parking':
      case 'parking available':
        return <Car className="w-4 h-4" />;
      case 'restaurant':
      case 'restaurants':
      case 'multiple restaurants':
        return <Utensils className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  return (
    <section id="venue" className="py-20 bg-inta-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-inta-navy mb-6">Venue & Accommodation</h2>
          <p className="text-lg text-inta-gray max-w-2xl mx-auto">
            Join us at our premium venue with convenient accommodation options nearby.
          </p>
        </div>

        {/* Venue Information */}
        <div className="mb-16">
          <Card className="shadow-xl border-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-3xl text-inta-navy mb-4">{venue.name}</CardTitle>
                  <div className="flex items-start mb-4">
                    <MapPin className="w-6 h-6 text-inta-blue mr-3 mt-1" />
                    <p className="text-inta-gray text-lg">{venue.address}</p>
                  </div>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-inta-gray mb-6 text-lg leading-relaxed">{venue.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-inta-navy mb-3">Venue Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {venue.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline" className="flex items-center gap-1 px-3 py-1">
                          {getAmenityIcon(amenity)}
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-inta-blue hover:bg-inta-navy text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Google Maps
                  </Button>
                </CardContent>
              </div>
              
              <div className="h-80 lg:h-auto">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-inta-gray">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Google Maps Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Hotels Section */}
        <div>
          <h3 className="text-3xl font-bold text-inta-navy mb-8 text-center">Recommended Hotels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-inta-navy">{hotel.name}</CardTitle>
                    <div className="flex items-center">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-inta-gray">
                    <span>{hotel.distance} from venue</span>
                    <span className="font-semibold text-inta-navy">{hotel.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {hotel.amenities.map((amenity, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-inta-accent hover:bg-yellow-500 text-inta-navy font-semibold">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Booking Assistance */}
        <div className="mt-16 bg-white rounded-lg p-8 text-center shadow-lg">
          <h3 className="text-2xl font-semibold text-inta-navy mb-4">Need Booking Assistance?</h3>
          <p className="text-inta-gray mb-6">
            Our team can help you find the perfect accommodation for your stay.
          </p>
          <Button variant="outline" className="border-inta-blue text-inta-blue hover:bg-inta-blue hover:text-white">
            Contact Concierge
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
