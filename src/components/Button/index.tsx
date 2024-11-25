"use client";

import "./style.css";

interface IButton {
  text: string;
  type: "submit" | "reset" | "button";
  style: "primary" | "secondary";
  onClick?: () => void; // Em uma situação real teria as respectivas ações associadas a cada botão
}

export function Button({ text, type, style, onClick }: IButton) {
  return (
    <button
      className={`button ${
        style === "primary" ? "button-primary" : "button-secondary"
      }`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
