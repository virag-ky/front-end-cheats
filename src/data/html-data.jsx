export const html = [
  {
    title: "HTML Boilerplate",
    text: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport"content="width=device-width, initial-scale=1.0">
        <meta name="description" content="A brief description of the page content.">
        <title>Page Title</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <header>
        <!-- Header content -->
        </header>

        <main>
          <!-- Main content -->
          <h1>Welcome to My Website</h1>
          <p>This is a paragraph.</p>
        </main>

        <footer>
          <!-- Footer content -->
        </footer>

        <script src="script.js"></script>
   </body>
  </html>`,
    keypoints: `<ul>
    <li><strong>DOCTYPE</strong>: <code>&lt;!DOCTYPE html&gt;</code> declares this as an HTML5 document.</li>
    <li><strong>HTML Tag</strong>: <code>&lt;html lang="en"&gt;</code> specifies the language for better accessibility.</li>
    <li><strong>Head Section</strong>:
        <ul>
            <li className="secondary-list"><code>&lt;meta charset="UTF-8"&gt;</code> sets the character encoding to UTF-8.</li>
            <li className="secondary-list"><code>&lt;meta name="viewport"&gt;</code> ensures correct rendering on mobile devices.</li>
            <li className="secondary-list"><code>&lt;title&gt;</code> defines the page title, important for SEO and browser tabs.</li>
            <li className="secondary-list"><code>&lt;meta name="description"&gt;</code> for SEO purposes in search results.</li>
            <li className="secondary-list"><code>&lt;link rel="stylesheet"&gt;</code> to include external CSS.</li>
        </ul>
    </li>
    <li><strong>Body Section</strong>:
        <ul>
            <li className="secondary-list">Use semantic tags like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code> for structure.</li>
            <li className="secondary-list"><code>&lt;script&gt;</code> at the end of <code>&lt;body&gt;</code> for better page load performance.</li>
        </ul>
    </li>
    <li><strong>Closing Tags</strong>: All opened tags must be properly closed for valid HTML.</li>
</ul>`,
    language: "html",
    id: 1,
  },
  {
    title: "Headings",
    text: `<h1>This is Heading 1 - Largest</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6 - Smallest</h6>`,
    language: "html",
    keypoints: `<ul>
        <li><strong>Hierarchy</strong>: The headings range from <code>&lt;h1&gt;</code> (the highest level) to <code>&lt;h6&gt;</code> (the lowest level), allowing for clear structural hierarchy in content.</li>
        
        <li><strong>Syntax</strong>: Each heading starts with an opening tag <code>&lt;hX&gt;</code> and ends with a closing tag <code>&lt;/hX&gt;</code>, where X is a number from 1 to 6.</li>
        
        <li><strong>Content</strong>: The text between these tags is what appears as the heading on the page.</li>
        
        <li><strong>Default Styling</strong>: Browsers apply different default font sizes and weights to each heading level, with <code>&lt;h1&gt;</code> being the largest and <code>&lt;h6&gt;</code> the smallest.</li>
        
        <li><strong>Semantic Use</strong>: These tags are intended for semantic structuring of content, not merely for visual presentation. <code>&lt;h1&gt;</code> should generally be used once per page for the main heading, with subsequent <code>&lt;h2&gt;</code> through <code>&lt;h6&gt;</code> for subsections.</li>
        </ul>`,
    id: 2,
  },
  {
    title: "Text Formatting Tags",
    text: `<p>This is a paragraph.</p>

<strong>This text is bold.</strong>
or
<b>This text is also bold.</b>

<em>This text is italicized.</em>
or
<i>This text is also italicized.</i>

<mark>This text is highlighted.</mark>

<small>This text is smaller.</small>

<del>This text is deleted.</del>

<ins>This text is inserted.</ins>

<sub>This is subscript.</sub>

<sup>This is superscript.</sup>

<!-- Inline quotation -->
<q>Short quotation</q>

<!-- Block quotation -->
<blockquote>
  <p>Here's a longer quote.</p>
</blockquote>`,
    language: "html",
    keypoints: `<ul>
        <li><strong>Paragraph</strong>: The <code>&lt;p&gt;</code> tag is used to define a paragraph of text.</li>
        
        <li><strong>Bold Text</strong>:
            <ul>
                <li><code>&lt;strong&gt;</code> conveys semantic importance or emphasis, making text bold.</li>
                <li><code>&lt;b&gt;</code> provides the same visual effect but without semantic meaning, used for stylistic purposes.</li>
            </ul>
        </li>
        
        <li><strong>Italicized Text</strong>:
            <ul>
                <li><code>&lt;em&gt;</code> implies emphasis or stress, rendering text in italics.</li>
                <li><code>&lt;i&gt;</code> provides italics for stylistic reasons, not semantic emphasis.</li>
            </ul>
        </li>
        
        <li><strong>Highlighted Text</strong>: <code>&lt;mark&gt;</code> is used to highlight parts of text for reference or notation.</li>
        
        <li><strong>Smaller Text</strong>: <code>&lt;small&gt;</code> reduces the font size of the enclosed text.</li>
        
        <li><strong>Deleted Text</strong>: <code>&lt;del&gt;</code> indicates text that has been removed or deleted from a document.</li>
        
        <li><strong>Inserted Text</strong>: <code>&lt;ins&gt;</code> shows text that has been added or inserted into the document.</li>
        
        <li><strong>Subscript</strong>: <code>&lt;sub&gt;</code> lowers text and makes it smaller, typically used for chemical formulas or mathematical expressions.</li>
        
        <li><strong>Superscript</strong>: <code>&lt;sup&gt;</code> raises text and makes it smaller, often used for exponents or footnotes.</li>
        
        <li><strong>Inline Quotation</strong>: <code>&lt;q&gt;</code> is for short, inline quotations, automatically adding quotation marks in most browsers.</li>
        
        <li><strong>Block Quotation</strong>: <code>&lt;blockquote&gt;</code> is used for longer quotations or cited content, usually with indentation or different styling to visually distinguish it from the rest of the text.</li>
    </ul>`,
    id: 3,
  },
  {
    title: "Lists",
    text: `<!-- Unordered List (Bullets) -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Ordered List (Numbers) -->
<ol>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
</ol>

<!-- Description List -->
<dl>
    <dt>Term 1</dt>
    <dd>Description of Term 1</dd>
    <dt>Term 2</dt>
    <dd>Description of Term 2</dd>
</dl>

<!-- Nested Lists -->
<ul>
    <li>Parent Item
        <ul>
            <li>Child Item 1</li>
            <li>Child Item 2</li>
        </ul>
    </li>
    <li>Another Parent Item</li>
</ul>

<!-- Custom Bullet Points -->
<ul style="list-style-type: square;">
    <li>Square Bullet</li>
</ul>
<ul style="list-style-type: circle;">
    <li>Circle Bullet</li>
</ul>
<ul style="list-style-type: none;">
    <li>No Bullet</li>
</ul>

<!-- Custom Numbering -->
<ol type="A">
    <li>Capital Letters</li>
    <li>Next Letter</li>
</ol>
<ol type="i">
    <li>Lower Roman Numerals</li>
    <li>Next Roman Numeral</li>
</ol>`,
    language: "html",
    keypoints: `<ul>
    <li><strong>Unordered Lists:</strong> Use <code>&lt;ul&gt;</code> for bullet-point lists. Default is disc-shaped bullets.</li>
    <li><strong>Ordered Lists:</strong> Use <code>&lt;ol&gt;</code> for numbered lists. Default starts with Arabic numbers.</li>
    <li><strong>Description Lists:</strong> Use <code>&lt;dl&gt;</code> for terms and descriptions, with <code>&lt;dt&gt;</code> for terms and <code>&lt;dd&gt;</code> for descriptions.</li>
    <li><strong>Nested Lists:</strong> Can be placed inside another list item for hierarchy. Both <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> can be nested within each other.</li>
    <li><strong>Custom Bullet Points:</strong> Change bullet style with CSS, e.g., <code>style="list-style-type: square;"</code>.</li>
    <li><strong>Custom Numbering:</strong> Use the <code>type</code> attribute on <code>&lt;ol&gt;</code> for letter or roman numeral numbering, like <code>type="A"</code> or <code>type="i"</code>.</li>
    <li><strong>List Styling:</strong> While HTML provides basic list structures, CSS is often used for advanced styling of lists.</li>
</ul>`,
    id: 4,
  },
  {
    title: "Links",
    text: `<!-- Basic Hyperlink -->
<a href="https://example.com">Visit Example.com</a>

<!-- Link to Local File -->
<a href="documents/myfile.pdf">Download PDF</a>

<!-- Link to Another Page in the Same Site -->
<a href="/about.html">About Us</a>

<!-- Email Link -->
<a href="mailto:info@example.com">Email Us</a>

<!-- Telephone Link -->
<a href="tel:+1234567890">Call Us</a>

<!-- Link with Title Attribute -->
<a href="https://example.com" title="Visit our homepage">Home</a>

<!-- Opening Link in New Tab/Window -->
<a href="https://example.com" target="_blank">Open in New Tab</a>

<!-- Link to a Specific Part of the Page -->
<p id="top">This is the top of the page.</p>
<a href="#bottom">Go to Bottom</a>
<p id="bottom" style="margin-top: 1000px;">This is the bottom of the page.</p>
<a href="#top">Back to Top</a>

<!-- Download Link -->
<a href="images/picture.jpg" download="cool-picture">Download Image</a>
`,
    language: "html",
    keypoints: `<ul>
    <li><strong>Basic Hyperlink:</strong> Use <code>&lt;a href="URL"&gt;Text&lt;/a&gt;</code> to link to external sites.</li>
    <li><strong>Local File:</strong> Link to local files with <code>&lt;a href="path/to/file"&gt;Text&lt;/a&gt;</code>.</li>
    <li><strong>Same Site Navigation:</strong> Navigate within your site using <code>&lt;a href="/page.html"&gt;Text&lt;/a&gt;</code>.</li>
    <li><strong>Email Link:</strong> Use <code>&lt;a href="mailto:email@example.com"&gt;Text&lt;/a&gt;</code> to create email links.</li>
    <li><strong>Telephone Link:</strong> Create phone number links with <code>&lt;a href="tel:+1234567890"&gt;Text&lt;/a&gt;</code>.</li>
    <li><strong>Title Attribute:</strong> Provide extra info on hover with <code>title</code>, e.g., <code>&lt;a href="URL" title="Info"&gt;Text&lt;/a&gt;</code>.</li>
    <li><strong>New Tab/Window:</strong> Open links in new tabs with <code>target="_blank"</code>, like <code>&lt;a href="URL" target="_blank"&gt;Text&lt;/a&gt;</code>.</li>
    <li><strong>Anchor Links:</strong> Link within a page using IDs, e.g., <code>&lt;a href="#section"&gt;Text&lt;/a&gt;</code> and <code>&lt;p id="section"&gt;</code>.</li>
    <li><strong>Download Link:</strong> Force a download with <code>download</code>, like <code>&lt;a href="URL" download="filename"&gt;Text&lt;/a&gt;</code>.</li>
</ul>`,
    id: 5,
  },
  {
    title: "Tables",
    text: `<!-- Basic Table -->
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
    </tr>
    <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
    </tr>
</table>

<!-- Table with Row and Column Span -->
<table>
    <tr>
        <th colspan="2">Header Spanning Two Columns</th>
    </tr>
    <tr>
        <td rowspan="2">Cell Spanning Two Rows</td>
        <td>Cell A</td>
    </tr>
    <tr>
        <td>Cell B</td>
    </tr>
</table>

<!-- Table with Border -->
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
    </tr>
</table>

<!-- Table Caption -->
<table>
    <caption>Population by Country</caption>
    <tr>
        <th>Country</th>
        <th>Population</th>
    </tr>
    <tr>
        <td>USA</td>
        <td>331 million</td>
    </tr>
</table>

<!-- Table with Header, Body, and Footer -->
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Body Row 1, Cell 1</td>
            <td>Body Row 1, Cell 2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Footer 1</td>
            <td>Footer 2</td>
        </tr>
    </tfoot>
</table>
`,
    language: "html",
    keypoints: `<ul>
    <li><strong>Basic Structure:</strong> Use <code>&lt;table&gt;</code> for tables, <code>&lt;tr&gt;</code> for rows, <code>&lt;th&gt;</code> for headers, and <code>&lt;td&gt;</code> for data cells.</li>
    <li><strong>Row and Column Span:</strong> Merge cells with <code>colspan</code> for columns and <code>rowspan</code> for rows.</li>
    <li><strong>Border Attribute:</strong> Add a simple border with <code>border="1"</code>, though this is outdated; CSS is preferred for styling.</li>
    <li><strong>Caption:</strong> Describe the table with <code>&lt;caption&gt;&lt;/caption&gt;</code>.</li>
    <li><strong>Semantic Sections:</strong> Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> for table structure readability.</li>
    <li><strong>Styling Tables:</strong> Apply CSS for appearance, either inline or externally, for color, borders, widths, etc.</li>
</ul>`,
    id: 6,
  },
  {
    title: "Forms - Basic Form",
    text: `<!-- Basic Form -->
<form action="#" method="get">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    <input type="submit" value="Submit">
</form>

<!-- Form with Placeholder and Required -->
<form action="#">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="your.email@example.com" required>
    <input type="submit" value="Submit">
</form>

<!-- Form with Button and Reset -->
<form action="#">
    <label for="search">Search:</label>
    <input type="text" id="search" name="search">
    <button type="submit">Search</button>
    <button type="reset">Reset</button>
</form>
`,
    language: "html",
    keypoints: `<ul>
    <li><strong>Basic Form Structure:</strong> Use <code>&lt;form&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;input&gt;</code>, and submit buttons.</li>
    <li><strong>Action Attribute:</strong> The <code>action</code> attribute in the <code>&lt;form&gt;</code> tag specifies where to send the form data when submitted, typically a URL or a server script.</li>
    <li><strong>Placeholders & Required:</strong> Use <code>placeholder</code> for hints and <code>required</code> for mandatory fields.</li>
    <li><strong>Buttons:</strong> Use <code>&lt;button&gt;</code> for submit and reset actions.</li>
    </ul>`,
    id: 7,
  },
  {
    title: "Forms - Radio Buttons",
    text: `<!-- Radio Buttons -->
<form action="#">
    <p>Choose your favorite:</p>
    <label><input type="radio" name="favorite" value="apple"> Apple</label>
    <label><input type="radio" name="favorite" value="banana"> Banana</label>
    <input type="submit" value="Submit">
</form>
`,
    language: "html",
    keypoints: `
    <ul><li><strong>Radio Buttons:</strong> Group choices with <code>&lt;input type="radio"&gt;</code> for single selection.</li></ul>`,
    id: 8,
  },
  {
    title: "Forms - Checkboxes",
    text: `<!-- Checkboxes -->
<form action="#">
    <p>Select your interests:</p>
    <label><input type="checkbox" name="interest" value="coding"> Coding</label>
    <label><input type="checkbox" name="interest" value="music"> Music</label>
    <input type="submit" value="Submit">
</form>`,
    language: "html",
    keypoints: `<ul><li><strong>Checkboxes:</strong> Allow multiple selections with <code>&lt;input type="checkbox"&gt;</code>.</li></ul>`,
    id: 9,
  },
  {
    title: "Forms - Select Dropdown",
    text: `<!-- Select Dropdown -->
<form action="#">
    <label for="country">Choose a country:</label>
    <select id="country" name="country">
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
    </select>
    <input type="submit" value="Submit">
</form>
`,
    language: "html",
    keypoints: `<ul><li><strong>Select Dropdown:</strong> Create drop-down menus with <code>&lt;select&gt;</code> and <code>&lt;option&gt;</code>.</li></ul>`,
    id: 10,
  },
  {
    title: "Forms - Textarea",
    text: `<!-- Textarea -->
<form action="#">
    <label for="comments">Comments:</label>
    <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
    <input type="submit" value="Submit">
</form>`,
    language: "html",
    keypoints: `<ul><li><strong>Textarea:</strong> Provide space for longer text input using <code>&lt;textarea&gt;</code>.</li></ul>`,
    id: 11,
  },
  {
    title: "Forms - Multiple Input Types",
    text: `<!-- Multiple Input Types -->
<form action="#">
    <label for="number">Number:</label>
    <input type="number" id="number" name="number" min="1" max="10">
    <label for="date">Date:</label>
    <input type="date" id="date" name="date">
    <label for="range">Range:</label>
    <input type="range" id="range" name="range" min="0" max="100">
    <label for="color">Color:</label>
    <input type="color" id="color" name="color">
    <input type="submit" value="Submit">
</form>`,
    language: "html",
    keypoints: `<ul> <li><strong>Varied Input Types:</strong> Include <code>number</code>, <code>date</code>, <code>range</code>, and <code>color</code> for specialized inputs.</li></ul>`,
    id: 12,
  },
  {
    title: "Forms - File Upload",
    text: `<!-- File Upload -->
<form action="#" method="post" enctype="multipart/form-data">
    <label for="file">Upload a file:</label>
    <input type="file" id="file" name="file">
    <input type="submit" value="Submit">
</form>`,
    language: "html",
    keypoints: `<ul><li><strong>File Upload:</strong> Use <code>&lt;input type="file"&gt;</code> with <code>enctype="multipart/form-data"</code> in the form.</li></ul>`,
    id: 13,
  },
  {
    title: "Line Break - Horizontal Rule",
    text: `<!-- Basic Line Break -->
<p>This is the first line.<br>This is the second line.</p>

<!-- Multiple Line Breaks -->
<p>This is the first paragraph.<br><br><br>This is the third paragraph.</p>

<!-- Horizontal Rule -->
<hr>

<!-- Horizontal Rule with Attributes -->
<hr width="50%" size="3" color="red">

<!-- Combining br and hr -->
<p>Here's some text.<br>
    <hr>
    And here's more text after a line break and a horizontal rule.
</p>
`,
    language: "html",
    keypoints: `<ul>
    <li><strong>Line Break <code>&lt;br&gt;</code>:</strong> Adds a single line break in the text flow, for new lines without paragraph separation.</li>
    <li><strong>Multiple <code>&lt;br&gt;</code>s:</strong> Can be used consecutively to create more vertical space.</li>
    <li><strong>Horizontal Rule <code>&lt;hr&gt;</code>:</strong> Creates a thematic break or a line in the document, visually separating content.</li>
    <li><strong>HR Attributes:</strong> Although less common now, <code>&lt;hr&gt;</code> can use attributes like <code>width</code>, <code>size</code>, and <code>color</code> for basic styling. CSS is preferred for modern use.</li>
</ul>`,
    id: 14,
  },
  {
    title: "Div (Division Element)",
    text: `<!-- Basic Div Usage -->
<div>
    This is a simple div for block-level content.
</div>

<!-- Div with Class for Styling -->
<div class="box blue-background">
    This div uses a class for background color styling.
</div>

<!-- Div with ID -->
<div id="unique-div" class="box">
    This div has an ID for unique targeting or JavaScript interaction.
</div>

<!-- Nested Divs -->
<div class="box">
    <div>First nested div.</div>
    <div>Second nested div.</div>
</div>

<!-- Div for Sectioning Content -->
<div class="box">
    <h3>Section Title</h3>
    <p>This div groups related content into a section.</p>
</div>
`,
    language: "html",
    keypoints: `<ul>
    <li><strong>Block-Level Container:</strong> <code>&lt;div&gt;</code> is used for block-level layout, creating new lines before and after itself.</li>
    <li><strong>Styling:</strong> Easily styled with CSS through classes or IDs for layout, borders, backgrounds, etc.</li>
    <li><strong>Unique Targeting:</strong> Use <code>id</code> for uniquely identifying a div for specific CSS or JavaScript actions.</li>
    <li><strong>Nesting:</strong> Can contain other <code>&lt;div&gt;</code>s or elements, useful for nested or complex structures.</li>
    <li><strong>Semantic Container:</strong> While not inherently semantic, it can group related content when no specific semantic element exists.</li>
    <li><strong>Generic Use:</strong> A go-to when you need a non-semantic container for custom layouts or when no more specific HTML5 element fits the context.</li>
</ul>`,
    id: 15,
  },
  {
    title: "Span",
    text: `<!-- Basic Span Usage -->
<p>This is a paragraph with some <span>inline text</span>.</p>

<!-- Span for Styling -->
<p>Here's a <span class="highlight">highlighted</span> word for emphasis.</p>

<!-- Span for Semantic Meaning -->
<p>Here, <span lang="fr">Bonjour</span> is French for "Hello".</p>

<!-- Span for Errors or Warnings -->
<p>Input <span class="error">error</span> detected.</p>

<!-- Span for Size Adjustment -->
<p>This sentence has <span class="small-text">smaller text</span> within it.</p>

<!-- Multiple Spans for Different Effects -->
<p>This <span class="highlight">highlighted</span> <span class="small-text">small</span> <span class="error">error</span> demonstrates multiple spans.</p>

<!-- Span with Title for Tooltip -->
<p>Hover over this <span title="This is a tooltip">text</span> for a tooltip.</p>

`,
    language: "html",
    keypoints: `<ul>
    <li><strong>Inline Element:</strong> <code>&lt;span&gt;</code> is used for inline content, affecting only the text it wraps without breaking the flow.</li>
    <li><strong>Styling:</strong> Ideal for applying CSS to small segments of text for effects like color, size, or background changes.</li>
    <li><strong>Semantic Use:</strong> Can denote language changes, technical terms, or other inline semantic distinctions using attributes like <code>lang</code>.</li>
    <li><strong>Error/Warning:</strong> Useful for highlighting errors or warnings within text.</li>
    <li><strong>Tooltips:</strong> The <code>title</code> attribute can be used for providing additional info on hover.</li>
</ul>`,
    id: 16,
  },
  {
    title: "Image Element - Img",
    text: `<img src="image.jpg" alt="Description of image">

<!-- Common attributes -->
<img src="image.jpg" 
     alt="Description"
     width="300" 
     height="200" 
     loading="lazy" 
     srcset="image-small.jpg 300w, image-large.jpg 600w"
    sizes="(max-width: 300px) 100vw, 300px">

<!-- With figure and figcaption -->
<figure>
  <img src="image.jpg" alt="Description of image">
  <figcaption>Image caption goes here.</figcaption>
</figure>
    `,
    language: "html",
    keypoints: `<ul>
  <li><strong>src</strong> - Specifies the path to the image.</li>
  <li><strong>alt</strong> - Provides alternative text for accessibility.</li>
  <li><strong>width</strong> - Sets the width of the image.</li>
  <li><strong>height</strong> - Sets the height of the image.</li>
  <li><strong>loading</strong> - Use 'lazy' for performance.</li>
  <li><strong>srcset</strong> - Allows for responsive images by specifying different image sources.</li>
  <li><strong>sizes</strong> - Helps in selecting the appropriate image from srcset based on viewport size.</li>
  <li><strong>figure</strong> - Container for self-contained content like images, illustrations, diagrams, etc.</li>
  <li><strong>figcaption</strong> - Provides a caption or legend for the content within a <code>figure</code> element.</li>
  <li>Use <code>figure</code> for content that can be moved away from the main flow without affecting the document's meaning.</li>
  <li><code>figcaption</code> can be the first or last child within <code>figure</code>.</li>
</ul>`,
    id: 17,
  },
  {
    title: "ARIA Attributes",
    text: `<!-- ARIA Live Regions -->
<div aria-live="polite">Live updates here.</div>

<!-- ARIA Labels -->
<button aria-label="Close">X</button>
<input type="text" aria-labelledby="nameLabel" placeholder="Name">
<label id="nameLabel">Enter your name:</label>

<!-- ARIA Roles -->
<div role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
  <h2 id="dialogTitle">Dialog Title</h2>
  <p id="dialogDesc">Dialog description.</p>
</div>

<!-- ARIA States and Properties -->
<button aria-expanded="false">Expand Menu</button>
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel1">Tab 1</button>
  <div id="panel1" role="tabpanel" aria-labelledby="tab1">Content for tab 1</div>
</button>

<!-- ARIA for Form Elements -->
<input type="checkbox" aria-checked="false" aria-label="Agree to terms">
<select aria-required="true">
  <option value="option1">Option 1</option>
</select>

<!-- ARIA for Landmarks -->
<nav role="navigation" aria-label="Main Menu">
  <ul>
    <li><a href="#home">Home</a></li>
  </ul>
</nav>

<!-- ARIA for Dynamic Content -->
<div role="region" aria-relevant="additions" aria-live="assertive">
  Dynamic content will be announced here.
</div>`,
    language: "html",
    keypoints: `<ul>
  <li><strong>aria-live</strong> - Announces dynamic content changes to screen readers.</li>
  <li><strong>aria-label/aria-labelledby</strong> - Provides an accessible name for elements without visible text.</li>
  <li><strong>role</strong> - Defines the role of an element for assistive technologies, like 'dialog', 'tab', or 'button'.</li>
  <li><strong>aria-expanded</strong> - Indicates if an element is expandable or collapsible.</li>
  <li><strong>aria-selected</strong> - Marks the current item as selected within a set.</li>
  <li><strong>aria-controls</strong> - Identifies one or more elements controlled by another.</li>
  <li><strong>aria-checked</strong> - Indicates the state of checkboxes or similar toggles.</li>
  <li><strong>aria-required</strong> - Specifies that user input is mandatory for an element before form submission.</li>
  <li><strong>aria-relevant</strong> - Determines what types of changes in a live region are to be announced.</li>
  <li><strong>aria-assertive</strong> - Used with aria-live for immediate announcement of changes.</li>
  <li>ARIA should enhance or repair native semantics, not replace them.</li>
</ul>`,
    id: 18,
  },
];
