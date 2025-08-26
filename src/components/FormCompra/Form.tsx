"use client";
import React, { useState, useRef } from "react";
import "./FormCompra.css";
import emailjs from "@emailjs/browser";
import ModalForm from "../ModalForm/ModalForm";
import { FaRegHeart } from "react-icons/fa";

interface Errors {
  nombreCompleto?: string;
  email?: string;
  //   archivo?: string;
  numberPhone?: string;
}

interface Client {
  nombreCompleto: string;
  email: string;
  //   archivo: File | null;
  numberPhone: string;
  message: string;
}

export default function Form() {
  const [info, setInfo] = useState<Client>({
    nombreCompleto: "",
    email: "",
    // archivo: null,
    numberPhone: "",
    message: "",
  });
  const [error, setError] = useState<Errors>({});
  const [clients, setUsers] = useState<Client[]>([]);
  const formRef = useRef<HTMLFormElement>(null); // 👈 usamos uno solo
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // --- VALIDACIONES ---
  //   function validateFile(archivo: File | null): boolean {
  //     if (!archivo) return false;
  //     const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
  //     return allowedTypes.includes(archivo.type);
  //   }

  function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function validateNumberPhone(number: string): boolean {
    const phoneRegex = /^[0-9]{8,15}$/; // solo números, entre 8 y 15 dígitos
    return phoneRegex.test(number);
  }

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!info.nombreCompleto.trim() || info.nombreCompleto.length < 3)
      newErrors.nombreCompleto = "Nombre es requerido (mínimo 3 letras)";
    if (!isValidEmail(info.email)) newErrors.email = "Email es requerido";
    if (!validateNumberPhone(info.numberPhone))
      newErrors.numberPhone = "Numero de teléfono es requerido";

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- RESET FORM ---
  const cleanForm = () => {
    setInfo({
      nombreCompleto: "",
      email: "",
      //   archivo: null,
      numberPhone: "",
      message: "",
    });
    setError({});
    formRef.current?.reset(); // limpia también input file
  };

  // --- SUBMIT ---
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Formulario no enviado ❌");
      return;
    } else {
      console.log("Formulario válido, enviando...");
      setUsers([...clients, info]);
    }

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_hszqlst", // tu Service ID
          "template_uq9m49o", // tu Template ID
          formRef.current,
          "9K_7e1hMIZIMei5Z2" // tu Public Key
        )
        .then(() => {
          setModalMessage("✅ Hemos recibido tu mensaje correctamente. Nos comunicaremos via Mail o WhatsApp para finalizar el pedido y la entrega del libro. ¡Gracias!");
          setIsModalOpen(true);
          cleanForm();
        })
        .catch((error) => {
          console.error("Error:", error);
          setModalMessage("❌ Hubo un error al enviar el formulario. Vuelve a intentarlo.");
          setIsModalOpen(true);
        });
    }
  };

  // --- HANDLE FILE ---
  //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = e.target.files?.[0] || null;
  //     setInfo({ ...info, archivo: file });
  //   };

  return (
    <form ref={formRef} className="form-compra" onSubmit={handleSubmit} data-aos="zoom-in-left">
      <label htmlFor="nombreCompleto"> 
        Nombre Completo{" "}
        {error.nombreCompleto && <span>{error.nombreCompleto}</span>}
        <input
          type="text"
          value={info.nombreCompleto}
          onChange={(e) => setInfo({ ...info, nombreCompleto: e.target.value })}
          placeholder="Pedro Gimenez"
          name="nombreCompleto"
          id="nombreCompleto"
        />
      </label>

      <label htmlFor="email">
        Correo electrónico {error.email && <span>{error.email}</span>}
        <input
          type="text"
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
          placeholder="ejemplo@gmail.com"
          name="email"
          id="email"
        />
      </label>

      <label htmlFor="numberPhone">
        Número de telefóno{" "}
        {error.numberPhone && <span>{error.numberPhone}</span>}
        <input
          type="text"
          value={info.numberPhone}
          onChange={(e) => setInfo({ ...info, numberPhone: e.target.value })}
          placeholder="1234567890"
          name="numberPhone"
          id="numberPhone"
        />
      </label>

      <label htmlFor="message">
        Mensaje (opcional)
        <textarea
          name="message"
          placeholder="Escribe tu mensaje"
          value={info.message}
          onChange={(e) => setInfo({ ...info, message: e.target.value })}
          id="message"
        />
      </label>

      <button type="submit" className="form-button">
        Enviar
      </button>
      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        messageForm={modalMessage}
      />
      <p>
        ¡Gracias por ser parte de la aventura! <FaRegHeart />
      </p>
    </form>
  );
}
