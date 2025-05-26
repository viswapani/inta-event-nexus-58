
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Sparkles, Calendar, Users, MapPin, Clock } from 'lucide-react';

const ChatbotSection = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your INTA Event AI Assistant. I can help you find sessions, speakers, and navigate the event. What would you like to know?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    { icon: Calendar, text: 'Find AI sessions', action: 'show me AI and trademark sessions' },
    { icon: Users, text: 'Recommend speakers', action: 'recommend speakers for brand protection' },
    { icon: MapPin, text: 'Event locations', action: 'show me event locations and rooms' },
    { icon: Clock, text: 'My schedule', action: 'help me plan my personalized agenda' }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: generateBotResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      return 'Great choice! I found several AI-focused sessions for you:\n\n🤖 "AI and the Future of Trademark Law" - March 15, 9:00 AM\n🔍 "Machine Learning in IP Analysis" - March 16, 2:00 PM\n💡 "AI-Powered Brand Protection" - March 17, 11:00 AM\n\nWould you like me to add any of these to your personal agenda?';
    }
    
    if (lowerMessage.includes('speaker') || lowerMessage.includes('recommend')) {
      return 'Based on your interests, I recommend these speakers:\n\n👩‍💼 Dr. Sarah Chen - AI Innovation expert\n👨‍💼 Mark Rodriguez - International trademark attorney\n👩‍💼 Alice Wang - Brand protection specialist\n\nWould you like to see their full profiles or find their speaking sessions?';
    }
    
    if (lowerMessage.includes('location') || lowerMessage.includes('room')) {
      return 'Here are the main event locations:\n\n🏛️ Main Auditorium - Keynotes and major sessions\n🏢 Conference Room A - Panel discussions\n💻 Tech Hub - Workshops and hands-on sessions\n🤝 Networking Lounge - Coffee breaks and networking\n\nNeed directions to any specific location?';
    }
    
    if (lowerMessage.includes('agenda') || lowerMessage.includes('schedule')) {
      return 'I can help you create a personalized agenda! Based on popular choices:\n\n⭐ Must-attend sessions for newcomers\n🚀 Advanced sessions for experts\n🤝 Networking opportunities\n🎯 Sessions by topic/track\n\nWhat type of sessions interest you most?';
    }
    
    return 'I can help you with:\n• Finding sessions by topic or speaker\n• Creating personalized agendas\n• Event logistics and locations\n• Speaker recommendations\n• Networking opportunities\n\nWhat specific information are you looking for?';
  };

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
    handleSendMessage();
  };

  return (
    <section id="chatbot" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-inta-navy mb-4">AI Event Assistant</h2>
          <p className="text-lg text-inta-gray max-w-2xl mx-auto">
            Get instant answers about sessions, speakers, and event logistics with our AI-powered assistant.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-inta-accent" />
                  <span>AI Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-inta-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm">Smart Scheduling</h3>
                    <p className="text-xs text-inta-gray">Get personalized agenda recommendations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-inta-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm">Speaker Matching</h3>
                    <p className="text-xs text-inta-gray">Find speakers by expertise and interests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-inta-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm">Instant Q&A</h3>
                    <p className="text-xs text-inta-gray">Get answers about event logistics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3"
                    onClick={() => handleQuickAction(action.action)}
                  >
                    <action.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{action.text}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-inta-blue rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span>INTA AI Assistant</span>
                    <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Online</Badge>
                  </div>
                </CardTitle>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-inta-blue text-white'
                          : 'bg-inta-light text-inta-navy'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-inta-light text-inta-navy p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-inta-gray rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-inta-gray rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-inta-gray rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask me about sessions, speakers, or event details..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="bg-inta-blue hover:bg-inta-navy">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
