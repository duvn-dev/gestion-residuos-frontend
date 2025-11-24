import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = "https://gestion-residuos-api.onrender.com/api/reportes";

export default function Reportes() {
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setReportes(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reportes</h1>

      {reportes.length === 0 && <p>No hay reportes disponibles</p>}

      <div className="grid gap-4">
        {reportes.map((rep) => (
          <div key={rep.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">Reporte #{rep.id}</h2>
            <p>{rep.tipo}</p>
            <Link className="text-blue-600" to={`/reportes/${rep.id}`}>
              Ver detalles →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
