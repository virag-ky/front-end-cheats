export const css = [
  {
    title: "Basic Selectors",
    text: `/* Basic Selectors */
.class-name {}  
#id-name {}     
element {}      
`,
    language: "css",
    keypoints: `<ul>
            <li>.class-name {} - Class Selector - selects elements with the class 'class-name'</li>
            <li>#id-name {} - ID Selector - selects the element with id 'id-name'</li>
            <li>element {} - Element Selector - selects all elements of type 'element'</li>
        </ul>`,
    id: 101,
  },
  {
    title: "Attribute Selectors",
    text: `/* Attribute Selectors */
element[attribute] {} 
element[attribute="value"] {} 
element[attribute^="value"] {} 
element[attribute$="value"] {} 
element[attribute*="value"] {} `,
    language: "css",
    keypoints: `<ul>
            <li>element[attribute] {} - Selects elements with the specified attribute</li>
            <li>element[attribute="value"] {} - Attribute with specific value</li>
            <li>element[attribute^="value"] {} - Attribute value starts with 'value'</li>
            <li>element[attribute$="value"] {} - Attribute value ends with 'value'</li>
            <li>element[attribute*="value"] {} - Attribute value contains 'value'</li>
        </ul>`,
    id: 102,
  },
  {
    title: "Combinators",
    text: `/* Combinators */
element element {}  
element > element {} 
element + element {} 
element ~ element {} `,
    language: "css",
    keypoints: `<ul>
            <li>element element {} - Descendant Selector - selects all descendants</li>
            <li>element > element {} - Child Selector - selects direct children</li>
            <li>element + element {} - Adjacent Sibling Selector - selects the next sibling</li>
            <li>element ~ element {} - General Sibling Selector - selects all subsequent siblings</li>
        </ul>`,
    id: 103,
  },
  {
    title: "Pseudo-Classes",
    text: `/* Pseudo-classes */
element:hover {}    
element:active {}  
element:visited {}  
element:first-child {} 
element:last-child {} 
element:nth-child(n) {}`,
    language: "css",
    keypoints: `<ul>
            <li>element:hover {} - On mouse over</li>
            <li>element:active {} - When clicked</li>
            <li>element:visited {} - Visited link</li>
            <li>element:first-child {} - First child of its parent</li>
            <li>element:last-child {} - Last child of its parent</li>
            <li>element:nth-child(n) {} - nth child of its parent (n can be a number, keyword, or formula)</li>
        </ul>`,
    id: 104,
  },
  {
    title: "Pseudo-Elements",
    text: `/* Pseudo-elements */
element::before {}   
element::after {}    
element::first-line {} 
element::first-letter {}`,
    language: "css",
    keypoints: ` <ul>
            <li>element::before {} - Insert content before the content of the selected element</li>
            <li>element::after {} - Insert content after the content of the selected element</li>
            <li>element::first-line {} - Styles the first line of text in an element</li>
            <li>element::first-letter {} - Styles the first letter of the first line of text in an element</li>
        </ul>`,
    id: 105,
  },
  {
    title: "Font Properties",
    text: `/* Font Family */
font-family: 'Arial', sans-serif; /* First choice, fallback */
/* Multiple fallbacks */
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

/* Font Size */
font-size: 16px;    /* Pixels */
font-size: 1em;     /* Relative to the font size of the parent element */
font-size: 120%;    /* Percentage of the parent element's font size */
font-size: 1.2rem;  /* Relative to root element (html) */

/* Font Weight */
font-weight: normal;  /* 400 */
font-weight: bold;    /* 700 */
font-weight: 300;     /* Light */
font-weight: 600;     /* Semi-bold */

/* Font Style */
font-style: normal;   /* Default */
font-style: italic;   /* Italic */
font-style: oblique;  /* Similar to italic, but forced slant */

/* Font Variant */
font-variant: normal; /* Default */
font-variant: small-caps; /* Lowercase letters as small capitals */

/* Line Height */
line-height: normal;      /* Default, browser's choice */
line-height: 1.5;         /* Unitless, relative to font-size */
line-height: 20px;        /* Absolute value */
line-height: 150%;        /* Percentage of the font size */

/* Letter Spacing */
letter-spacing: normal;   /* Default */
letter-spacing: 2px;      /* Positive value increases spacing */
letter-spacing: -1px;     /* Negative value decreases spacing */

/* Word Spacing */
word-spacing: normal;     /* Default */
word-spacing: 5px;        /* Increases space between words */

/* Text Transform */
text-transform: none;     /* Default */
text-transform: uppercase;/* Converts text to uppercase */
text-transform: lowercase;/* Converts text to lowercase */
text-transform: capitalize; /* Capitalizes first letter of each word */

/* Font Shorthand Property */
font: italic bold 12px/30px Georgia, serif;
/* Order: 
   font-style font-variant font-weight font-size/line-height font-family 
   (font-size and font-family are required) */

/* Font Feature Settings for Advanced Typography */
font-feature-settings: "liga" 0; /* Disable ligatures */
font-feature-settings: "smcp" 1; /* Enable small caps */`,
    language: "css",
    keypoints: `<ul>
    <li><strong>Font Family</strong> - Specifies the font for text, with fallbacks for better compatibility.</li>
    <li><strong>Font Size</strong> - Determines text size, can be absolute or relative.</li>
    <li><strong>Font Weight</strong> - Controls text thickness, from light to bold.</li>
    <li><strong>Font Style</strong> - Changes text to normal, italic, or oblique.</li>
    <li><strong>Font Variant</strong> - Alters text for effects like small caps.</li>
    <li><strong>Line Height</strong> - Affects vertical spacing between lines of text.</li>
    <li><strong>Letter Spacing</strong> - Adjusts space between characters.</li>
    <li><strong>Word Spacing</strong> - Adjusts space between words.</li>
    <li><strong>Text Transform</strong> - Alters text case for stylistic effects.</li>
    <li><strong>Font Shorthand Property</strong> - Combines multiple font properties into one declaration.</li>
    <li><strong>Font Feature Settings</strong> - Provides control over advanced typographic features.</li>
</ul>

`,
    id: 106,
  },
  {
    title: "Color Properties",
    text: `/* Color by Name */
color: black;
color: white;
color: red;
color: blue;
color: green;
/* There are 140 color names recognized by CSS */

/* Hexadecimal Color Codes */
color: #FF0000; /* Red */
color: #00FF00; /* Green */
color: #0000FF; /* Blue */
color: #FFFFFF; /* White */
color: #000000; /* Black */

/* RGB Color Values */
color: rgb(255, 0, 0); /* Red */
color: rgb(0, 255, 0); /* Green */
color: rgb(0, 0, 255); /* Blue */

/* RGBA Color Values (with alpha for transparency) */
color: rgba(255, 0, 0, 0.5); /* Semi-transparent red */
color: rgba(0, 255, 0, 0.3); /* Semi-transparent green */

/* HSL Color Values */
color: hsl(0, 100%, 50%); /* Full saturation, 50% lightness = Red */
color: hsl(120, 100%, 50%); /* Green */
color: hsl(240, 100%, 50%); /* Blue */

/* HSLA Color Values (with alpha for transparency) */
color: hsla(0, 100%, 50%, 0.5); /* Semi-transparent red */
color: hsla(120, 100%, 50%, 0.3); /* Semi-transparent green */

/* Current Color (inherits color from parent) */
color: currentColor;

/* Using Variables for Colors (CSS Custom Properties) */
:root {
  --primary-color: #4CAF50;
  --secondary-color: #f44336;
}
color: var(--primary-color);
background-color: var(--secondary-color);

/* Color for Background */
background-color: #f0f0f0; /* Light gray background */

/* Color for Borders */
border-color: #000000; /* Black border */

/* Color with Opacity (for older browsers) */
color: #ff0000; /* Red */
opacity: 0.5; /* 50% opacity */

/* Gradient Backgrounds */
background: linear-gradient(to right, red, yellow); /* Horizontal gradient */
background: radial-gradient(circle, red, yellow); /* Radial gradient from center */`,
    language: "css",
    keypoints: `<ul>
    <li><strong>Color Names</strong> - 140 predefined color names, but less precise than other methods.</li>
    <li><strong>Hexadecimal Values</strong> - Common format for specifying colors, supports shorthand.</li>
    <li><strong>RGB/RGBA</strong> - RGB for solid colors; RGBA adds transparency.</li>
    <li><strong>HSL/HSLA</strong> - Hue, Saturation, Lightness model; HSLA includes transparency.</li>
    <li><strong>Current Color</strong> - Inherits color from parent for consistent theming.</li>
    <li><strong>CSS Variables</strong> - Use for dynamic color theming across your stylesheets.</li>
    <li><strong>Background and Border</strong> - Colors can apply to many properties beyond text color.</li>
    <li><strong>Gradients</strong> - Linear or radial for sophisticated background effects.</li>
    <li><strong>Opacity</strong> - Applies transparency to the whole element, an alternative to RGBA or HSLA.</li>
</ul>`,
    id: 107,
  },
  {
    title: "Position",
    text: `/* Static Positioning */
position: static; /* Default. Element follows normal document flow */

/* Relative Positioning */
position: relative; 
/* Shifts element from its normal position, but keeps space in normal flow */
top: 10px; /* Moves element 10px down from its normal position */
left: 20px; /* Moves element 20px to the right */
bottom: -5px; /* Moves element 5px up */
right: -15px; /* Moves element 15px to the left */

/* Absolute Positioning */
position: absolute; 
/* Removes element from normal flow, positioned relative to nearest positioned ancestor or initial containing block */
top: 50px; 
left: 75px;

/* Fixed Positioning */
position: fixed; 
/* Similar to absolute but positioned relative to the browser window */
bottom: 0; 
right: 0;

/* Sticky Positioning */
position: sticky; 
/* Behaves like relative until it crosses a specified threshold, then becomes fixed */
top: 0; /* Sticks to the top of its nearest scrolling ancestor when it reaches the top of the viewport */

/* Offset Properties */
/* These can be used with relative, absolute, fixed, and sticky positioning */
top: value; /* Distance from top */
right: value; /* Distance from right */
bottom: value; /* Distance from bottom */
left: value; /* Distance from left */

/* Z-Index for Layering */
z-index: 1; /* Higher number stacks on top of lower numbers */
/* Only applies to elements with position: absolute, relative, fixed, or sticky */
`,
    language: "css",
    keypoints: `<ul>
    <li><strong>Static</strong> - Default positioning; elements follow the document flow.</li>
    <li><strong>Relative</strong> - Positions relative to its normal position; space is reserved in the flow.</li>
    <li><strong>Absolute</strong> - Positions relative to nearest positioned ancestor or initial container; removed from flow.</li>
    <li><strong>Fixed</strong> - Similar to absolute but relative to viewport; stays fixed with scrolling.</li>
    <li><strong>Sticky</strong> - Behaves like relative until it crosses a threshold, then becomes fixed.</li>
    <li><strong>Offset Properties</strong> - <code>top</code>, <code>left</code>, <code>bottom</code>, <code>right</code> for adjusting position with relative, absolute, fixed, or sticky.</li>
    <li><strong>Z-Index</strong> - Controls stacking order; requires non-static positioning to work.</li>
</ul>
`,
    id: 108,
  },
  {
    title: "Display",
    text: `/* Block */
display: block; 
/* Element takes up full width available, forces a new line after it */

/* Inline */
display: inline; 
/* Does not force new lines, only takes up the space of its content */

/* Inline-Block */
display: inline-block; 
/* Behaves like inline but allows width, height, margin, and padding like block */

/* Flex */
display: flex; 
/* Turns the element into a flex container, allowing for flexible layouts */
flex-direction: row; /* Default, items are placed in a row */
flex-wrap: nowrap; /* Default, items don't wrap to next line */
justify-content: flex-start; /* Aligns items along the main axis */
align-items: stretch; /* Aligns items along the cross axis */
align-content: stretch; /* For multi-line flex containers */

/* Inline Flex */
display: inline-flex; 
/* Behaves like inline but children are flex items */

/* Grid */
display: grid; 
/* Creates a grid formatting context, enabling grid layout */
grid-template-columns: 1fr 1fr; /* Two equal-width columns */
grid-template-rows: auto auto; /* Two rows, auto-sized */
justify-items: start; /* Aligns items within their cells */
align-items: start; /* Aligns items vertically within cells */

/* Inline Grid */
display: inline-grid; 
/* Behaves like inline but children are grid items */

/* Table Display Types */
display: table; /* Makes an element behave like a table */
display: table-row; /* Behaves like a <tr> */
display: table-cell; /* Behaves like a <td> or <th> */

/* List Item */
display: list-item; 
/* Default for <li>, creates list markers */

/* None */
display: none; 
/* Removes the element from the document flow; it doesn't take up space */

`,
    language: "css",
    keypoints: `<ul>
    <li><strong>Block</strong> - Full-width, starts on a new line.</li>
    <li><strong>Inline</strong> - Flows within text, doesn't break to a new line.</li>
    <li><strong>Inline-Block</strong> - Inline flow with block-level dimensions.</li>
    <li><strong>Flex</strong> - Creates flexible, one-dimensional layouts.</li>
    <li><strong>Inline-Flex</strong> - Flex container with inline behavior.</li>
    <li><strong>Grid</strong> - For complex, two-dimensional layouts.</li>
    <li><strong>Inline-Grid</strong> - Grid layout with inline behavior.</li>
    <li><strong>Table, Table-Row, Table-Cell</strong> - Mimics HTML table structure.</li>
    <li><strong>List-Item</strong> - Generates list markers for list items.</li>
    <li><strong>None</strong> - Completely removes element from layout.</li>
</ul>`,
    id: 109,
  },
  {
    title: "Flexbox",
    text: `/* Basic Flexbox Container */
.container {
  display: flex; /* or inline-flex */
  /* Flex Container Properties */
  flex-direction: row; /* Default: row, row-reverse, column, column-reverse */
  flex-wrap: nowrap; /* Default: nowrap, wrap, wrap-reverse */
  flex-flow: row nowrap; /* Shorthand for direction and wrap */
  justify-content: flex-start; /* Aligns items on the main axis */
  align-items: stretch; /* Aligns items on the cross axis */
  align-content: stretch; /* For multi-line flex containers */
}

/* Flex Items */
.item {
  /* Flex Item Properties */
  order: 0; /* Default order of items */
  flex-grow: 0; /* Default, doesn't grow */
  flex-shrink: 1; /* Default, can shrink */
  flex-basis: auto; /* Default size before space distribution */
  flex: 0 1 auto; /* Shorthand for grow, shrink, and basis */
  align-self: auto; /* Default, align to align-items of container */
}

/* Common Flex Properties */
/* Main Axis Alignment */
justify-content: flex-start; /* Start of container */
justify-content: flex-end; /* End of container */
justify-content: center; /* Center of container */
justify-content: space-between; /* Evenly spaced with first at start, last at end */
justify-content: space-around; /* Evenly spaced with space on both sides */
justify-content: space-evenly; /* Evenly spaced with equal space around each item */

/* Cross Axis Alignment */
align-items: stretch; /* Default, items stretch to fill container height */
align-items: flex-start; /* Align at start of cross axis */
align-items: flex-end; /* Align at end of cross axis */
align-items: center; /* Center on cross axis */
align-items: baseline; /* Align baselines of text */

/* Multi-line Flex Containers */
align-content: flex-start; /* Lines packed to the start of the container */
align-content: flex-end; /* Lines packed to the end */
align-content: center; /* Lines centered in the cross axis */
align-content: space-between; /* Even space between lines */
align-content: space-around; /* Even space around lines */
align-content: stretch; /* Default, lines stretch to take up remaining space */

/* Flex Item Self Alignment */
align-self: auto; /* Default, aligns according to align-items */
align-self: flex-start; 
align-self: flex-end;
align-self: center;
align-self: baseline;
align-self: stretch;

/* Flex Item Sizing */
flex-grow: 1; /* Grow to fill available space */
flex-shrink: 1; /* Shrink if necessary */
flex-basis: 200px; /* Initial main size of the flex item */`,
    language: "css",
    keypoints: `<ul>
    <li><strong>Flex Container</strong> - Created with <code>display: flex;</code> or <code>inline-flex;</code>.</li>
    <li><strong>Flex Direction</strong> - Sets main axis (<code>row</code>, <code>column</code>, etc.).</li>
    <li><strong>Flex Wrap</strong> - Allows or prevents items from wrapping to the next line.</li>
    <li><strong>Justify Content</strong> - Distributes space along the main axis.</li>
    <li><strong>Align Items</strong> - Aligns items on the cross axis for single-line containers.</li>
    <li><strong>Align Content</strong> - Distributes space on the cross axis in multi-line containers.</li>
    <li><strong>Flex Items</strong> - Properties like <code>order</code>, <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code> control item behavior.</li>
    <li><strong>Align Self</strong> - Overrides container's <code>align-items</code> for individual items.</li>
</ul>`,
    id: 110,
  },
  {
    title: "Grid",
    text: `/* Basic Grid Container */
.container {
  display: grid; /* or inline-grid */
  /* Grid Container Properties */
  grid-template-columns: 1fr 2fr 1fr; /* Defines column layout */
  grid-template-rows: 100px auto 100px; /* Defines row layout */
  grid-template-areas: 
    "header header header"
    "main main sidebar"
    "footer footer footer";
  gap: 10px; /* Shorthand for row-gap and column-gap */
  row-gap: 10px; /* Space between rows */
  column-gap: 10px; /* Space between columns */
  justify-items: start; /* Default alignment of items in cells */
  align-items: stretch; /* Default alignment of items in cells */
  justify-content: start; /* Aligns grid in container on main axis */
  align-content: start; /* Aligns grid in container on cross axis */
}

/* Grid Items */
.item {
  /* Grid Item Properties */
  grid-column: 2 / 3; /* From column line 2 to 3 */
  grid-row: 1 / 2; /* From row line 1 to 2 */
  grid-area: header; /* Named grid area */
  justify-self: start; /* Item alignment within its cell */
  align-self: center; /* Item alignment within its cell */
}

/* Grid Template Shorthands */
.container {
  grid-template: 
    "header header header" 100px
    "main main sidebar" 1fr
    "footer footer footer" 100px / 
    1fr 2fr 1fr; /* Defines rows and columns in one declaration */
}

/* Repeat Function */
.container {
  grid-template-columns: repeat(3, 1fr); /* Three equal-width columns */
  grid-template-rows: repeat(2, 100px); /* Two rows of 100px each */
}

/* Minmax Function */
.container {
  grid-template-columns: 1fr minmax(150px, 1fr) 1fr; /* Middle column with min and max */
}

/* Auto-Fit and Auto-Fill */
.container {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Flexible, responsive layout */
}

/* Implicit Grid */
.container {
  grid-auto-rows: 50px; /* Size for implicitly created rows */
  grid-auto-columns: 100px; /* Size for implicitly created columns */
  grid-auto-flow: row; /* Default, items flow into rows */
}

/* Named Lines */
.container {
  grid-template-columns: [start] 1fr [middle] 1fr [end];
}

/* Grid Item Placement */
.item {
  grid-column-start: start;
  grid-column-end: middle;
  grid-row-start: 1;
  grid-row-end: span 2; /* Spans 2 rows */
}`,
    language: "css",
    keypoints: `<ul>
    <li><strong>Grid Container</strong> - Created with <code>display: grid;</code> or <code>inline-grid;</code>.</li>
    <li><strong>Grid Template</strong> - Defines layout structure with <code>grid-template-columns</code>, <code>grid-template-rows</code>, or <code>grid-template-areas</code>.</li>
    <li><strong>Gap</strong> - Adds space between grid items with <code>gap</code>, <code>row-gap</code>, <code>column-gap</code>.</li>
    <li><strong>Alignment</strong> - <code>justify-items</code>, <code>align-items</code> for items; <code>justify-content</code>, <code>align-content</code> for grid within container.</li>
    <li><strong>Grid Items</strong> - Placed using <code>grid-column</code>, <code>grid-row</code>, or <code>grid-area</code>.</li>
    <li><strong>Repeat & Minmax</strong> - For dynamic, responsive layouts.</li>
    <li><strong>Auto-Fit/Auto-Fill</strong> - Adjusts grid to container size.</li>
    <li><strong>Implicit Grid</strong> - Controls size of automatically created tracks.</li>
    <li><strong>Auto Flow</strong> - Determines placement flow of items.</li>
    <li><strong>Named Lines</strong> - Simplifies item placement with named grid lines.</li>
</ul>`,
    id: 111,
  },
  {
    title: "Border Properties",
    text: `/* Basic Border Properties */
border: 1px solid black; /* Shorthand for width, style, and color */
border-width: 1px; /* Can be in multiple dimensions: 1px 2px 3px 4px (top right bottom left) */
border-style: solid; /* solid, dashed, dotted, double, groove, ridge, inset, outset, none, hidden */
border-color: black; /* Can be one color or multiple for each side */

/* Individual Border Sides */
border-top: 2px dashed red;
border-right: 3px solid green;
border-bottom: 4px double blue;
border-left: 1px dotted yellow;

/* Border Radius for Rounded Corners */
border-radius: 5px; /* Applies to all corners */
border-top-left-radius: 10px;
border-top-right-radius: 20px;
border-bottom-right-radius: 30px;
border-bottom-left-radius: 40px;

/* Shorthand for Border Radius */
border-radius: 10px 20px 30px 40px; /* top-left, top-right, bottom-right, bottom-left */
border-radius: 10px / 20px; /* Horizontal radius / Vertical radius for elliptical corners */

/* Border Image Properties */
border-image-source: url('border.png');
border-image-slice: 30; /* Or 30% or 30px, slices the image into regions */
border-image-width: 10px; /* Width of the border image */
border-image-outset: 0; /* Distance border image extends beyond border box */
border-image-repeat: stretch; /* stretch, repeat, round, space */

/* Shorthand for Border Image */
border-image: url('border.png') 30 30 30 30 round;

/* Border Collapse for Tables */
border-collapse: collapse; /* Merges adjacent borders into a single border */
border-collapse: separate; /* Default, keeps borders separate */

/* Border Spacing for Tables (only with separate border collapse) */
border-spacing: 10px; /* Space between cell borders */
border-spacing: 10px 20px; /* Horizontal then vertical spacing */`,
    language: "css",
    keypoints: `<ul>
    <li><strong>Border Shorthand</strong> - Combines width, style, and color into one property.</li>
    <li><strong>Individual Sides</strong> - Allows styling each side of the border separately.</li>
    <li><strong>Border Radius</strong> - Rounds corners; can be applied to all or specific corners.</li>
    <li><strong>Border Image</strong> - Uses an image for borders, with control over slicing and repetition.</li>
    <li><strong>Border Collapse</strong> - For tables, merges or keeps borders separate.</li>
    <li><strong>Border Spacing</strong> - Adds space between cell borders in tables with separate collapse.</li>
</ul>`,
    id: 112,
  },
  {
    title: "Text Decoration Properties",
    text: `/* Basic Text Decoration */
text-decoration: none; /* Removes text decoration, commonly used for links */
text-decoration: underline; /* Underlines text */
text-decoration: overline; /* Overline above text */
text-decoration: line-through; /* Strikes through text */
text-decoration: underline overline; /* Can combine decorations */

/* Text Decoration Color */
text-decoration-color: red; /* Color of the decoration line */

/* Text Decoration Style */
text-decoration-style: solid; /* Default, solid line */
text-decoration-style: double; /* Double line */
text-decoration-style: dotted; /* Dotted line */
text-decoration-style: dashed; /* Dashed line */
text-decoration-style: wavy; /* Wavy line */

/* Text Decoration Thickness */
text-decoration-thickness: auto; /* Default, based on font size */
text-decoration-thickness: 2px; /* Absolute thickness */
text-decoration-thickness: from-font; /* Uses font's underline thickness */

/* Text Decoration Shorthand */
text-decoration: underline red wavy 2px; /* Combines style, color, and thickness */

/* Text Underline Offset */
text-underline-offset: auto; /* Default, browser decides */
text-underline-offset: 3px; /* Distance from text baseline */

/* Text Decoration Skip Ink */
text-decoration-skip-ink: auto; /* Default, skips ink traps */
text-decoration-skip-ink: none; /* No skipping, continuous line under letters */
`,
    language: "css",
    keypoints: `<ul>
    <li><strong>Text Decoration</strong> - Controls underlines, overlines, or strikethroughs.</li>
    <li><strong>Color, Style, Thickness</strong> - Customize each aspect of the decoration line.</li>
    <li><strong>Shorthand</strong> - Combines multiple decoration properties for concise declarations.</li>
    <li><strong>Underline Offset</strong> - Adjusts spacing between text and underline.</li>
    <li><strong>Skip Ink</strong> - Manages underline interaction with letter shapes for aesthetic control.</li>
</ul>
`,
    id: 113,
  },
  {
    title: "Background Properties",
    text: `/* Basic Background Color */
background-color: #f0f0f0; /* Solid background color */

/* Background Image */
background-image: url('image.jpg'); /* Single image */
background-image: linear-gradient(to right, red, yellow), url('image.jpg'); /* Multiple backgrounds, layered */

/* Background Repeat */
background-repeat: repeat; /* Default, repeats both horizontally and vertically */
background-repeat: no-repeat; /* Does not repeat */
background-repeat: repeat-x; /* Repeats horizontally */
background-repeat: repeat-y; /* Repeats vertically */

/* Background Position */
background-position: left top; /* Position of the image */
background-position: 50% 50%; /* Center */
background-position: 20px 30px; /* Absolute positioning */

/* Background Size */
background-size: auto; /* Default, keeps image's natural size */
background-size: cover; /* Scales the image to cover the entire element while maintaining aspect ratio */
background-size: contain; /* Scales the image to fit inside the element while maintaining aspect ratio */
background-size: 100px 200px; /* Specific width and height */

/* Background Attachment */
background-attachment: scroll; /* Default, image scrolls with content */
background-attachment: fixed; /* Image is fixed in viewport */
background-attachment: local; /* Image scrolls with element's content, not the viewport */

/* Background Origin */
background-origin: padding-box; /* Default, image starts from padding edge */
background-origin: border-box; /* Image starts from border edge */
background-origin: content-box; /* Image starts from content edge */

/* Background Clip */
background-clip: border-box; /* Default, clips background to border box */
background-clip: padding-box; /* Clips to padding edge */
background-clip: content-box; /* Clips to content edge */

/* Background Shorthand */
background: #f0f0f0 url('image.jpg') no-repeat left top / cover fixed padding-box border-box;

/* Multiple Backgrounds */
background: 
  url('image1.jpg') no-repeat left top,
  url('image2.jpg') no-repeat right bottom;`,
    language: "css",
    keypoints: `<ul>
    <li><strong>Color and Image</strong> - Use color or combine with images for backgrounds.</li>
    <li><strong>Repeat</strong> - Controls image repetition in the background.</li>
    <li><strong>Position</strong> - Defines placement of background images within elements.</li>
    <li><strong>Size</strong> - Adjusts the dimensions of background images.</li>
    <li><strong>Attachment</strong> - Determines if backgrounds scroll with content or remain fixed.</li>
    <li><strong>Origin</strong> - Positions background relative to different parts of the element's box model.</li>
    <li><strong>Clip</strong> - Limits where the background extends to within the box model.</li>
    <li><strong>Shorthand</strong> - Combines all background properties into one declaration for efficiency.</li>
    <li><strong>Multiple Backgrounds</strong> - Allows layering multiple images or gradients.</li>
</ul>`,
    id: 114,
  },
  {
    title: "Basic Animation Syntax",
    text: `/* Shorthand for all animation properties */
.element {
  animation: name duration timing-function delay iteration-count direction fill-mode;
}

/* Individual properties */
.element {
  animation-name: slideIn;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}`,
    language: "css",
    keypoints: `<ul>
      <li><code>animation-name</code>: Specifies the name of the <code>@keyframes</code> at-rule.</li>
      <li><code>animation-duration</code>: Sets how long one cycle of the animation takes (e.g., <code>0.5s</code>).</li>
      <li><code>animation-timing-function</code>: Defines the acceleration curve of the animation (<code>ease</code>, <code>linear</code>, etc.).</li>
      <li><code>animation-delay</code>: Determines when the animation starts (<code>0s</code> for no delay).</li>
      <li><code>animation-iteration-count</code>: Controls how many times the animation should repeat (<code>1</code> for once, <code>infinite</code> for loop).</li>
      <li><code>animation-direction</code>: Dictates how the animation should behave in terms of direction (<code>normal</code>, <code>reverse</code>, etc.).</li>
      <li><code>animation-fill-mode</code>: Specifies styles for the element before or after the animation (<code>none</code>, <code>forwards</code>, etc.).</li>
      <li><code>animation-play-state</code>: Allows pausing or running animations (<code>running</code>, <code>paused</code>).</li>
    </ul>`,
    id: 115,
  },
  {
    title: "Fade In - Animation",
    text: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}`,
    language: "css",
    keypoints: `<ul>
  <li><strong>Keyframes</strong>: Use <code>@keyframes</code> to define the animation sequence.</li>
  <li><strong>Opacity Change</strong>: Transition from <code>opacity: 0</code> (invisible) to <code>opacity: 1</code> (fully visible).</li>
  <li><strong>Animation Name</strong>: Name the animation, e.g., <code>fadeIn</code>, for reference in CSS.</li>
  <li><strong>Duration</strong>: Set the length of the animation with <code>animation-duration</code>.</li>
  <li><strong>Timing Function</strong>: Use <code>ease-in-out</code> or another timing function for a smooth transition.</li>
  <li><strong>Application</strong>: Apply the animation to an element using the animation name, like <code>animation: fadeIn 1s ease-in-out;</code>.</li>
</ul>`,
    id: 116,
  },
  {
    title: "Slide In - Animation",
    text: `@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}`,
    language: "css",
    keypoints: `<ul>
  <li><strong>Keyframes</strong>: Define the animation sequence using <code>@keyframes</code>.</li>
  <li><strong>Transform Property</strong>: Use <code>transform: translateX(-100%)</code> at the start to position the element off-screen to the left.</li>
  <li><strong>End State</strong>: Move the element to its normal position with <code>transform: translateX(0)</code>.</li>
  <li><strong>Animation Name</strong>: Give the animation a name, like <code>slideIn</code>, for CSS reference.</li>
  <li><strong>Duration</strong>: Specify how long the animation should last with <code>animation-duration</code>.</li>
  <li><strong>Timing Function</strong>: Choose an appropriate timing function, e.g., <code>ease-out</code>, for a natural slide effect.</li>
  <li><strong>Application</strong>: Apply the animation to an element with <code>animation: slideIn 0.5s ease-out;</code>.</li>
