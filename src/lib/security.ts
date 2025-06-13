
// Simple encryption for localStorage data (client-side only)
const SECRET_KEY = 'inta-event-2028-key'; // In production, this should be more secure

export const securityUtils = {
  // Simple XOR encryption for localStorage
  encrypt: (text: string): string => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      result += String.fromCharCode(
        text.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length)
      );
    }
    return btoa(result);
  },

  decrypt: (encryptedText: string): string => {
    try {
      const text = atob(encryptedText);
      let result = '';
      for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(
          text.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length)
        );
      }
      return result;
    } catch {
      return '';
    }
  },

  // Sanitize input to prevent XSS
  sanitizeInput: (input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  },

  // Rate limiting simulation
  rateLimiter: (() => {
    const attempts: { [key: string]: number[] } = {};
    
    return {
      isAllowed: (key: string, maxAttempts: number = 5, windowMs: number = 60000): boolean => {
        const now = Date.now();
        if (!attempts[key]) {
          attempts[key] = [];
        }
        
        // Remove old attempts outside the window
        attempts[key] = attempts[key].filter(time => now - time < windowMs);
        
        if (attempts[key].length >= maxAttempts) {
          return false;
        }
        
        attempts[key].push(now);
        return true;
      }
    };
  })(),

  // Secure localStorage operations
  secureStorage: {
    setItem: (key: string, value: any): void => {
      try {
        const serialized = JSON.stringify(value);
        const encrypted = securityUtils.encrypt(serialized);
        localStorage.setItem(key, encrypted);
      } catch (error) {
        console.error('Failed to store data securely:', error);
      }
    },

    getItem: <T>(key: string, defaultValue: T): T => {
      try {
        const encrypted = localStorage.getItem(key);
        if (!encrypted) return defaultValue;
        
        const decrypted = securityUtils.decrypt(encrypted);
        if (!decrypted) return defaultValue;
        
        return JSON.parse(decrypted);
      } catch (error) {
        console.error('Failed to retrieve data securely:', error);
        return defaultValue;
      }
    },

    removeItem: (key: string): void => {
      localStorage.removeItem(key);
    }
  },

  // Secure error messages (don't expose internal details)
  getSecureErrorMessage: (error: any): string => {
    const genericMessage = 'An error occurred. Please try again later.';
    
    if (typeof error === 'string') {
      // Return safe, generic messages for common errors
      if (error.toLowerCase().includes('network')) {
        return 'Network error. Please check your connection.';
      }
      if (error.toLowerCase().includes('validation')) {
        return 'Please check your input and try again.';
      }
    }
    
    return genericMessage;
  }
};
