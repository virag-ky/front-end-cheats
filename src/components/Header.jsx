/* eslint-disable react/prop-types */
import { IoSearchSharp } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Header({ onSelectLanguage }) {
  return (
    <header>
      <h1>A Collection of Front-End Cheat Sheets</h1>
      <form>
        <search>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search topics..."
          />
        </search>
        <IoSearchSharp className="search-icon" />
      </form>
      <div className="languages-container">
        <button onClick={() => onSelectLanguage("html")}>
          <FaHtml5 size={25} /> HTML
        </button>
        <button onClick={() => onSelectLanguage("css")}>
          <FaCss3Alt size={25} /> CSS
        </button>
        <button onClick={() => onSelectLanguage("javascript")}>
          <FaJsSquare size={25} /> JavaScript
        </button>
        <button onClick={() => onSelectLanguage("react")}>
          <FaReact size={25} /> React
        </button>
      </div>
    </header>
  );
}

export default Header;
