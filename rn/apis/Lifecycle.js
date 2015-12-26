'use strict';

var React = require('react-native');
var {
  TouchableNativeFeedback,
  StyleSheet,
  Text,
  View,
} = React

var tmpstr;

var LifecycleComponent = React.createClass ({
	getDefaultProps: function(){
		console.log('getDefaultProps');
		return null;
		//tmpstr = "Component Lifecycle:\n"+this.props.title+"  getDefaultProps()\n";
	},
	getInitialState: function(){
		console.log('getInitialState');
		return{
			content:  tmpstr+'getInitialState()\n',
		}
	},
	componentWillMount: function(){
		console.log('componentWillMount:');
		this.setState({
			content: this.state.content+'componentWillMount()\n',
		});
	},
	componentDidMount: function() {
		console.log('componentDidMount:');
    	this.setState({
    		content: this.state.content+'componentDidMount()\n'
    	});
  	},
	render: function(){
		console.log('render:');
		return(
			<View>
				<View style={styles.container}>
				  <TouchableNativeFeedback
        			onPress={() => this.setState({
    									content: this.state.content+'update state! render again\n'
    						})}
        			background={TouchableNativeFeedback.SelectableBackground()}>
      					<View style={styles.btn}>
        					<Text style={styles.txt}>call setState</Text>
      					</View>
    			  </TouchableNativeFeedback>
    			  <TouchableNativeFeedback
        			onPress={() => this.props ={bbb: "update props!",title: "sfsf"} }
        			background={TouchableNativeFeedback.SelectableBackground()}>
      					<View style={styles.btn}>
        					<Text style={styles.txt}>update props</Text>
      					</View>
    			  </TouchableNativeFeedback>
    			</View>
    			<Text>{this.props.title}</Text>
				<Text>{this.state.content}</Text>
			</View>
		);
	},
	componentWillReceiveProps: function(nextProps) {  
		console.log('componentWillReceiveProps:');
		console.log(nextProps);
  		this.setState({
    		content: this.state.content+nextProps.title+' componentWillReceiveProps()\n', 
  		});
	},
	shouldComponentUpdate: function() {
    	console.log('shouldComponentUpdate');
    	return true;
  	},
  	componentWillUpdate: function() {
    	console.log('componentWillUpdate');
  	},
  	componentDidUpdate: function() {
  		console.log('componentDidUpdate');
  	},
  	componentWillUnmount: function() {
    	console.log('componentWillUnmount');
  	},

});


var ParentComponent = React.createClass({
	render: function(){
		return (
			<View>
				<LifecycleComponent title="prop_title"/>
			</View>
		);
	},
});

var styles = StyleSheet.create({
	container: {
    	flex: 1,
    	flexDirection: 'row',
    	backgroundColor: '#eeee00',
  	},
	btn: {
		flex: 1,
		height: 60, 
		margin: 5,
		backgroundColor: '#6666ff'
	},
	txt: {
		margin: 10,
	}
});

module.exports = ParentComponent;