'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { countries } from '@/lib/countries';
import { submitDemoRequest } from '@/lib/api';
import { demoFormSchema, DemoFormData } from '@/lib/validation';

interface DemoFormProps {
  onSuccess: () => void;
}

export function DemoForm({ onSuccess }: DemoFormProps) {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
  });

  const onSubmit = async (data: DemoFormData) => {
    try {
      await submitDemoRequest(data);
      toast.success('Demo request submitted successfully!');
      onSuccess();
    } catch {
      toast.error('Failed to submit request. Please try again.');
    }
  };

  return (
    <div className="w-full bg-white rounded-[32px] border border-[rgba(233,230,226,0.6)] shadow-[0px_25px_50px_-12px_rgba(255,92,97,0.04)] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Side - Image */}
        <div className="hidden lg:block w-[450px] relative">
          <img src="/assets/landscape.png" alt="River Gorge Landscape" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 p-6 md:p-8 lg:p-12 pl-6 lg:pl-16 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-[28px] font-bold text-[#2C2421] mb-2" style={{ fontFamily: 'Figtree, sans-serif' }}>
              Tell us about your request
            </h3>
            <p className="text-[15px] text-[#78716D]" style={{ fontFamily: 'Figtree, sans-serif' }}>
              Fill in the details and we'll get back to you within 2 hours.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-sm font-medium text-[#2C2421]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Full Name *
              </Label>
              <Input
                id="fullName"
                {...register('fullName')}
                placeholder="Enter full name"
                className="mt-2 h-14 bg-[#FBFAF9] border-[rgba(233,230,226,0.6)] rounded-xl px-4"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-[#2C2421]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="Enter email address"
                className="mt-2 h-12 bg-[#FBFAF9] border-[rgba(233,230,226,0.6)] rounded-xl"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <Label htmlFor="country" className="text-sm font-medium text-[#2C2421]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Select Country *
              </Label>
              <Select onValueChange={(value) => setValue('country', value)}>
                <SelectTrigger className="mt-2 h-12 bg-[#FBFAF9] border-[rgba(233,230,226,0.6)] rounded-xl">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-[#2C2421]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Message (Optional)
              </Label>
              <textarea
                id="message"
                {...register('message')}
                placeholder="Tell us about your needs..."
                rows={4}
                className="mt-2 w-full min-h-[106] bg-[#FBFAF9] border border-[rgba(233,230,226,0.6)] rounded-xl px-4 py-3 text-sm placeholder:text-[#78716D] focus:outline-none focus:ring-2 focus:ring-[#262626] resize-none"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-[#262626] hover:bg-[#333333] text-white rounded-xl font-semibold text-lg"
            >
              {isSubmitting ? 'Submitting...' : 'Request Demo'}
            </Button>

            <p className="text-xs text-[#78716D] text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              No credit card required · Free personalized walkthrough
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}