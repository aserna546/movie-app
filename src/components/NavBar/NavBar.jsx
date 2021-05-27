import "./NavBar.css";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      // handle scroll change
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, prevScrollPos]);

  return (
    <header style={{ top: visible ? "0" : "-70px" }}>
      <div className="links">
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home fa-lg"></i>
              <span className="text">home</span>
            </Link>
          </li>
          <li>
            <a href="https://www.themoviedb.org/?language=en-US">
              <i className="far fa-play-circle fa-lg"></i>{" "}
              <span className="text">genre</span>{" "}
            </a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/?language=en-US">
              <i className="fas fa-film fa-lg"></i>
              <span className="text">Movies</span>
            </a>
          </li>
        </ul>
      </div>
      <Search></Search>
    </header>
  );
}
