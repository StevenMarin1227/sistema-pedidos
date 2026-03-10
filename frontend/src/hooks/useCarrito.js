import { useState } from "react";

export function useCarrito() {
  const [carrito, setCarrito] = useState([]);
  const [animarCarrito, setAnimarCarrito] = useState(false);
  const [animarBadge, setAnimarBadge] = useState(false); // 👈 NUEVO

  const agregarProducto = (producto) => {
    const existe = carrito.find((p) => p.codigo === producto.codigo);

    if (existe) {
      setCarrito(
        carrito.map((p) =>
          p.codigo === producto.codigo
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    // 🔥 Activar animación del carrito
    setAnimarCarrito(true);
    setTimeout(() => setAnimarCarrito(false), 400);

    // 🔥 Activar animación del badge
    setAnimarBadge(true);
    setTimeout(() => setAnimarBadge(false), 350);
  };

  const actualizarCantidad = (codigo, cantidad) => {
    setCarrito(
      carrito.map((p) =>
        p.codigo === codigo ? { ...p, cantidad } : p
      )
    );
  };

  const eliminarProducto = (codigo) => {
    setCarrito(carrito.filter((p) => p.codigo !== codigo));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const total = carrito.reduce(
    (acc, p) => acc + p.precio * p.cantidad,
    0
  );

  return {
    carrito,
    agregarProducto,
    actualizarCantidad,
    eliminarProducto,
    vaciarCarrito,
    total,
    animarCarrito, //DEVUELVE ANIMACIÓN DEL CARRITO
    animarBadge, // DEVUELVE ANIMACIÓN DEL NUMERITO DEL CARRITO
  };
}