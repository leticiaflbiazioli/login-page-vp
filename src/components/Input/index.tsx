"use client";

import "./style.css";

interface IInput {
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: IInput) {
  return (
    <div className="mb-4">
      {label && <label className="label-input">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="input-field w-full px-4 py-2 rounded-md"
      />
    </div>
  );
}
