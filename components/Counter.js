var Counter = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    getInitialState: function() {
        return {
            counter: this.props.item.key * 2,
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
        return React.createElement('div', {className: 'counter', key: this.props.item.key},
            React.createElement('span', {}, 'Counter no ' + this.props.item.key + ': ' + this.state.counter),
            React.createElement('button', {onClick : this.increment}, '+1'),
            React.createElement('button', {onClick : this.decrement}, '-1')
        );
    },

    getDefaultProps: function() {
        console.log('getDefaultProps method used');
    },
    
    componentWillMount: function() {
        console.log('component ' + this.props.item.key + ' will be mounted');
    },

    componentDidMount: function() {
        console.log('component ' + this.props.item.key + ' was mounted');
    },    

    shouldComponentUpdate: function() {
        console.log('component no ' + this.props.item.key + ' should update');
        return true;
    }, 

    componentWillUpdate: function() {
        console.log('component no ' + this.props.item.key + ' will update'); 
    },

    componentDidUpdate: function() {
        console.log('component no ' + this.props.item.key + ' did update'); 
    }

});



