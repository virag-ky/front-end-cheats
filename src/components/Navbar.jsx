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
    </nav>
  );
}

export default Navbar;
