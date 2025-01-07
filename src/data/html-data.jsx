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
];
