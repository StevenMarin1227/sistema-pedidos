import { useCarritoContext } from "../context/CarritoContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { carrito, total, vaciarCarrito } = useCarritoContext();
  const [validated, setValidated] = useState(false);

  const [datos, setDatos] = useState({
    naturaleza: "",
    tipoId: "",
    identificacion: "",
    nombre: "",
    telefono: "",
    direccion: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const enviarPedido = (e) => {
    e.preventDefault(); // Evita que el formulario recargue

    // Validación Bootstrap
    const form = e.target;
    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    const payload = {
      cliente: datos,
      productos: carrito,
      total,
      fecha: new Date().toISOString(),
    };

    // 🟢 Navegación INMEDIATA (UX profesional)
    navigate("/confirmacion");

    // 🧹 Reiniciar carrito de inmediato
    vaciarCarrito();

    // 🚀 Enviar datos al backend en segundo plano SIN esperar respuesta
    fetch(
      "https://script.google.com/macros/s/AKfycby-qAoS8VAW8AthkyK_R-a7o4X27ULcTaqYECEDxGwLYVbi1d_9XYld8IdlpjiMBvyy/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
  };

  return (
    <div className="container mt-4">
      <h2
        className="mb-3"
        style={{ color: "var(--color-primary)", fontWeight: "600" }}
      >
        Información del Cliente
      </h2>

      <form
        className={`card p-4 mt-3 needs-validation ${
          validated ? "was-validated" : ""
        }`}
        noValidate
        onSubmit={enviarPedido}
        style={{
          backgroundColor: "var(--color-light)",
          border: "none",
          borderRadius: "14px",
          boxShadow: "var(--shadow)",
        }}
      >
        <div className="row">

          {/* NATURALEZA */}
          <div className="col-md-6 mt-3">
            <label className="fw-semibold">Naturaleza *</label>
            <select
              className="form-select"
              name="naturaleza"
              required
              onChange={handleChange}
            >
              <option value="">Seleccione...</option>
              <option value="Persona Natural">Persona Natural</option>
              <option value="Empresa">Empresa</option>
            </select>
            <div className="invalid-feedback">Seleccione la naturaleza.</div>
          </div>

          {/* TIPO DE ID */}
          <div className="col-md-6 mt-3">
            <label className="fw-semibold">Tipo de Identificación *</label>
            <select
              className="form-select"
              name="tipoId"
              required
              onChange={handleChange}
            >
              <option value="">Seleccione...</option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="NIT">NIT</option>
            </select>
            <div className="invalid-feedback">Seleccione un tipo de ID.</div>
          </div>

          {/* IDENTIFICACION */}
          <div className="col-md-6 mt-3">
            <label className="fw-semibold">Número de Identificación *</label>
            <input
              type="text"
              className="form-control"
              name="identificacion"
              required
              onChange={handleChange}
              style={{
                borderRadius: "10px",
                border: "1px solid var(--color-secondary)",
              }}
            />
            <div className="invalid-feedback">Este campo es obligatorio.</div>
          </div>

          {/* NOMBRE */}
          <div className="col-md-6 mt-3">
            <label className="fw-semibold">
              Nombre Completo / Razón Social *
            </label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              required
              onChange={handleChange}
              style={{
                borderRadius: "10px",
                border: "1px solid var(--color-secondary)",
              }}
            />
            <div className="invalid-feedback">Ingrese un nombre válido.</div>
          </div>

          {/* TELEFONO */}
          <div className="col-md-6 mt-3">
            <label className="fw-semibold">Teléfono *</label>
            <input
              type="text"
              className="form-control"
              name="telefono"
              required
              onChange={handleChange}
              style={{
                borderRadius: "10px",
                border: "1px solid var(--color-secondary)",
              }}
            />
            <div className="invalid-feedback">Ingrese un teléfono válido.</div>
          </div>

          {/* DIRECCION */}
          <div className="col-md-6 mt-3">
            <label className="fw-semibold">Dirección *</label>
            <input
              type="text"
              className="form-control"
              name="direccion"
              required
              onChange={handleChange}
              style={{
                borderRadius: "10px",
                border: "1px solid var(--color-secondary)",
              }}
            />
            <div className="invalid-feedback">Ingrese una dirección válida.</div>
          </div>
        </div>

        <button
          className="btn w-100 mt-4"
          type="submit"
          style={{
            backgroundColor: "var(--color-secondary)",
            border: "none",
            padding: "12px",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: "1.1rem",
            color: "#fff",
          }}
        >
          Enviar Pedido
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;