var counters = [];
for (var i = 0; i < 5; i++) {
    var item = {key : i};
    var counter = React.createElement(Counter, {item: item, key: item.key});
    counters.push(counter);    
}

var App = React.createClass({
    propTypes: React.PropTypes.array.isRequired,

    render: function() {
        return (
            React.createElement('div', {}, counters)
        );
    },
});