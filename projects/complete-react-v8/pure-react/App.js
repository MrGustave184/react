/**
 * JSX is parsed by React.createElement
 **/
const App = () => {
    // Giving a string to React.createElement
    return React.createElement(
        'div',
        {}, // Attributes: optional
        [ // Children: optional
        React.createElement('h1', {}, "Adopt Me!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet),
        ]
        
    );
}

const Pet = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, "Luna"),
        React.createElement('h2', {}, "Dog"),
        React.createElement('h2', {}, "Havenese")
    ]);
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Giving a component to React.createElement
root.render(React.createElement(App));