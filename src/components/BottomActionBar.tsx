
import { Calendar, Heart, Search, User, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useBookmarks } from '@/hooks/useBookmarks';

const BottomActionBar = () => {
  const { data: bookmarks = [] } = useBookmarks('event-2028');
  const bookmarkCount = bookmarks.length;

  const actionItems = [
    { 
      name: 'Agenda', 
      href: '#agenda', 
      icon: Calendar,
      badge: null
    },
    { 
      name: 'Favorites', 
      href: '#favorites', 
      icon: Heart,
      badge: bookmarkCount > 0 ? bookmarkCount : null
    },
    { 
      name: 'Search', 
      href: '#search', 
      icon: Search,
      badge: null
    },
    { 
      name: 'My Event', 
      href: '#profile', 
      icon: User,
      badge: null
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-4 h-16">
        {actionItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex flex-col items-center justify-center space-y-1 text-inta-gray hover:text-inta-blue transition-colors relative"
          >
            <div className="relative">
              <item.icon className="w-5 h-5" />
              {item.badge && (
                <Badge className="absolute -top-2 -right-2 bg-inta-blue text-white text-xs min-w-[18px] h-4 flex items-center justify-center p-0">
                  {item.badge}
                </Badge>
              )}
            </div>
            <span className="text-xs font-medium">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BottomActionBar;
