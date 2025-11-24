import { useContext, useState } from "react";
import { createReporte } from "../api/reportes";
import { AuthContext } from "../context/AuthContext";

export default function CrearReporte() {
  const { token, userId } = useContext(AuthContext);
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    ubicacion: "",
    usuario_id: userId
  });

  const submit = async (e) => {
    e.preventDefault();
    await createReporte(form, token);
    window.location.href = "/reportes";
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Crear Reporte</h2>

      <form className="space-y-4" onSubmit={submit}>
        <input
          className="border p-2 w-full"
          placeholder="Título"
          onChange={(e) => setForm({ ...form, titulo: e.target.value })}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Descripción"
          onChange={(e) =>
            setForm({ ...form, descripcion: e.target.value })
          }
        />
        <input
          className="border p-2 w-full"
          placeholder="Ubicación"
          onChange={(e) => setForm({ ...form, ubicacion: e.target.value })}
        />

        <button className="bg-blue-600 text-white w-full p-2 rounded">
          Guardar
        </button>
      </form>
    </div>
  );
}
