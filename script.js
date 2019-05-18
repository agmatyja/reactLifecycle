var Counter = React.createClass({
	
	getDefaultProps: function() {
		console.log("getDefaultProps() - przyjęcie komponentów standardowych");
	},
	
    getInitialState: function() {
		console.log("getInitialState() - ustawienie wartości początkowej komponentów");
		return {
		  counter: 0 
		};
	},
		
	componentWillMount: function() {	
		console.log("componentWillMount() - odświeżenie danych przed ich wyświetleniem, inicjowanie timerów, nasłuchiwanie zdarzeń na elementach DOM");
	},
	
	componentDidMount: function() {
		console.log("componentDidMount() - odczytanie wskazania timerów, gotowy do dalszych działań");
	},
	
	componentWillReceiveProps: function() {
		console.log("componentWillReceiveProps(nextProps) - przyjęcie aktualizacji komponentów");
	},
	
	shouldComponentUpdate: function() {
		console.log("shouldComponentUpdate(nextProps, nextState) - przygotowanie do zmian zawartości komponentów");
		return true
		
	},
	
	componentWillUpdate: function() {
		console.log("componentWillUpdate(nextProps, nextState) - zmiana zawartości komponentów, inicjowanie timerów dotyczących update-u");
		console.log("render() - montowanie zmian na drzewie DOM");
	},
	
	componentDidUpdate: function() {
		console.log("componentDidUpdate(prevProps, prevState) - zmodyfikowane komponenty gotowe do dalszej pracy, odczytanie wskazania timerów dotyczących update-u");
	},
	
	componentWillUnmount: function() {
		console.log("componentWillUnmount() - odpinanie timerów i nasłuchoiwania zdarzeń w elementach DOM");
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
		console.log("render() - montowanie komponentu na drzewie DOM, np.: React elements");
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
