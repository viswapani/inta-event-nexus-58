
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Wifi, Car, Utensils, ExternalLink, Play } from 'lucide-react';

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
    description: 'State-of-the-art convention center in the heart of downtown San Francisco, featuring cutting-edge technology and world-class facilities.',
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
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop&auto=format'
    },
    {
      name: 'Hotel Zephyr',
      rating: 4,
      distance: '1.2 miles',
      price: '$280/night',
      amenities: ['Waterfront Views', 'Free WiFi', 'Parking'],
      bookingUrl: 'https://booking.com',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&auto=format'
    },
    {
      name: 'Hampton Inn Downtown',
      rating: 4,
      distance: '0.8 miles',
      price: '$180/night',
      amenities: ['Free Breakfast', 'Gym', 'Business Center'],
      bookingUrl: 'https://booking.com',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&auto=format'
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
    <section id="venue" className="py-20 bg-gradient-to-br from-inta-light via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.4"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-inta-blue/10 rounded-full border border-inta-blue/20 mb-6">
            <span className="text-inta-blue font-semibold">Location & Stay</span>
          </div>
          <h2 className="text-5xl font-bold text-inta-navy mb-6">Venue & Accommodation</h2>
          <p className="text-xl text-inta-gray max-w-3xl mx-auto leading-relaxed">
            Experience our world-class venue in the heart of San Francisco with premium accommodation options nearby.
          </p>
        </div>

        {/* Enhanced Venue Information */}
        <div className="mb-20">
          <Card className="shadow-2xl border-0 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-4xl text-inta-navy mb-6 font-bold">{venue.name}</CardTitle>
                  <div className="flex items-start mb-6">
                    <MapPin className="w-7 h-7 text-inta-blue mr-4 mt-1" />
                    <p className="text-inta-gray text-xl leading-relaxed">{venue.address}</p>
                  </div>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-inta-gray mb-8 text-xl leading-relaxed">{venue.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-inta-navy mb-4 text-lg">Venue Amenities</h4>
                    <div className="flex flex-wrap gap-3">
                      {venue.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline" className="flex items-center gap-2 px-4 py-2 text-sm border-inta-blue/30 hover:bg-inta-blue/5 transition-colors">
                          {getAmenityIcon(amenity)}
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-inta-blue hover:bg-inta-navy text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View on Google Maps
                    </Button>
                    <Button variant="outline" className="border-inta-accent text-inta-accent hover:bg-inta-accent hover:text-white">
                      <Play className="w-5 h-5 mr-2" />
                      Virtual Tour
                    </Button>
                  </div>
                </CardContent>
              </div>
              
              <div className="h-96 lg:h-auto relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Moscone Convention Center"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inta-navy/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-inta-navy font-semibold">San Francisco Convention Center</p>
                    <p className="text-inta-gray text-sm">Downtown San Francisco</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Enhanced Hotels Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-inta-navy mb-4">Recommended Hotels</h3>
            <p className="text-lg text-inta-gray">Carefully selected accommodations for your comfort and convenience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden group hover:-translate-y-2">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-inta-navy font-bold">{hotel.price}</span>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-xl text-inta-navy font-bold">{hotel.name}</CardTitle>
                    <div className="flex items-center">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-inta-gray">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {hotel.distance} from venue
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-inta-light text-inta-navy">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-inta-accent hover:bg-yellow-500 text-inta-navy font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Booking Assistance */}
        <div className="mt-20 bg-gradient-to-r from-inta-navy to-inta-blue rounded-2xl p-10 text-center shadow-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.1"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v20h40V20H20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Need Booking Assistance?</h3>
            <p className="text-blue-200 mb-8 text-lg max-w-2xl mx-auto">
              Our dedicated concierge team is here to help you find the perfect accommodation and make your stay unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-inta-navy bg-white/10 backdrop-blur-sm">
                Contact Concierge
              </Button>
              <Button className="bg-inta-accent hover:bg-yellow-500 text-inta-navy font-semibold">
                <Play className="w-4 h-4 mr-2" />
                Virtual Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
