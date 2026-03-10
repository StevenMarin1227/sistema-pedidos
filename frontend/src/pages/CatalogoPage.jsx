import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const mockProductos = [
  { codigo: "A001", nombre: "Arroz 500g", precio: 3200 },
  { codigo: "L107", nombre: "Leche 1L", precio: 4500 },
  { codigo: "H502", nombre: "Harina 1kg", precio: 3900 },
];

function CatalogoPage() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Más adelante llamaremos a la API
    setProductos(mockProductos);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Catálogo de Productos</h2>
      <div className="row">
        {productos.map((p) => (
          <div className="col-md-4 mt-3" key={p.codigo}>
            <ProductCard producto={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogoPage;