import { Link } from "react-router-dom";
import "./Confirmacion.css";

function ConfirmacionPage() {
  return (
    <div className="confirm-container">

      {/* ICONO ANIMADO */}
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>

      {/* TEXTO PRINCIPAL */}
      <h2 className="confirm-title">¡Pedido enviado con éxito!</h2>
      <p className="confirm-text">
        Hemos recibido tu solicitud y la estamos procesando.  
        Pronto nos pondremos en contacto contigo para confirmar los detalles.
      </p>

      {/* BOTÓN */}
      <Link to="/" className="btn-catalog">
        Volver al Catálogo
      </Link>

    </div>
  );
}

export default ConfirmacionPage;