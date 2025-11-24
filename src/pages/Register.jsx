import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "ciudadano", // rol por defecto
  });

  const [msg, setMsg] = useState("");

  const API = "https://gestion-residuos-api.onrender.com/api/auth/register";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const res = await axios.post(API, form);
      setMsg("Registro exitoso ✔");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMsg("❌ Error al registrar.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Registro de Usuario</h2>

      <form onSubmit={registerUser} className="space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <select
          name="rol"
          value={form.rol}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="ciudadano">Usuario</option>
          <option value="reciclador">Reciclador</option>
          <option value="admin">Administrador</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Registrarse
        </button>
      </form>

      {msg && <p className="mt-4 text-center">{msg}</p>}
    </div>
  );
}
