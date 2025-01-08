/* eslint-disable react/prop-types */
import { CopyBlock, shadesOfPurple } from "react-code-blocks";
import parse from "html-react-parser";

function CheatSheet({ sheet }) {
  return (
    <section className="cheatsheet">
      <h3>{sheet.title}</h3>
      <CopyBlock
        text={sheet.text}
        language={sheet.language}
        theme={shadesOfPurple}
        codeBlock
      />
      <div className="keypoints">{parse(sheet.keypoints)}</div>
    </section>
  );
}

export default CheatSheet;
