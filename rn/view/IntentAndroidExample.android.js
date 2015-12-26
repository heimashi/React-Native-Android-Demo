'use strict';

var React = require('react-native');
var {
  IntentAndroid,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} = React;

var OpenURLButton = React.createClass({

  propTypes: {
    url: React.PropTypes.string,
  },

  _handleClick: function() {
    IntentAndroid.canOpenURL(this.props.url, (supported) => {
      if (supported) {
        IntentAndroid.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  },

  render: function() {
    return (
      <TouchableNativeFeedback
        onPress={this._handleClick}>
        <View style={styles.button}>
          <Text style={styles.text}>Open {this.props.url}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
});

var IntentAndroidExample = React.createClass({
  render: function() {
    return (
      <View>
        <OpenURLButton url={'http://www.google.com'} />
        <OpenURLButton url={'https://www.baidu.com'} />
        <OpenURLButton url={'http://facebook.com'} />
        <OpenURLButton url={'geo:37.484847,-122.148386'} />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 30,
  },
  button: {
    padding: 10,
    backgroundColor: '#3B5998',
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
});

module.exports = IntentAndroidExample;
