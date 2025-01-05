/* eslint-disable react/prop-types */

import CheatSheet from "./CheatSheet";

function CheatSheets({ language, cheatsheets }) {
  return (
    <main>
      <div className="cheatsheet-container">
        {cheatsheets.map((sheet) => (
          <CheatSheet key={sheet.id} sheet={sheet} language={language} />
        ))}
      </div>
    </main>
  );
}

export default CheatSheets;
