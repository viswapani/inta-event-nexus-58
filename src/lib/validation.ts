
import { z } from 'zod';

// Registration form validation
export const registrationSchema = z.object({
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name contains invalid characters'),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name contains invalid characters'),
  email: z.string()
    .email('Invalid email address')
    .max(254, 'Email must be less than 254 characters'),
  company: z.string()
    .min(1, 'Company is required')
    .max(100, 'Company name must be less than 100 characters')
    .regex(/^[a-zA-Z0-9\s&.,'-]+$/, 'Company name contains invalid characters'),
  plan: z.string().min(1, 'Please select a plan'),
});

// Chat message validation
export const chatMessageSchema = z.object({
  message: z.string()
    .min(1, 'Message cannot be empty')
    .max(500, 'Message must be less than 500 characters')
    .regex(/^[a-zA-Z0-9\s.,!?'-]+$/, 'Message contains invalid characters'),
});

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  email: z.string()
    .email('Invalid email address')
    .max(254, 'Email must be less than 254 characters'),
  subject: z.string()
    .min(1, 'Subject is required')
    .max(100, 'Subject must be less than 100 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

// Newsletter signup validation
export const newsletterSchema = z.object({
  email: z.string()
    .email('Invalid email address')
    .max(254, 'Email must be less than 254 characters'),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
export type ChatMessageData = z.infer<typeof chatMessageSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
