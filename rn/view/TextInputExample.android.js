'use strict';

var React = require('react-native');
var {
  Text,
  TextInput,
  View,
  StyleSheet,
} = React;

var TextEventsExample = React.createClass({
  getInitialState: function() {
    return {
      curText: '<No Event>',
      prevText: '<No Event>',
      prev2Text: '<No Event>',
    };
  },

  updateText: function(text) {
    this.setState((state) => {
      return {
        curText: text,
        prevText: state.curText,
        prev2Text: state.prevText,
      };
    });
  },

  render: function() {
    return (
      <View>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter text to see events"
          autoCorrect={false}
          onFocus={() => this.updateText('onFocus')}
          onBlur={() => this.updateText('onBlur')}
          onChange={(event) => this.updateText(
            'onChange text: ' + event.nativeEvent.text
          )}
          onEndEditing={(event) => this.updateText(
            'onEndEditing text: ' + event.nativeEvent.text
          )}
          onSubmitEditing={(event) => this.updateText(
            'onSubmitEditing text: ' + event.nativeEvent.text
          )}
          style={styles.singleLine}
        />
        <Text style={styles.eventLabel}>
          {this.state.curText}{'\n'}
          (prev: {this.state.prevText}){'\n'}
          (prev2: {this.state.prev2Text})
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  eventLabel: {
    margin: 3,
    fontSize: 12,
  },
  singleLine: {
    fontSize: 16,
    padding: 4,
  },
});

module.exports = TextEventsExample;