</ul>`,
    id: 117,
  },
  {
    title: "Bounce - Animation",
    text: `@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-30px);}
  60% {transform: translateY(-15px);}
}

.bounce {
  animation: bounce 1s;
}`,
    language: "css",
    keypoints: `<ul>
  <li><strong>Keyframes</strong>: Use <code>@keyframes</code> to define the bounce effect.</li>
  <li><strong>Transform Property</strong>: Employ <code>transform: translateY()</code> to create vertical movement.</li>
  <li><strong>Animation Phases</strong>: 
    <ul className="secondary-list">
      <li>Start and end at <code>0%</code> with no vertical translation.</li>
      <li>At <code>40%</code> and <code>60%</code>, move the element up with <code>-30px</code> and <code>-15px</code> respectively.</li>
      <li>Use percentages like <code>20%</code>, <code>50%</code>, <code>80%</code> to return to the original position, creating the bounce effect.</li>
    </ul>
  </li>
  <li><strong>Timing Functions</strong>: Use <code>cubic-bezier</code> for smooth, natural bounce transitions.</li>
  <li><strong>Animation Name</strong>: Name the animation, e.g., <code>bounce</code>.</li>
  <li><strong>Duration</strong>: Set the animation's duration, like <code>animation-duration: 1s</code>.</li>
  <li><strong>Application</strong>: Apply the animation to an element with <code>animation: bounce 1s;</code>.</li>
