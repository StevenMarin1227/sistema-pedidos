import { useState } from "react";
import { useCarritoContext } from "../context/CarritoContext";

function ProductCard({ producto }) {
  const { agregarProducto } = useCarritoContext();
  const [animarBoton, setAnimarBoton] = useState(false);

  const handleAgregar = () => {
    agregarProducto(producto);

    // Activar animación SOLO en esta tarjeta
    setAnimarBoton(true);

    // Desactivar para permitir futuras animaciones
    setTimeout(() => setAnimarBoton(false), 300);
  };

  return (
    <div className="product-card">
      <div className="product-content">
        
        <h5 className="product-title">{producto.nombre}</h5>

        <p className="product-code">
          Código: <strong>{producto.codigo}</strong>
        </p>

        <p className="product-price">
          <strong>${producto.precio.toLocaleString("es-CO")}</strong>
        </p>

        <button
          className={`btn-add ${animarBoton ? "btn-pop" : ""}`}
          onClick={handleAgregar}
        >
          Agregar al carrito
        </button>

      </div>
    </div>
  );
}

export default ProductCard;