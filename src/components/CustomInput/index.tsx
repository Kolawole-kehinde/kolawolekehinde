"use client";

import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface CustomInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
}

const CustomInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  multiline = false,
  rows = 4,
}: CustomInputProps<T>) => {
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
                value={field.value ?? ""}
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
                value={field.value ?? ""} 
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