</ul>`,
    id: 118,
  },
  {
    title: "Rotate - Animation",
    text: `@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.rotate {
  animation: rotate 2s linear infinite;
}`,
    language: "css",
    keypoints: `<ul>
  <li><strong>Keyframes</strong>: Define the rotation using <code>@keyframes</code>.</li>
  <li><strong>Transform Property</strong>: Use <code>transform: rotate()</code> to rotate the element.</li>
  <li><strong>Start and End Points</strong>: 
    <ul className="secondary-list">
      <li>Begin at <code>0deg</code> (no rotation).</li>
      <li>End at <code>360deg</code> for a full rotation back to the start position.</li>
    </ul>
  </li>
  <li><strong>Animation Name</strong>: Name the animation, e.g., <code>rotate</code>.</li>
  <li><strong>Duration</strong>: Specify how long one complete rotation takes with <code>animation-duration</code>.</li>
  <li><strong>Timing Function</strong>: Use <code>linear</code> for consistent speed or another function for varied speed.</li>
  <li><strong>Iteration Count</strong>: Set <code>animation-iteration-count</code> to <code>infinite</code> for continuous rotation.</li>
  <li><strong>Application</strong>: Apply the animation with <code>animation: rotate 2s linear infinite;</code>.</li>
</ul>`,
    id: 119,
  },
  {
    title: "Scale - Animation",
    text: `@keyframes scaleUp {
  from { transform: scale(1); }
  to { transform: scale(1.2); }
}

