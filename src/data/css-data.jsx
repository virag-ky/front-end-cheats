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
];
