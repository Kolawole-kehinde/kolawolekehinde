"use client";

import { Controller } from "react-hook-form";

interface CustomInputProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
  multiline = false,
  rows = 4,
}: CustomInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            {multiline ? (
              <textarea
                {...field}
                id={name}
                placeholder={placeholder}
                rows={rows}
                className={`border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#cd7c2e] ${
                  fieldState.error ? "border-red-500" : ""
                }`}
              />
            ) : (
              <input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                className={`border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#cd7c2e] ${
                  fieldState.error ? "border-red-500" : ""
                }`}
              />
            )}

            {fieldState.error && (
              <p className="text-xs text-red-500 mt-1">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default CustomInput;
