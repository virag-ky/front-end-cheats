export const html = [
  {
    title: "HTML boilerplate",
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
    <li><span className="point">DOCTYPE</span>: <code>&lt;!DOCTYPE html&gt;</code> declares this as an HTML5 document.</li>
    <li><span className="point">HTML Tag</span>: <code>&lt;html lang="en"&gt;</code> specifies the language for better accessibility.</li>
    <li><span className="point">Head Section</span>:
        <ul>
            <li className="secondary-list"><code>&lt;meta charset="UTF-8"&gt;</code> sets the character encoding to UTF-8.</li>
            <li className="secondary-list"><code>&lt;meta name="viewport"&gt;</code> ensures correct rendering on mobile devices.</li>
            <li className="secondary-list"><code>&lt;title&gt;</code> defines the page title, important for SEO and browser tabs.</li>
            <li className="secondary-list"><code>&lt;meta name="description"&gt;</code> for SEO purposes in search results.</li>
            <li className="secondary-list"><code>&lt;link rel="stylesheet"&gt;</code> to include external CSS.</li>
        </ul>
    </li>
    <li><span className="point">Body Section</span>:
        <ul>
            <li className="secondary-list">Use semantic tags like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code> for structure.</li>
            <li className="secondary-list"><code>&lt;script&gt;</code> at the end of <code>&lt;body&gt;</code> for better page load performance.</li>
        </ul>
    </li>
    <li><span className="point">Closing Tags</span>: All opened tags must be properly closed for valid HTML.</li>
</ul>`,
    language: "html",
    id: 1,
  },
];
