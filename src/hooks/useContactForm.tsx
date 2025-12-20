"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { contactSchema, ContactFormData } from "@/schema/contactSchema";
import { useContact } from "./useContact";

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { mutateAsync } = useContact();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      await mutateAsync(data);
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    ...form,
    onSubmit,
    loading,
  };
};
