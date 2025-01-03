import { IoSearchSharp } from "react-icons/io5";

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
    </header>
  );
}

export default Header;
