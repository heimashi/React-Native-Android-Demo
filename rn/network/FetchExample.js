'use strict';

var React = require('react-native');
var {
  TouchableNativeFeedback,
  StyleSheet,
  Text,
  View,
} = React

var REQUEST_URL = "http://news-at.zhihu.com/api/4/start-image/1080*1776";

var FetchExample = React.createClass ({
	getInitialState: function(){
		return{
			content: null,
		}
	},
	_onButtonPress: function(){
		fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          try {
          	this.setState({
          		content: JSON.stringify(responseData)
          	});
          } catch (error) {
              console.error(error);
              this.setState({
          		content: error
          	});
          }
        })
        .done();
	},
	render: function(){
		return(
			<View>
				<View style={styles.container}>
				  <TouchableNativeFeedback
        			onPress={this._onButtonPress}
        			background={TouchableNativeFeedback.SelectableBackground()}>
      					<View style={styles.btn}>
        					<Text style={styles.txt}>fetch</Text>
      					</View>
    			  </TouchableNativeFeedback>
    			</View>
				<Text>{this.state.content}</Text>
			</View>
		);
	}
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

module.exports = FetchExample;