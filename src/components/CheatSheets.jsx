import { CopyBlock, shadesOfPurple } from "react-code-blocks";

function CheatSheets() {
  return (
    <main>
      <div className="cheatsheet-container">
        <div className="cheatsheet">
          <CopyBlock
            className="code"
            text="&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;p&gt;Paragraph text here.&lt;/p&gt;
&lt;a href='url'&gt;Link text&lt;/a&gt;
&lt;img src='image.jpg' alt='description'&gt;
&lt;ul&gt;
    &lt;li&gt;List Item&lt;/li&gt;
&lt;/ul&gt;
&lt;div&gt;A block-level element&lt;/div&gt;"
            language="html"
            theme={shadesOfPurple}
            codeBlock
          />
        </div>
        <div className="cheatsheet">
          <CopyBlock
            className="code"
            text="&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;p&gt;Paragraph text here.&lt;/p&gt;
&lt;a href='url'&gt;Link text&lt;/a&gt;
&lt;img src='image.jpg' alt='description'&gt;
&lt;ul&gt;
    &lt;li&gt;List Item&lt;/li&gt;
&lt;/ul&gt;
&lt;div&gt;A block-level element&lt;/div&gt;"
            language="html"
            theme={shadesOfPurple}
            codeBlock
          />
        </div>
      </div>
    </main>
  );
}

export default CheatSheets;
