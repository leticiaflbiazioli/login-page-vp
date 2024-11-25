"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { IToast, Toast } from "@/components/Toast";
import Image from "next/image";
import { useState } from "react";
import "./style.css";

export default function Home() {
  const [toasts, setToasts] = useState<IToast[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showToast = (title: string, message: string) => {
    const id = Date.now();
    setToasts([...toasts, { title, message }]);
  };

  const closeToast = (title: string) => {
    setToasts(toasts.filter((toast) => toast.title !== title));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      showToast(
        "Campo não preenchido",
        "É necessário preencher todos os campos para continuar"
      );
      return;
    }

    if (email !== "danielzanirato@valepay.com.br") {
      showToast(
        "Email nao cadastrado",
        "Seu email informado nao foi cadastrado em nosso sistema."
      );
      return;
    }

    if (password !== "22222222") {
      showToast(
        "Numero de tentativas excedido!",
        "Você excedeu o numero de tentativas permitida."
      );
      return;
    }
  };

  return (
    <div className="container-page grid grid-cols-6">
      <div className="container-content xl:col-start-2 xl:col-span-2 md:col-start-2 md:col-span-3 col-start-1 col-end-7">
        <div className="image-logo">
          <Image src="/logo.svg" alt="logo" width={231} height={100} />
        </div>
        <h1 className="title-page">Welcome to pix now!</h1>
        <p className="subtitle-page">
          Best payment method for your Brazilian customers.
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            label="Enter your email"
            value={email}
            onChange={(value) => {
              setEmail(value);
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            label="Password"
            value={password}
            onChange={(value) => {
              setPassword(value);
            }}
          />
          <div className="forgot-password">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          <Button text="Login" style="primary" type="submit" />
          <Button text="Sign up" style="secondary" type="button" />
        </form>

        <div className="toast-component">
          {toasts.map((toast) => (
            <Toast
              key={toast.title}
              title={toast.title}
              message={toast.message}
              onClose={() => closeToast(toast.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