.scale-up {
  animation: scaleUp 0.5s ease-in-out;
}`,
    language: "css",
    keypoints: `<ul>
  <li><strong>Keyframes</strong>: Define the scaling effect with <code>@keyframes</code>.</li>
  <li><strong>Transform Property</strong>: Use <code>transform: scale()</code> to change the size of the element.</li>
  <li><strong>Start and End Scale</strong>: 
    <ul className="secondary-list">
      <li>Start at <code>scale(1)</code> (original size).</li>
      <li>End at <code>scale(1.2)</code> or another factor for the scaled-up size.</li>
    </ul>
  </li>
  <li><strong>Animation Name</strong>: Name the animation, e.g., <code>scaleUp</code>.</li>
  <li><strong>Duration</strong>: Set how long the scaling occurs with <code>animation-duration</code>.</li>
  <li><strong>Timing Function</strong>: Opt for <code>ease-in-out</code> for a smooth scaling effect.</li>
  <li><strong>Application</strong>: Apply the animation to an element like <code>animation: scaleUp 0.5s ease-in-out;</code>.</li>
</ul>`,
    id: 120,
  },
  {
    title: "Pulse - Animation",
    text: `@keyframes pulse {
  0% { transform: scale(0.95); }
  50% { transform: scale(1.05); }
  100% { transform: scale(0.95); }
}

