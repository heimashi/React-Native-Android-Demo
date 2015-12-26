'use strict';

var React = require('react-native');
var {
  TouchableNativeFeedback,
  StyleSheet,
  Text,
  View,
} = React

var REQUEST_URL = "http://news-at.zhihu.com/api/4/start-image/1080*1776";

var XmlHttpRequestExample = React.createClass ({
	getInitialState: function(){
		return{
			content: null,
		}
	},
	_onButtonPress: function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
          return;
      }
      if (request.status === 200) {
        console.log('success', request.responseText);
        this.setState({
              content: request.responseText
            });
      } else {
        console.warn('error');
      }
    };
    request.open('GET', REQUEST_URL);
    request.send();
	},
	render: function(){
		return(
			<View>
				<View style={styles.container}>
				  <TouchableNativeFeedback
        			onPress={this._onButtonPress}
        			background={TouchableNativeFeedback.SelectableBackground()}>
      					<View style={styles.btn}>
        					<Text style={styles.txt}>XmlHttpRequest send</Text>
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

module.exports = XmlHttpRequestExample;