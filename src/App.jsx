import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CheatSheets from "./components/CheatSheets";
import Footer from "./components/Footer";
import { html } from "./data/html-data";
import { css } from "./data/css-data";
import { javascript } from "./data/js-data";
import { react } from "./data/react-data";
import { git } from "./data/git-data";

const script = document.createElement("script");

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("html");
  const [searchTerm, setSearchTerm] = useState("");
  const [cheatsheets, setCheatSheets] = useState(html);

  function handleSearch(val) {
    const sanitizedVal = val.replace(/[^a-zA-Z\s]/g, "");
    setSearchTerm(sanitizedVal);
    setSelectedLanguage("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setSelectedLanguage("html");
      return;
    }

    const normalizedSearch = searchTerm.toLowerCase();
    const searchWords = normalizedSearch.split(/\s+/);

    const languages = [...html, ...css, ...javascript, ...react, ...git];
    setCheatSheets(
      languages.filter((language) => {
        const languageTitle = language.title.toLowerCase();
        return searchWords.some((word) => languageTitle.includes(word));
      })
    );
    setSearchTerm("");
  }

  function handleSelectedLanguage(val) {
    setSelectedLanguage(val);
  }

  useEffect(() => {
    if (selectedLanguage === "html") setCheatSheets(() => html);
    if (selectedLanguage === "css") setCheatSheets(() => css);
    if (selectedLanguage === "javascript") setCheatSheets(() => javascript);
    if (selectedLanguage === "react") setCheatSheets(() => react);
    if (selectedLanguage === "git") setCheatSheets(() => git);

    const wrapper = document.querySelector(".indieboost-wrapper");
    script.setAttribute(
      "src",
      "https://cdn.indieboosting.com/latest/script.js?id=URID3T6X9I&maxProducts=10&title=Top Products - IndieBoosting"
    );

    wrapper.appendChild(script);
  }, [selectedLanguage]);

  return (
    <>
      <Navbar />
      <Header
        onSubmit={handleSubmit}
        onSelectLanguage={handleSelectedLanguage}
        selectedLanguage={selectedLanguage}
        onSearch={handleSearch}
        searchTerm={searchTerm}
      />
      <CheatSheets cheatsheets={cheatsheets} />
      <div className="indieboost-wrapper"></div>
      <Footer />
    </>
  );
}

export default App;
