import './../styles.css';
import {
    HiHome,
    HiUser,
    HiRectangleGroup,
    HiEnvelope,
    HiNewspaper,
  } from "react-icons/hi2";
  import { Link } from "react-router-dom";

  const navData = [
    { name: "home", path: "/", icon: <HiHome /> },
    { name: "about", path: "/about", icon: <HiUser /> },
    { name: "resume", path: "/resume", icon: <HiNewspaper /> },
    { name: "projects", path: "/projects", icon: <HiRectangleGroup /> },
    { name: "contact", path: "/contact", icon: <HiEnvelope />},
  ];

  const Nav = () => {
  
    return (
      <nav className="nav_resp">
        <div className="container_resp">
          {navData.map((link, index) => {
            return (
              <Link to={`${link.path}`}
                key={index}
                className="nav_link"
              >
                <div className="text_resp">
                    {link.name}
                </div>
                <div>{link.icon}</div>
              </Link>
            );
          })}
        </div>
      </nav>
    );
  };
  
  export default Nav;