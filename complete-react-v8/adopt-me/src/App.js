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
            React.createElement(Pet, {
                name: 'Luna',
                animal: 'Dog',
                bread: 'Havenese'
            }),
            React.createElement(Pet, {
                name: '1',
                animal: '2',
                bread: '3'
            }),
            React.createElement(Pet, {
                name: '4',
                animal: '5',
                bread: '6'
            }),
        ]
    );
}

const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.bread)
    ]);
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Giving a component to React.createElement
root.render(React.createElement(App));