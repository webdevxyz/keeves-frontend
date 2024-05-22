import "./footer.css";
import { useNavigate, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const navigateHome = useNavigate();
  const goToHome = () => {
    if (location.pathname !== "/") {
      navigateHome("/");
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footerMenuContainer">
          <div>
            <div className="footerLogo">
              <img src="/logo/logo.png" alt="Logo" onClick={goToHome} />
            </div>
          </div>

          <ul className="footerMenu">
            <span>Get to Know us</span>

            <li>
              <a href="#">About Us</a>
            </li>
          </ul>

          <ul className="footerMenu">
            <span>Connect with Us</span>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>

          <ul className="footerMenu">
            <span>Support and Sales</span>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <div className="container flexCenter justifySB mobColumn mobGap0p5">
          <a href="https://brandbook.studio/" target="_blank" rel="noreferrer">
            <span>&#169;</span> keeves.com 2024
          </a>
          <div className="flexCenter gap1">
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
