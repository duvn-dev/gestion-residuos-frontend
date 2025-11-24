import React, { useEffect, useState } from "react";
import axios from "axios";

export default function VerReportes() {
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    axios
      .get("https://gestion-residuos-api.onrender.com/api/reportes")
      .then((res) => {
        setReportes(res.data);
      })
      .catch((err) => {
        console.error("Error cargando reportes", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Reportes</h1>

      {reportes.length === 0 ? (
        <p>No hay reportes o la API no devolvió datos.</p>
      ) : (
        reportes.map((r) => (
          <div
            key={r.id}
            style={{
              background: "#fff",
              padding: "10px",
              borderRadius: "10px",
              marginBottom: "10px",
              boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
            }}
          >
            <h2>Reporte #{r.id}</h2>
            <p><strong>Tipo:</strong> {r.tipo}</p>
            <p><strong>Descripción:</strong> {r.descripcion}</p>
            <p><strong>Fecha:</strong> {r.fecha}</p>
          </div>
        ))
      )}
    </div>
  );
}
