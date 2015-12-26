'use strict';

var React = require('react-native');
var {
  SwitchAndroid,
  View,
} = React

var SwitchAndroidExample = React.createClass({

  getInitialState : function() {
    return {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
    };
  },

  render: function() {
    return (
      <View style={{padding: 40}}>
          <SwitchAndroid
            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
            style={{padding: 20}}
            value={this.state.falseSwitchIsOn} />
          <SwitchAndroid
            style={{padding: 20}}
            onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
            value={this.state.trueSwitchIsOn} />
        
        
          <SwitchAndroid
            disabled={true}
            style={{padding: 20}}
            value={true} />
          <SwitchAndroid
           style={{padding: 20}}
            disabled={false}
            value={false} />
        
      </View>
    );
  }
});

module.exports = SwitchAndroidExample;
