import axiosInstance from "@/src/lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export const useContact = () =>
  useMutation({
    mutationFn: (data: { name: string; email: string; message: string }) =>
      axiosInstance.post("/contact", data),
  });
