/* eslint-disable react/prop-types */
import { IoSearchSharp } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Header({
  onSelectLanguage,
  selectedLanguage,
  searchTerm,
  onSearch,
  onSubmit,
}) {
  return (
    <header>
      <h1>A Collection of Front-End Cheat Sheets</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <search>
          <input
            type="search"
            name="search"
            id="search"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search topics..."
          />
        </search>
        <IoSearchSharp className="search-icon" />
      </form>
      <div className="languages-container">
        <button
          className={selectedLanguage === "html" ? "selected" : ""}
          onClick={() => onSelectLanguage("html")}
        >
          <FaHtml5 size={25} /> HTML
        </button>
        <button
          className={selectedLanguage === "css" ? "selected" : ""}
          onClick={() => onSelectLanguage("css")}
        >
          <FaCss3Alt size={25} /> CSS
        </button>
        <button
          className={selectedLanguage === "javascript" ? "selected" : ""}
          onClick={() => onSelectLanguage("javascript")}
        >
          <FaJsSquare size={25} /> JavaScript
        </button>
        <button
          className={selectedLanguage === "react" ? "selected" : ""}
          onClick={() => onSelectLanguage("react")}
        >
          <FaReact size={25} /> React
        </button>
      </div>
    </header>
  );
}

export default Header;
