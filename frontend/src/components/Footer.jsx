function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-primary)",
        color: "white",
        padding: "18px 0",
        marginTop: "40px",
        borderTop: "4px solid var(--color-secondary)",
        boxShadow: "0 -3px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container text-center">
        <p style={{ margin: 0, fontSize: "1rem" }}>
          Desarrollado por{" "}
          <a
            href="https://portafolio-sm.vercel.app/#home"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: "var(--color-accent)", 
              fontWeight: "600", 
              textDecoration: "none",
              transition: "0.3s"
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.75")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            Steven Marín
          </a>
        </p>

        <p style={{ margin: 0, marginTop: "4px", fontSize: "0.9rem", opacity: 0.9 }}>
          © {year} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;