import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CheatSheets from "./components/CheatSheets";
import Footer from "./components/Footer";
import { html } from "./data/html-data";
import { css } from "./data/css-data";
import { javascript } from "./data/js-data";
import { react } from "./data/react-data";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("html");
  let cheatsheets = html;

  function handleSelectedLanguage(val) {
    setSelectedLanguage(val);
  }

  if (selectedLanguage === "html") cheatsheets = html;

  if (selectedLanguage === "css") cheatsheets = css;

  if (selectedLanguage === "javascript") cheatsheets = javascript;

  if (selectedLanguage === "react") cheatsheets = react;

  return (
    <>
      <Navbar />
      <Header onSelectLanguage={handleSelectedLanguage} />
      <CheatSheets language={selectedLanguage} cheatsheets={cheatsheets} />
      <Footer />
    </>
  );
}

export default App;