.pulse {
  animation: pulse 1s infinite;
}`,
    language: "css",
    keypoints: `<ul>
  <li><strong>Keyframes</strong>: Define the pulsing effect using <code>@keyframes</code>.</li>
  <li><strong>Transform Property</strong>: Use <code>transform: scale()</code> to change the size of the element.</li>
  <li><strong>Pulse Cycle</strong>: 
    <ul className="secondary-list">
      <li>Start at <code>scale(0.95)</code> for a slightly smaller size.</li>
      <li>Peak at <code>scale(1.05)</code> for a slightly larger size.</li>
      <li>Return to <code>scale(0.95)</code> to complete one pulse cycle.</li>
    </ul>
  </li>
  <li><strong>Animation Name</strong>: Name the animation, e.g., <code>pulse</code>.</li>
  <li><strong>Duration</strong>: Set how long one pulse cycle takes with <code>animation-duration</code>.</li>
  <li><strong>Iteration Count</strong>: Use <code>infinite</code> for continuous pulsing.</li>
  <li><strong>Application</strong>: Apply the animation like <code>animation: pulse 1s infinite;</code>.</li>
</ul>`,
    id: 121,
  },
  {
    title: "Swing - Animation",
    text: `@keyframes swing {
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

.swing {
  animation: swing 1s ease;
}`,
    language: "css",
    keypoints: `<ul>
  <li><strong>Keyframes</strong>: Define the swinging motion using <code>@keyframes</code>.</li>
  <li><strong>Transform Property</strong>: Use <code>transform: rotate()</code> to create the swinging effect.</li>
  <li><strong>Swing Motion</strong>: 
    <ul className="secondary-list">
      <li>Start at <code>0deg</code> (no rotation).</li>
      <li>At <code>20%</code>, rotate to <code>15deg</code> for a forward swing.</li>
      <li>At <code>40%</code>, swing back to <code>-10deg</code>.</li>
      <li>Continue oscillating with decreasing angles until returning to <code>0deg</code> at <code>100%</code>.</li>
    </ul>
  </li>
  <li><strong>Animation Name</strong>: Name the animation, e.g., <code>swing</code>.</li>
  <li><strong>Duration</strong>: Set the length of the swing cycle with <code>animation-duration</code>.</li>
  <li><strong>Timing Function</strong>: Use <code>ease</code> for a natural swinging motion.</li>
  <li><strong>Application</strong>: Apply the animation to an element with <code>animation: swing 1s ease;</code>.</li>
</ul>`,
    id: 122,
  },
  {
    title: "Width - Height",
    text: `/* Fixed dimensions */
.fixed-size {
  width: 300px;
  height: 200px;
}

/* Percentage of parent container */
.percentage-size {
  width: 50%;
  height: 30%;
}

/* Auto (Default for width in block elements) */
.auto-width {
  width: auto;
  height: 100px;
}

/* Viewport Units */
.viewport-size {
  width: 100vw;
  height: 50vh;
}

/* Using vmin for responsive design */
.vmin-size {
  width: 50vmin;
  height: 50vmin;
}

/* Maximum and Minimum dimensions */
.max-min-size {
  max-width: 500px;
  min-width: 200px;
  max-height: 400px;
  min-height: 100px;
}

/* Inherits from parent */
.inherit-size {
  width: inherit;
  height: inherit;
}

/* Reset to browser default */
.initial-size {
  width: initial;
  height: initial;
}

/* Content-based sizing */
.content-size {
  width: fit-content;
  height: fit-content;
}

/* Fill available space */
.fill-available {
  width: -webkit-fill-available;
  height: -webkit-fill-available;
}

/* Responsive design */
.responsive {
  width: 100%;
  max-width: 600px;
  height: auto;
}

/* Using calc for dynamic sizing */
.calc-size {
  width: calc(100% - 20px);
  height: calc(100vh - 100px);
}`,
    language: "css",
    keypoints: `<ul>
  <li><strong>Fixed Dimensions</strong>: Use <code>px</code> or other length units for exact sizes, e.g., <code>width: 300px;</code>.</li>
  <li><strong>Percentage</strong>: Set dimensions relative to the parent container, e.g., <code>width: 50%;</code>.</li>
  <li><strong>Auto</strong>: Default for width in block elements, adjusts to content, e.g., <code>width: auto;</code>.</li>
  <li><strong>Viewport Units</strong>: 
    <ul className="secondary-list">
      <li><code>vw</code> for viewport width percentage.</li>
      <li><code>vh</code> for viewport height percentage.</li>
      <li><code>vmin</code> and <code>vmax</code> for smaller or larger of viewport width/height.</li>
    </ul>
  </li>
  <li><strong>Max/Min Dimensions</strong>: 
    <ul className="secondary-list">
      <li><code>max-width</code> and <code>max-height</code> set upper limits.</li>
      <li><code>min-width</code> and <code>min-height</code> set lower limits.</li>
    </ul>
  </li>
  <li><strong>Inheritance</strong>: <code>inherit</code> copies the value from the parent.</li>
  <li><strong>Initial</strong>: <code>initial</code> resets to the browser's default value.</li>
  <li><strong>Content-Based Sizing</strong>: <code>fit-content</code> adjusts to the content size.</li>
  <li><strong>Fill Available Space</strong>: <code>-webkit-fill-available</code> fills the available space, mostly for webkit browsers.</li>
  <li><strong>Responsive Design</strong>: Combine <code>width: 100%;</code> with <code>max-width</code> for flexibility.</li>
  <li><strong>Calculated Values</strong>: Use <code>calc()</code> for dynamic sizing, e.g., <code>width: calc(100% - 20px);</code>.</li>
</ul>`,
    id: 123,
  },
  {
    title: "Media Query",
    text: `/* Basic Media Query */
@media screen and (min-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* Multiple Conditions */
@media screen and (min-width: 600px) and (max-width: 800px) {
  .container {
    width: 100%;
  }
}

/* Device Width */
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mobile-specific {
    display: block;
  }
}

/* Orientation */
@media screen and (orientation: portrait) {
  .portrait-specific {
    font-size: 18px;
  }
}

@media screen and (orientation: landscape) {
  .landscape-specific {
    font-size: 16px;
  }
}

/* High-resolution Displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .high-res-image {
    background-image: url('high-res-image.png');
  }
}

/* Print Media */
@media print {
  body {
    font-size: 12pt;
  }
  .no-print {
    display: none;
  }
}

/* Aspect Ratio */
@media screen and (min-aspect-ratio: 16/9) {
  .widescreen {
    padding-top: 56.25%; /* 16:9 aspect ratio */
  }
}

/* Combining Multiple Features */
@media screen and (min-width: 992px), print and (min-resolution: 300dpi) {
  .desktop-or-high-res-print {
    font-size: 18px;
  }
}

/* Using Custom Media Queries */
@custom-media --small-viewport (max-width: 600px);
@media (--small-viewport) {
  .small-viewport-specific {
    color: red;
  }
}

/* Hover Capability */
@media (hover: hover) {
  .hoverable {
    transition: color 0.3s ease;
  }
  .hoverable:hover {
    color: blue;
  }
}

/* Pointer Precision */
@media (pointer: fine) {
  .fine-pointer {
    cursor: pointer;
  }
}

/* Light/Dark Mode */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #333;
    color: white;
  }
}`,
    language: "css",
    keypoints: `<ul>
  <li><strong>Basic Structure</strong>: Use <code>@media</code> to start a media query, followed by media type and conditions.</li>
  <li><strong>Media Types</strong>:
    <ul className="secondary-list">
      <li><code>screen</code> - for screen devices.</li>
      <li><code>print</code> - for print media.</li>
      <li><code>all</code> - for all devices.</li>
    </ul>
  </li>
  <li><strong>Common Media Features</strong>:
    <ul className="secondary-list">
      <li><strong>Width/Height</strong>: <code>min-width</code>, <code>max-width</code>, <code>min-height</code>, <code>max-height</code> for viewport size adjustments.</li>
      <li><strong>Device Width/Height</strong>: <code>min-device-width</code>, <code>max-device-width</code>, etc., for physical device dimensions.</li>
      <li><strong>Orientation</strong>: <code>portrait</code> or <code>landscape</code> for device orientation.</li>
      <li><strong>Resolution</strong>: <code>min-resolution</code>, <code>max-resolution</code> for pixel density.</li>
      <li><strong>Aspect Ratio</strong>: <code>min-aspect-ratio</code>, <code>max-aspect-ratio</code> for display shape.</li>
      <li><strong>Pointer Precision</strong>: <code>pointer: fine</code> or <code>coarse</code> for input method.</li>
      <li><strong>Hover Capability</strong>: <code>hover: hover</code> or <code>none</code> for touch vs. mouse interaction.</li>
      <li><strong>Color Scheme</strong>: <code>prefers-color-scheme: light</code> or <code>dark</code> for user's color preference.</li>
    </ul>
  </li>
  <li><strong>Combining Conditions</strong>: Use <code>and</code>, <code>or</code> (comma-separated) for multiple conditions.</li>
  <li><strong>Custom Media Queries</strong>: Define with <code>@custom-media</code> for reusable queries.</li>
  <li><strong>Print Media</strong>: Specifically target print styles with <code>print</code> media type.</li>
