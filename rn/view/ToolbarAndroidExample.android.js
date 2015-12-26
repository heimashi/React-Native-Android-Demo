'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var ToolbarAndroid = require('ToolbarAndroid');

var ToolbarAndroidExample = React.createClass({
  getInitialState: function() {
    return {
      actionText: 'Example app with toolbar component',
      toolbarSwitch: false,
      colorProps: {
        titleColor: '#3b5998',
        subtitleColor: '#6a7180',
      },
    };
  },
  render: function() {
    return (
      <View>
        
          <ToolbarAndroid
            actions={toolbarActions}
            navIcon={require('image!ic_drawer')}
            onActionSelected={this._onActionSelected}
            onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
            style={styles.toolbar}
            subtitle={this.state.actionText}
            title="Toolbar" />
          <Text>{this.state.actionText}</Text>
                
          <ToolbarAndroid
            actions={toolbarActions}
            style={styles.toolbar}
            subtitle="There be no icon here" />
        
      </View>
    );
  },
  _onActionSelected: function(position) {
    this.setState({
      actionText: 'Selected ' + toolbarActions[position].title,
    });
  },
});

var toolbarActions = [
  {title: 'Create', icon: require('image!ic_drawer'), show: 'always'},
  {title: 'Filter'},
  {title: 'Settings', icon: require('image!ic_drawer'), show: 'always'},
];

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
});

module.exports = ToolbarAndroidExample;
