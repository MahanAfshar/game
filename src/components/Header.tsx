import logo from "./../assets/images/logo.png";
import { messengers } from "../constants/header.js";
import "./../css/header.css";

const Header = () => {
  return (
    <header>
      <img id="logo" src={logo} alt="logo" />
      <ul className="messengers">
        {messengers.map((messenger, index) => (
          <li key={index}>
            <a href={messenger.href} target="_blank">
              <img src={messenger.src} alt={messenger.name} />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
