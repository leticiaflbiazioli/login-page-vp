"use client";

import Image from "next/image";
import "./style.css";

export interface IToast {
  title: string;
  message: string;
  type?: string;
}

interface ToastProps extends IToast {
  onClose: () => void;
}

export function Toast({ title, message, onClose, type = "error" }: ToastProps) {
  return (
    <div className="toast">
      <div className="">
        {type === "error" && (
          <Image src="/toast-error.svg" alt="logo" width={40} height={40} />
        )}

        <h2 className="toast-title">{title}</h2>
        <p className="toast-text">{message}</p>
      </div>

      <button
        onClick={onClose}
        className="ml-auto text-black hover:text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
