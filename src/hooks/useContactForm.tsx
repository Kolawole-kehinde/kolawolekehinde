"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { contactSchema, ContactFormData } from "@/src/schema/contactSchema";
import { useContact } from "./useContact";

export const useContactForm = () => {
  const { mutateAsync, isPending } = useContact();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await mutateAsync(data);
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return {
    ...form,
    onSubmit,
    loading: isPending,
  };
};
