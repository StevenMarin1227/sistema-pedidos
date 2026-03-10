import { useCarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";

function PedidoPage() {
  const {
    carrito,
    actualizarCantidad,
    eliminarProducto,
    total,
  } = useCarritoContext();

  // Si el carrito está vacío
  if (carrito.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3 className="mb-3" style={{ color: "var(--color-primary)" }}>
          🛒 El carrito está vacío
        </h3>
        <Link to="/" className="btn btn-primary px-4">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{ color: "var(--color-primary)" }}>
        🛒 Mi Carrito
      </h2>

      <div
        className="card p-4"
        style={{
          backgroundColor: "var(--color-light)",
          border: "none",
          borderRadius: "14px",
          boxShadow: "var(--shadow)",
        }}
      >
        <table className="table align-middle">
          <thead style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
            <tr>
              <th>Producto</th>
              <th style={{ width: "150px" }}>Cantidad</th>
              <th>Precio</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {carrito.map((p) => (
              <tr key={p.codigo}>
                <td>
                  <strong>{p.nombre}</strong>
                  <br />
                  <small className="text-muted">Código: {p.codigo}</small>
                </td>

                <td>
                  <input
                    type="number"
                    min="1"
                    value={p.cantidad}
                    className="form-control"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid var(--color-secondary)",
                    }}
                    onChange={(e) =>
                      actualizarCantidad(p.codigo, Number(e.target.value))
                    }
                  />
                </td>

                <td>${p.precio}</td>
                <td>
                  <strong>${p.precio * p.cantidad}</strong>
                </td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    style={{ borderRadius: "10px" }}
                    onClick={() => eliminarProducto(p.codigo)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total */}
        <div className="text-end mt-3">
          <h3>
            Total:{" "}
            <span style={{ color: "var(--color-primary)" }}>
              ${total}
            </span>
          </h3>

          <Link
            to="/checkout"
            className="btn btn-success w-100 mt-3"
            style={{
              backgroundColor: "var(--color-secondary)",
              borderRadius: "12px",
              border: "none",
            }}
          >
            Continuar con el Pedido
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PedidoPage;