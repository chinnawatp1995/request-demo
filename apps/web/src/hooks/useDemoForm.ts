'use client';

import { useState, useCallback } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { demoFormSchema, DemoFormData } from '@/lib/validation';
import { submitDemoRequest } from '@/lib/api';

interface UseDemoFormReturn {
  form: UseFormReturn<DemoFormData>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
  onSubmit: (data: DemoFormData) => Promise<void>;
  resetForm: () => void;
}

export function useDemoForm(): UseDemoFormReturn {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      country: '',
      message: '',
    },
  });

  const onSubmit = useCallback(async (data: DemoFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await submitDemoRequest(data);
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to submit request. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const resetForm = useCallback(() => {
    form.reset();
    setIsSubmitted(false);
    setError(null);
  }, [form]);

  return {
    form,
    isSubmitting,
    isSubmitted,
    error,
    onSubmit,
    resetForm,
  };
}