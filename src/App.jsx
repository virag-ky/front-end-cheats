import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CheatSheets from "./components/CheatSheets";
import Footer from "./components/Footer";
import { html } from "./data/html-data";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("html");

  return (
    <>
      <Navbar />
      <Header />
      <CheatSheets language={selectedLanguage} cheatsheets={html} />
      <Footer />
    </>
  );
}

export default App;