</ul>`,
    id: 124,
  },
  {
    title: "Transform Properties",
    text: `/* Translate - Moves the element */
.translate {
  transform: translate(50px, 100px); /* shorthand */
}
.translate-x {
  transform: translateX(50px);
}
.translate-y {
  transform: translateY(100px);
}

/* Rotate - Rotates the element */
.rotate {
  transform: rotate(45deg);
}
.rotate-x {
  transform: rotateX(60deg); /* 3D rotation around X-axis */
}
.rotate-y {
  transform: rotateY(60deg); /* 3D rotation around Y-axis */
}
.rotate-z {
  transform: rotateZ(60deg); /* 3D rotation around Z-axis, equivalent to rotate() */
}

/* Scale - Resizes the element */
.scale {
  transform: scale(2); /* uniform scaling */
}
.scale-x {
  transform: scaleX(1.5); /* scales only horizontally */
}
.scale-y {
  transform: scaleY(1.5); /* scales only vertically */
}

/* Skew - Skews the element */
.skew {
  transform: skew(30deg, 20deg); /* shorthand */
}
.skew-x {
  transform: skewX(30deg);
}
.skew-y {
  transform: skewY(20deg);
}

/* Matrix - Applies a 2D transformation matrix */
.matrix {
  transform: matrix(1, 2, -1, 1, 80, 80);
}

