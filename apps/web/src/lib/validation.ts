import { z } from 'zod';

export const demoFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Full name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please provide a valid email address')
    .max(255, 'Email must not exceed 255 characters'),
  country: z
    .string()
    .min(1, 'Please select a country')
    .max(100, 'Country must not exceed 100 characters'),
  message: z
    .string()
    .max(1000, 'Message must not exceed 1000 characters')
    .optional()
    .or(z.literal('')),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;