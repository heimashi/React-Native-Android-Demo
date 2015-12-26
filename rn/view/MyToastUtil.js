'use strict';

var React = require('react-native');
var {
  View,
  Text,
  NativeModules,
  TouchableNativeFeedback,
} = React;

var ToastUtil = NativeModules.ToastUtil;

var MyToastExample = React.createClass({

  render: function() {
    return (
      <View>
          <TouchableNativeFeedback
            onPress={() =>
              ToastUtil.show('This is a toast with short duration', 
                ToastUtil.SHORT,
                (msg,du) => {
                    console.log(msg+":"+du);
                }
              )}>
              <View>
            <Text style={{padding: 30,}}>MyToast Demo!     Click me.      short toast</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() =>
              ToastUtil.show('This is a toast with short duration', 
                ToastUtil.LONG,
                (msg,du) => {
                    console.log(msg+":"+du);
                }
              )}>
              <View>
            <Text style={{padding: 30,}}>MyToast Demo!     Click me too.     Long Toast</Text>
            </View>
          </TouchableNativeFeedback>
      </View>
    );
  },
});

module.exports = MyToastExample;