/* Transform-Origin - Defines the origin point for transformations */
.transform-origin {
  transform: rotate(45deg);
  transform-origin: left top;
}

/* 3D Transformations */
.perspective {
  perspective: 800px; /* enables 3D space */
}
.translate3d {
  transform: translate3d(50px, 100px, 20px);
}
.rotate3d {
  transform: rotate3d(1, 1, 1, 45deg); /* vector-based rotation */
}
.scale3d {
  transform: scale3d(1.5, 1.5, 1.5);
}
.matrix3d {
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 100, 20, 1);
}

/* Multiple Transforms */
.multiple-transforms {
  transform: translate(10px, 20px) rotate(20deg) scale(1.2);
}`,
    language: "css",
    keypoints: `<ul>
  <li><strong>Translate</strong>:
    <ul className="secondary-list">
      <li><code>translate(x, y)</code> for moving elements in both directions.</li>
      <li><code>translateX(x)</code> and <code>translateY(y)</code> for single-axis movement.</li>
    </ul>
  </li>
  <li><strong>Rotate</strong>:
    <ul className="secondary-list">
      <li><code>rotate(angle)</code> for 2D rotation.</li>
      <li><code>rotateX(angle)</code>, <code>rotateY(angle)</code>, <code>rotateZ(angle)</code> for 3D rotations around axes.</li>
    </ul>
  </li>
  <li><strong>Scale</strong>:
    <ul className="secondary-list">
      <li><code>scale(size)</code> for uniform scaling.</li>
      <li><code>scaleX(size)</code> and <code>scaleY(size)</code> for scaling along one axis.</li>
    </ul>
  </li>
  <li><strong>Skew</strong>:
    <ul className="secondary-list">
      <li><code>skew(x-angle, y-angle)</code> for skewing in both directions.</li>
      <li><code>skewX(angle)</code> and <code>skewY(angle)</code> for skewing along one axis.</li>
    </ul>
  </li>
  <li><strong>Matrix</strong>:
    <ul className="secondary-list">
      <li><code>matrix(a, b, c, d, tx, ty)</code> for applying complex 2D transformations.</li>
    </ul>
  </li>
  <li><strong>Transform-Origin</strong>:
    <ul className="secondary-list">
      <li>Sets the origin point of transformation, e.g., <code>transform-origin: left top;</code>.</li>
    </ul>
  </li>
  <li><strong>3D Transformations</strong>:
    <ul className="secondary-list">
      <li><code>perspective(distance)</code> to enable 3D space.</li>
      <li><code>translate3d(x, y, z)</code>, <code>rotate3d(x, y, z, angle)</code>, <code>scale3d(x, y, z)</code> for 3D translations, rotations, and scaling.</li>
      <li><code>matrix3d()</code> for complex 3D transformations.</li>
    </ul>
  </li>
  <li><strong>Multiple Transforms</strong>:
    <ul className="secondary-list">
      <li>Transforms can be chained, executed in the order listed, e.g., <code>transform: translate(10px, 20px) rotate(20deg) scale(1.2);</code>.</li>
    </ul>
  </li>
</ul>`,
    id: 125,
  },
];
