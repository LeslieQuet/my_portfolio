import './../styles.css';
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
      <div className="footer container-fluid">
          <div className="footer-body">
              <h4>Designed and Developed by Leslie Quetglas</h4>
              <h4>Copyright © {year} LQ</h4>
              <ul className="footer-icons">
                  <li className="social-icons">
                      <a href="https://github.com/LeslieQuet/" target="_blank" rel="noopener noreferrer">
                          <AiFillGithub />
                      </a>
                  </li>
                  <li className="social-icons">
                      <a href="https://gitlab.com/LeslieSurix" target="_blank" rel="noopener noreferrer">
                          <AiFillGitlab />
                      </a>
                  </li>
                  <li className="social-icons">
                      <a href="https://www.linkedin.com/in/leslie-quetglas/" target="_blank" rel="noopener noreferrer">
                          <FaLinkedinIn />
                      </a>
                  </li>
                  <li className="social-icons">
                      <a href="https://www.instagram.com/leslie_quetglas/" target="_blank" rel="noopener noreferrer">
                          <AiFillInstagram />
                      </a>
                  </li>
              </ul>
          </div>
      </div>
  );
}

export default Footer;