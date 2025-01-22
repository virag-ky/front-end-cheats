import { FaGithub } from "react-icons/fa";

function Navbar() {
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <nav>
      <div className="app-name-container" onClick={handleScrollToTop}>
        <img src="/icon.svg" alt="app logo" />
        <p className="app-name">FrontEndCheats</p>
      </div>
      <a
        href="https://github.com/virag-ky/front-end-cheats"
        target="_blank"
        className="github-repo"
      >
        <button>
          <FaGithub size={20} />
          GitHub repo
        </button>
      </a>
    </nav>
  );
}

export default Navbar;
