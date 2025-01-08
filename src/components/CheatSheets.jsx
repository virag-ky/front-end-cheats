/* eslint-disable react/prop-types */

import CheatSheet from "./CheatSheet";

function CheatSheets({ cheatsheets }) {
  return (
    <main>
      <div className="cheatsheet-container">
        {cheatsheets.map((sheet) => (
          <CheatSheet key={sheet.id} sheet={sheet} />
        ))}
      </div>
    </main>
  );
}

export default CheatSheets;
