
import { useEffect } from 'react';

const SecurityHeaders = () => {
  useEffect(() => {
    // Add security meta tags
    const addMetaTag = (name: string, content: string) => {
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (!existing) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Content Security Policy
    addMetaTag('Content-Security-Policy', 
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com; " +
      "img-src 'self' data: https:; " +
      "connect-src 'self' https:; " +
      "frame-ancestors 'none';"
    );

    // Additional security headers
    addMetaTag('X-Content-Type-Options', 'nosniff');
    addMetaTag('X-Frame-Options', 'DENY');
    addMetaTag('X-XSS-Protection', '1; mode=block');
    addMetaTag('Referrer-Policy', 'strict-origin-when-cross-origin');
    addMetaTag('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    // Prevent right-click context menu in production
    const handleContextMenu = (e: MouseEvent) => {
      if (process.env.NODE_ENV === 'production') {
        e.preventDefault();
      }
    };

    // Prevent F12 and other dev tools shortcuts in production
    const handleKeyDown = (e: KeyboardEvent) => {
      if (process.env.NODE_ENV === 'production') {
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.shiftKey && e.key === 'C') ||
          (e.ctrlKey && e.shiftKey && e.key === 'J') ||
          (e.ctrlKey && e.key === 'U')
        ) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default SecurityHeaders;
