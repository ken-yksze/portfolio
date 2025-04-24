import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p id="copyright">&copy; Yik Kan Sze 2025</p>
      <nav id="footer-nav" aria-label="Footer Navigation">
        <ul id="footer-nav-links">
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policies</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
