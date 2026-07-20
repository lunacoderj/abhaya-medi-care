import React from 'react';

import { useForm as useRHForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { User, Phone, Mail, FileText } from 'lucide-react';
import { FormField } from '../molecules/FormField';
import { Button } from '../atoms/Button';
import { clinicData } from '../../data/clinic';
import { buildWhatsAppUrl } from '../../lib/utils';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number").regex(/^[0-9+\s-]+$/, "Invalid phone format"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal('')),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useRHForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Format message for WhatsApp
      const msg = `New Inquiry from Website:
Name: ${data.name}
Phone: ${data.phone}
${data.email ? `Email: ${data.email}\n` : ''}
Message: ${data.message}`;

      const url = buildWhatsAppUrl(clinicData.contact.whatsapp, msg);
      
      // Open WhatsApp in new tab
      window.open(url, '_blank');
      
      toast.success("Redirecting to WhatsApp...");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try calling us instead.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-brand-pale p-6 md:p-8 rounded-3xl shadow-clay-card border-0">
      <FormField
        label="Full Name"
        placeholder="Enter your full name"
        icon={User}
        error={errors.name?.message}
        {...register('name')}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          label="Mobile Number"
          type="tel"
          placeholder="e.g. 9876543210"
          icon={Phone}
          error={errors.phone?.message}
          {...register('phone')}
        />
        
        <FormField
          label="Email Address (Optional)"
          type="email"
          placeholder="your.email@example.com"
          icon={Mail}
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <FormField
        as="textarea"
        label="Your Message"
        placeholder="How can we help you today?"
        error={errors.message?.message}
        {...register('message')}
      />

      <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
        <Button 
          type="submit" 
          size="lg" 
          className="w-full sm:w-auto min-w-[200px]"
          isLoading={isSubmitting}
        >
          Send via WhatsApp
        </Button>
        <span className="text-sm text-brand-gray text-center sm:text-left">
          We usually reply within 5 minutes.
        </span>
      </div>
    </form>
  );
}
