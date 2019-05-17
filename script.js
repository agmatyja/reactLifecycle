var Counter = React.createClass({ 
    getInitialState: function() {
	
        console.log("getDefaultProps() - przyjęcie komponentów standardowych");
		console.log("getInitialState() - ustawienie wartości początkowej komponentów");
		console.log("componentWillMount() - odświeżenie danych przed ich wyświetleniem, inicjowanie timerów, nasłuchiwanie zdarzeń na elementach DOM");
		console.log("render() - montowanie komponentu na drzewie DOM, np.: React elements");
		console.log("componentDidMount() - odczytanie wskazania timerów, gotowy do dalszych działań");
		console.log("componentWillReceiveProps(nextProps) - przyjęcie aktualizacji komponentów");
		console.log("shouldComponentUpdate(nextProps, nextState) - przygotowanie do zmian zawartości komponentów");
		console.log("componentWillUpdate(nextProps, nextState) - zmiana zawartości komponentów, inicjowanie timerów dotyczących update-u");
		console.log("render() - montowanie zmian na drzewie DOM");
		console.log("componentDidUpdate(prevProps, prevState) - zmodyfikowane komponenty gotowe do dalszej pracy, odczytanie wskazania timerów dotyczących update-u");
		console.log("componentWillUnmount() - odpinanie timerów i nasłuchoiwania zdarzeń w elementach DOM");	
    
		return {
		  counter: 0 
		};
	},
	
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
	
	render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
			React.createElement('button', {onClick: this.increment}, '+'),
			React.createElement('button', {onClick: this.decrement}, '-')
		);
    }
});


var element = React.createElement('div', {},
	React.createElement(Counter),
	React.createElement(Counter),
	React.createElement(Counter)
	);

ReactDOM.render(element, document.getElementById('app'));
