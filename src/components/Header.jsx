import { IoSearchSharp } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Header() {
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
        <button>
          <FaHtml5 size={25} /> HTML
        </button>
        <button>
          <FaCss3Alt size={25} /> CSS
        </button>
        <button>
          <FaJsSquare size={25} /> JavaScript
        </button>
        <button>
          <FaReact size={25} /> React
        </button>
      </div>
    </header>
  );
}

export default Header;
