'use strict';

var React = require('react-native');
var {
  ProgressBarAndroid,
  StyleSheet,
  Text,
  View,
} = React

var ProgressBarAndroidExample = React.createClass({

  statics: {
    title: '<ProgressBarAndroid>',
    description: 'Visual indicator of progress of some operation. ' +
        'Shows either a cyclic animation or a horizontal bar.',
  },

  render: function() {
    return (
      <View>
        <Text>Default ProgressBarAndroid</Text>
        <ProgressBarAndroid />
        
        <Text>Small ProgressBarAndroid</Text>
        <ProgressBarAndroid styleAttr="Small" />

        <Text>Horizontal Indeterminate ProgressBarAndroid</Text>
        <ProgressBarAndroid styleAttr="Horizontal" />

        <Text>Horizontal Indeterminate ProgressBarAndroid</Text>
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} color="blue"/>        

      </View>
    );
  },
});

module.exports = ProgressBarAndroidExample;
