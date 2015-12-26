'use strict';

var React = require('react-native');
var {
  Text,
  View,
  requireNativeComponent,
} = React

//var MyTextView = require('./MyTextView');

var MyTextView = requireNativeComponent.MyTextView;

var NativeTextViewExample = React.createClass({
	render: function(){
		return(
			<View>
        
			  <Text>Native UI Component Demo -- MyTextView</Text>
      </View>
		);
	}
});

// <MyTextView text="Native UI Component Demo -- MyTextView"/>

module.exports = NativeTextViewExample;