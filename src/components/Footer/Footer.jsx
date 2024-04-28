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
              <img src="/logo/logo.svg" alt="Logo" onClick={goToHome}/>
            </div>
          </div>
          <ul className="footerMenu">
            <span>Get to Know us</span>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press Releases</a>
            </li>
            <li>
              <a href="#">MoMarket Science</a>
            </li>
          </ul>
          <ul className="footerMenu">
            <span>Connect with Us</span>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
          <ul className="footerMenu">
            <span>Make Money with us</span>
            <li>
              <a href="#">Sell on Mo Market</a>
            </li>
            <li>
              <a href="#">Sell under Mo Market Accelerator</a>
            </li>
            <li>
              <a href="#">Protect & Build your Brand</a>
            </li>
            <li>
              <a href="#">Fulfilment by Mo Market</a>
            </li>
            <li>
              <a href="#">Advertise your Products</a>
            </li>
            <li>
              <a href="#">MoMa Pay on Merchants</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <div className="container flexCenter justifySB mobColumn mobGap0p5">
          <a href="https://brandbook.studio/" target="_blank" rel="noreferrer">
            <span>&#169;</span> Mo Market 2023
          </a>
          <div className="flexCenter gap1">
            <a href="#">Sitemap</a>
            <div className="bar"></div>
            <a href="#">Robot.txt</a>
            <div className="bar"></div>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
