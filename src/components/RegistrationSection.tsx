
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckIcon, Star, Clock, Users, Gift } from 'lucide-react';

const RegistrationSection = () => {
  const plans = [
    {
      name: 'Early Bird',
      price: '$299',
      originalPrice: '$399',
      savings: 'Save $100',
      deadline: 'Until Feb 15, 2028',
      popular: true,
      features: [
        'Access to all sessions and workshops',
        'Welcome reception and networking events',
        'Event materials and swag bag',
        'Mobile app access',
        'Session recordings (30 days)',
        'Lunch included (3 days)',
        'AI assistant access'
      ]
    },
    {
      name: 'Regular',
      price: '$399',
      originalPrice: null,
      savings: null,
      deadline: 'After Feb 15, 2028',
      popular: false,
      features: [
        'Access to all sessions and workshops',
        'Welcome reception and networking events',
        'Event materials and swag bag',
        'Mobile app access',
        'Session recordings (30 days)',
        'Lunch included (3 days)'
      ]
    },
    {
      name: 'VIP Experience',
      price: '$799',
      originalPrice: null,
      savings: 'Best Value',
      deadline: 'Limited Spots',
      popular: false,
      features: [
        'All Regular benefits',
        'Premium seating in all sessions',
        'Exclusive VIP networking dinner',
        'One-on-one speaker meetups',
        'Concierge service',
        'Lifetime session recordings',
        'Priority AI assistant support',
        'Custom agenda planning session'
      ]
    }
  ];

  const stats = [
    { icon: Users, label: 'Registered', value: '1,847' },
    { icon: Clock, label: 'Days Left', value: '89' },
    { icon: Gift, label: 'Early Bird Spots', value: '153' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-inta-light to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-inta-navy mb-4">Secure Your Spot</h2>
          <p className="text-lg text-inta-gray max-w-2xl mx-auto">
            Join 2,500+ professionals for three days of innovation, networking, and insights into the future of IP.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-2 border-inta-accent/20">
              <CardContent className="p-4">
                <stat.icon className="w-8 h-8 text-inta-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-inta-navy">{stat.value}</div>
                <div className="text-sm text-inta-gray">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? 'border-2 border-inta-accent shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-inta-accent text-inta-navy font-semibold px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-inta-navy">{plan.name}</CardTitle>
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-inta-blue">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-inta-gray line-through">{plan.originalPrice}</span>
                    )}
                  </div>
                  {plan.savings && (
                    <Badge 
                      variant="outline" 
                      className={plan.savings.includes('Save') ? 'border-green-500 text-green-700' : 'border-inta-accent text-inta-accent'}
                    >
                      {plan.savings}
                    </Badge>
                  )}
                  <p className="text-sm text-inta-gray">{plan.deadline}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-inta-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-inta-accent hover:bg-yellow-500 text-inta-navy' 
                      : 'bg-inta-blue hover:bg-inta-navy text-white'
                  }`}
                  size="lg"
                >
                  {plan.name === 'Early Bird' ? 'Register Now - Early Bird' : `Choose ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white border-2 border-blue-100">
            <CardHeader>
              <CardTitle className="text-lg text-inta-navy">Group Discounts Available</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-inta-gray">
                <li>• 3-5 attendees: 10% discount</li>
                <li>• 6-10 attendees: 15% discount</li>
                <li>• 11+ attendees: 20% discount</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full">
                Contact Sales Team
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-green-100">
            <CardHeader>
              <CardTitle className="text-lg text-inta-navy">What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-inta-gray">
                <li>• 3 days of premium content</li>
                <li>• All meals and refreshments</li>
                <li>• Networking events</li>
                <li>• Digital materials & recordings</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full">
                View Full Agenda
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <Card className="inline-block bg-inta-light border-2 border-inta-accent/30">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-inta-navy mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-sm text-inta-gray">
                Not satisfied with the event? Get a full refund within 30 days of the event conclusion.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
