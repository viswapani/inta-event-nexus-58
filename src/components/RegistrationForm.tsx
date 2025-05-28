
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { CheckIcon, Clock, Users, Star } from 'lucide-react';

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  plan: string;
}

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<RegistrationFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      plan: 'early-bird'
    }
  });

  const plans = [
    {
      id: 'early-bird',
      name: 'Early Bird',
      price: '$299',
      originalPrice: '$399',
      savings: 'Save $100',
      deadline: 'Until Feb 15, 2028',
      popular: true,
      features: [
        'Access to all sessions',
        'Networking events',
        'Event materials',
        'Session recordings'
      ]
    },
    {
      id: 'regular',
      name: 'Regular',
      price: '$399',
      deadline: 'After Feb 15, 2028',
      popular: false,
      features: [
        'Access to all sessions',
        'Networking events',
        'Event materials'
      ]
    }
  ];

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Registration Successful!",
      description: "You'll receive a confirmation email shortly.",
    });
    
    setIsSubmitting(false);
    form.reset();
  };

  const selectedPlan = plans.find(plan => plan.id === form.watch('plan')) || plans[0];

  return (
    <section id="registration" className="py-12 bg-gradient-to-br from-inta-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-inta-navy mb-2">Register Now</h2>
          <p className="text-inta-gray">Secure your spot at INTA Annual Meeting 2025</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registration Form */}
          <Card className="border-2 border-inta-accent/20">
            <CardHeader>
              <CardTitle className="text-xl text-inta-navy">Registration Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Plan Selection */}
                  <FormField
                    control={form.control}
                    name="plan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Registration Plan</FormLabel>
                        <FormControl>
                          <div className="space-y-3">
                            {plans.map((plan) => (
                              <div
                                key={plan.id}
                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                  field.value === plan.id
                                    ? 'border-inta-accent bg-inta-accent/10'
                                    : 'border-gray-200 hover:border-inta-accent/50'
                                }`}
                                onClick={() => field.onChange(plan.id)}
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-inta-navy">{plan.name}</span>
                                    {plan.popular && (
                                      <Badge className="bg-inta-accent text-inta-navy">
                                        <Star className="w-3 h-3 mr-1" />
                                        Popular
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-inta-blue">{plan.price}</span>
                                    {plan.originalPrice && (
                                      <span className="text-sm text-gray-500 line-through">{plan.originalPrice}</span>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Clock className="w-4 h-4 text-inta-gray" />
                                  <span className="text-sm text-inta-gray">{plan.deadline}</span>
                                  {plan.savings && (
                                    <Badge variant="outline" className="border-green-500 text-green-700">
                                      {plan.savings}
                                    </Badge>
                                  )}
                                </div>
                                <ul className="text-sm text-inta-gray space-y-1">
                                  {plan.features.slice(0, 2).map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                      <CheckIcon className="w-3 h-3 text-green-500" />
                                      {feature}
                                    </li>
                                  ))}
                                  <li className="text-xs text-inta-gray/70">+ more...</li>
                                </ul>
                              </div>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-inta-blue hover:bg-inta-navy text-white h-12 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : `Register for ${selectedPlan.price}`}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Quick Stats & Benefits */}
          <div className="space-y-6">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-lg text-inta-navy flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Registration Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-inta-blue">1,847</div>
                    <div className="text-sm text-inta-gray">Registered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-inta-blue">89</div>
                    <div className="text-sm text-inta-gray">Days Left</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-inta-blue">153</div>
                    <div className="text-sm text-inta-gray">Early Bird</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100">
              <CardHeader>
                <CardTitle className="text-lg text-inta-navy">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-inta-gray">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    3 days of premium content
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    All meals and refreshments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    Networking events & reception
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    Digital materials & recordings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    Mobile app access
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-inta-light border-2 border-inta-accent/30">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-inta-navy mb-1">100% Satisfaction Guarantee</h3>
                <p className="text-sm text-inta-gray">
                  Full refund within 30 days if not satisfied
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
