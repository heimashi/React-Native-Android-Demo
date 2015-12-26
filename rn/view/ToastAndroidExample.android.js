'use strict';

var React = require('react-native');
var {
  View,
  Text,
  ToastAndroid,
  TouchableNativeFeedback,
} = React;

var ToastExample = React.createClass({

  render: function() {
    return (
      <View>
          <TouchableNativeFeedback
            onPress={() =>
              ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT)}>
              <View>
            <Text style={{padding: 30,}}>Click me.      short toast</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() =>
              ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG)}>
              <View>
            <Text style={{padding: 30,}}>Click me too.     Long Toast</Text>
            </View>
          </TouchableNativeFeedback>
      </View>
    );
  },
});

module.exports = ToastExample;



        
          