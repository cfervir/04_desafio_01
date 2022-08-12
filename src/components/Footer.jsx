import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer--title">Galería de distintos felinos por el mundo</p>
      <Button href="https://www.google.com" variant="success" target="_blank">Revisa más acá</Button>
      <p className="footer--derechos">2022 - Todos los derechos reservados.</p>
      <p className="footer--legal">Imágenes obtenidas de Unsplash.com</p>
    </footer>
  );
};

export default Footer;