export const react = [
  {
    title: "Creating Components (Functional, Class)",
    text: `import React from 'react';

// Functional Component (React 16.8+ with Hooks)
// This is the modern approach for most scenarios
const FunctionalComponent = ({ name }) => {
    // State with useState Hook
    const [count, setCount] = React.useState(0);

    // Effect with useEffect Hook for side effects
    React.useEffect(() => {
        document.title = \`Count: \${count}\`;
    }, [count]);

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
};

// Class Component (Legacy/Advanced scenarios)
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // Binding 'this' for class methods when used in callbacks
        this.handleClick = this.handleClick.bind(this);
    }

    // Lifecycle method for side effects after rendering
    componentDidMount() {
        document.title = \`Count: \${this.state.count}\`;
    }

    // Lifecycle method for updating after state change
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            document.title = \`Count: \${this.state.count}\`;
        }
    }

    // Method to handle click event
    handleClick() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

// Exporting Components
export { FunctionalComponent, ClassComponent };

// Usage in another file or the same file for demonstration:
const App = () => (
    <div>
        <FunctionalComponent name="Functional User" />
        <ClassComponent name="Class User" />
    </div>
);

export default App;`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Functional Components:</strong>
        <ul className="secondary-list">
            <li>Modern approach with hooks (React 16.8+).</li>
            <li>Use <code>useState</code> for state management.</li>
            <li>Use <code>useEffect</code> for side effects similar to lifecycle methods.</li>
            <li>Inline or defined event handlers.</li>
            <li>Props are passed directly as parameters.</li>
        </ul>
    </li>
    <li><strong>Class Components:</strong>
        <ul className="secondary-list">
            <li>Legacy/advanced use cases.</li>
            <li>State is initialized in the constructor with <code>this.state</code>.</li>
            <li>Lifecycle methods like <code>componentDidMount</code>, <code>componentDidUpdate</code> for side effects.</li>
            <li>Event handlers need <code>this</code> binding or arrow functions.</li>
            <li>Props accessed via <code>this.props</code>.</li>
        </ul>
    </li>
    <li><strong>Common to Both:</strong>
        <ul className="secondary-list">
            <li>Component structure involves <code>render</code> method or return statement for JSX.</li>
            <li>Use <code>export</code> to make components available for import in other parts of the app.</li>
            <li>JSX syntax for templating.</li>
        </ul>
    </li>
    <li><strong>State Management:</strong>
        <ul className="secondary-list">
            <li>Functional: <code>useState</code> hook.</li>
            <li>Class: State in constructor, updated with <code>setState</code>.</li>
        </ul>
    </li>
    <li><strong>Props:</strong> Mechanism to pass data from parent to child components.</li>
</ul>`,
    id: 301,
  },
  {
    title: "Passing Props",
    text: `import React from 'react';

// Parent Component
const ParentComponent = () => {
    // Props include primitive values, objects, functions
    const name = "Alice";
    const age = 30;
    const user = { name: "Bob", job: "Developer" };
    const greeting = (name) => \`Hello, \${name}!\`;

    return (
        <div>
            <h1>Parent Component</h1>
            {/* Passing props as attributes */}
            <ChildComponent name={name} age={age} />
            {/* Passing an object as a prop */}
            <ChildComponentWithObject user={user} />
            {/* Passing a function as a prop */}
            <ChildComponentWithFunction greet={greeting} />
        </div>
    );
};

// Child Component - Receiving simple props
const ChildComponent = ({ name, age }) => {
    return (
        <p>{name} is {age} years old.</p>
    );
};

// Child Component - Receiving object prop
const ChildComponentWithObject = ({ user }) => {
    return (
        <p>{user.name} works as a {user.job}.</p>
    );
};

// Child Component - Receiving function prop
const ChildComponentWithFunction = ({ greet }) => {
    return (
        <p>{greet("React User")}</p>
    );
};

// Default Props
const ComponentWithDefaultProps = ({ name = "Anonymous" }) => {
    return <p>Hello, {name}!</p>;
};

// Destructuring Props
const DestructuredProps = ({ name, age: years }) => {
    return <p>{name} is {years} years old.</p>;
};

// Spread Operator for Passing Props
const SpreadProps = (props) => {
    // Using spread to pass all props to another component
    return <AnotherComponent {...props} />;
};

// Composing Components with Props
const ComposedComponent = ({ children, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
};`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Passing Props:</strong>
        <ul className="secondary-list">
            <li>Props are passed as attributes when rendering a component.</li>
            <li>Can include primitives (like strings, numbers), objects, and functions.</li>
        </ul>
    </li>
    <li><strong>Receiving Props:</strong>
        <ul className="secondary-list">
            <li>Use destructuring for cleaner code, e.g., <code>({ name, age })</code>.</li>
            <li>Or access via <code>props</code> directly if not destructured.</li>
        </ul>
    </li>
    <li><strong>Default Props:</strong>
        <ul className="secondary-list">
            <li>Set default values for props directly in function parameters with destructuring, e.g., <code>{ name = "Anonymous" }</code>.</li>
        </ul>
    </li>
    <li><strong>Destructuring Props:</strong>
        <ul className="secondary-list">
            <li>Extract props into variables for cleaner code, like <code>{ name, age: years }</code>.</li>
        </ul>
    </li>
    <li><strong>Spread Operator:</strong>
        <ul className="secondary-list">
            <li>Use <code>{...props}</code> to pass multiple props to another component easily.</li>
        </ul>
    </li>
    <li><strong>Children Prop:</strong>
        <ul className="secondary-list">
            <li>Special prop for composition, allows passing of child elements directly into a component.</li>
        </ul>
    </li>
</ul>
`,
    id: 302,
  },
  {
    title: "Conditional Rendering",
    text: `import React from 'react';

const ConditionalRendering = () => {
    const isLoggedIn = true;
    const canEdit = false;
    const items = [1, 2, 3];

    return (
        <div>
            {/* If-Else */}
            {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}

            {/* Short Circuit Evaluation */}
            {isLoggedIn && <p>You can see this message.</p>}
            {!isLoggedIn && <p>Log in to see more content.</p>}

            {/* Conditional Class */}
            <div className={canEdit ? 'editable' : 'read-only'}>
                This content is {canEdit ? 'editable' : 'read-only'}.
            </div>

            {/* Conditional Rendering with Functions */}
            {renderList(items)}
            
            {/* Ternary with JSX */}
            <button>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </div>
    );
};

// Helper function for rendering list
const renderList = (items) => {
    return items.length > 0 ? (
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    ) : <p>No items to display</p>;
};

export default ConditionalRendering;`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Ternary Operator:</strong> Use for simple if-else logic in JSX, e.g., <code>{condition ? 'true' : 'false'}</code>.</li>
    <li><strong>Logical &&:</strong> For short circuit evaluation, render content only if the condition is true.</li>
    <li><strong>Conditional Classes:</strong> Apply classes based on conditions using ternary, e.g., <code>{condition ? 'classA' : 'classB'}</code>.</li>
    <li><strong>Functions for Complex Logic:</strong> Use helper functions to handle more complex conditional rendering for better code organization.</li>
</ul>

`,
    id: 303,
  },
  {
    title: "Rendering Lists",
    text: `import React from 'react';

const ListRendering = () => {
    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' }
    ];

    return (
        <div>
            {/* Basic List Rendering */}
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            {/* Rendering with Index */}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{index + 1}. {item.name}</li>
                ))}
            </ul>

            {/* Conditional Rendering in List */}
            <ul>
                {items.map(item => (
                    item.name !== 'Banana' && <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            {/* List with Destructuring */}
            <ul>
                {items.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListRendering;`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Use <code>map</code> for Lists:</strong> Transform arrays into JSX elements using the <code>map</code> method.</li>
    <li><strong>Unique <code>key</code> Prop:</strong> Each list item requires a unique <code>key</code> for React's reconciliation process.</li>
    <li><strong>Index as Key:</strong> Use index as key when unique identifiers aren't available, though less optimal for dynamic lists.</li>
    <li><strong>Conditional Rendering:</strong> Apply conditions within <code>map</code> to filter or conditionally render items.</li>
    <li><strong>Destructuring:</strong> Use destructuring in <code>map</code> for cleaner code when working with objects.</li>
</ul>`,
    id: 304,
  },
  {
    title: "Event Handling",
    text: `import React, { useState } from 'react';

const EventHandling = () => {
    const [count, setCount] = useState(0);

    // Inline Event Handler
    const handleClick = () => setCount(count + 1);

    // Event Handler with Parameter
    const handleClickWithParam = (value) => setCount(count + value);

    // Event Object
    const handleInput = (e) => console.log('Input value:', e.target.value);

    return (
        <div>
            <p>Count: {count}</p>

            {/* Basic Click Event */}
            <button onClick={handleClick}>Increment</button>

            {/* Click with Parameter */}
            <button onClick={() => handleClickWithParam(5)}>Add 5</button>

            {/* Using Event Object */}
            <input type="text" onChange={handleInput} />

            {/* Prevent Default Action */}
            <a href="/" onClick={(e) => { e.preventDefault(); console.log('Link clicked!'); }}>
                Prevent Default Link
            </a>
        </div>
    );
};

export default EventHandling;`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Inline Event Handlers:</strong> Define simple handlers directly in JSX for straightforward interactions.</li>
    <li><strong>Event Parameters:</strong> Use arrow functions to pass parameters to event handlers.</li>
    <li><strong>Event Object:</strong> Access event details like <code>e.target.value</code> for input values or other event data.</li>
    <li><strong>Prevent Default:</strong> Use <code>e.preventDefault()</code> to stop default behaviors like link navigation or form submission.</li>
</ul>`,
    id: 305,
  },
  {
    title: "useState()",
    text: `import React, { useState } from 'react';

const UseStateExample = () => {
    // Basic State Declaration
    const [count, setCount] = useState(0);

    // State with Initial Value from Prop
    const [name, setName] = useState('John');

    // State with Object
    const [user, setUser] = useState({ name: 'Alice', age: 30 });

    // State with Array
    const [list, setList] = useState(['apple', 'banana']);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <p>Name: {name}</p>
            <button onClick={() => setName('Jane')}>Change Name</button>

            <p>User: {user.name}, Age: {user.age}</p>
            <button onClick={() => setUser({ ...user, age: user.age + 1 })}>Birthday</button>

            <ul>
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <button onClick={() => setList([...list, 'cherry'])}>Add Item</button>
        </div>
    );
};

export default UseStateExample;`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Declaration:</strong> <code>useState(initialValue)</code> provides state variable and setter function.</li>
    <li><strong>Updating State:</strong> Always use the setter function to trigger re-renders.</li>
    <li><strong>Complex State:</strong> Use spread operators (<code>...</code>) for updating nested objects or arrays.</li>
    <li><strong>Initial Value:</strong> Can be a static value, prop, or computed from a function.</li>
</ul>`,
    id: 306,
  },
];
