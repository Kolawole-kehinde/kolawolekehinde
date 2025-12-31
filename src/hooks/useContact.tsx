import axiosInstance from "@/src/lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const useContact = () =>
  useMutation({
    mutationFn: (data: ContactPayload) =>
      axiosInstance.post("/contact", data),
  });
