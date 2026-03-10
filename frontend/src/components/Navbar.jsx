import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CarritoContext";

function Navbar() {
    const { carrito, animarCarrito, animarBadge } = useCarritoContext();

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{
                backgroundColor: "var(--color-primary)",
                borderBottom: "4px solid var(--color-secondary)",
                padding: "12px 20px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
            }}
        >
            <Link
                className="navbar-brand fw-bold"
                to="/"
                style={{
                    color: "white",
                    fontSize: "1.4rem",
                    textDecoration: "none",
                }}
            >
                Distribuidora
            </Link>

            {/* BOTÓN PARA MÓVIL */}
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navMenu"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* LINKS */}
            <div className="collapse navbar-collapse" id="navMenu">
                <ul className="navbar-nav ms-auto d-flex align-items-center gap-4">

                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-link"
                            style={{ fontWeight: "500", fontSize: "1.05rem" }}
                        >
                            Catálogo
                        </Link>
                    </li>

                    {/* ÍCONO CARRITO CON BADGE SUPERPUESTO */}
                    <li className="nav-item position-relative">
                        <Link
                            to="/pedido"
                            className="nav-link d-flex align-items-center gap-2"
                            style={{
                                fontWeight: "500",
                                fontSize: "1.05rem",
                                textDecoration: "none",
                                position: "relative",
                                color: "white",
                            }}
                        >
                            <div style={{ position: "relative", display: "inline-block" }}>
                                {/* Ícono */}
                                <i
                                    className={`bi bi-cart3 ${animarCarrito ? "cart-bounce" : ""}`}
                                    style={{ fontSize: "1.5rem", transition: "0.2s" }}
                                ></i>

                                {/* Badge superpuesto */}
                                {carrito.length > 0 && (
                                    <span
                                        className={`badge-counter ${animarBadge ? "badge-pop" : ""}`}
                                    >
                                        {carrito.length}
                                    </span>
                                )}
                            </div>

                            Pedido
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;