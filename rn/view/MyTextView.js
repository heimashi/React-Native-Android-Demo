'use strict';

var { requireNativeComponent, PropTypes } = require('react-native');

var iface = {
  name: 'MyTextView',
  propTypes: {
    text: PropTypes.string,
  },
};

module.exports = requireNativeComponent('MyTextView', iface);