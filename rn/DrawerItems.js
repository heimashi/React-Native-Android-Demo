'use strict'

var React = require('react-native');
var {
  AsyncStorage,
  Platform,
  ListView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableHighlight,
} = React


var DrawerList = React.createClass({
  getInitialState: function() {
      return {
        isLoading: false,
      };
    },
  componentDidMount: function() {
    },

  render: function(){
  var TouchableElement = TouchableHighlight;
      if (Platform.OS === 'android') {
        TouchableElement = TouchableNativeFeedback;
      }
    return (
      <View style={styles.container} {...this.props}>
        <View style={styles.header}/>
        <TouchableElement>
          <View style={{flexDirection: 'row', alignItems: 'center', padding: 16}}>
            <Image
              source={require('image!ic_drawer')}
              style={{width: 24, height: 24, marginLeft: 16, marginRight: 16}} />
            <Text style={styles.menuText}>
               item1
            </Text>
          </View>
        </TouchableElement>
        <TouchableElement>
          <View style={{flexDirection: 'row', alignItems: 'center', padding: 16}}>
            <Image
              source={require('image!ic_drawer')}
              style={{width: 24, height: 24, marginLeft: 16, marginRight: 16}} />
            <Text style={styles.menuText}>
              item2
            </Text>

          </View>
        </TouchableElement>
        <TouchableElement>
          <View style={{flexDirection: 'row', alignItems: 'center', padding: 16}}>
            <Image
              source={require('image!ic_drawer')}
              style={{width: 24, height: 24, marginLeft: 16, marginRight: 16}} />
            <Text style={styles.menuText}>
              item3
            </Text>
          </View>
        </TouchableElement>
        <TouchableElement>
          <View style={{flexDirection: 'row', alignItems: 'center', padding: 16}}>
            <Image
              source={require('image!ic_drawer')}
              style={{width: 24, height: 24, marginLeft: 16, marginRight: 16}} />
            <Text style={styles.menuText}>
              item4
            </Text>
          </View>
        </TouchableElement>
        <TouchableElement>
          <View style={{flexDirection: 'row', alignItems: 'center', padding: 16}}>
            <Image
              source={require('image!ic_drawer')}
              style={{width: 24, height: 24, marginLeft: 16, marginRight: 16}} />
            <Text style={styles.menuText}>
              item5
            </Text>
          </View>
        </TouchableElement>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F20',
  },
  header: {
    height: 56,
    backgroundColor: '#000000',
  },
  userInfo: {
    flex: 1,
    backgroundColor: '#00a2ed',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  menuText: {
    fontSize: 14,
    color: 'white',
  },
  homeTheme: {
    fontSize: 16,
    marginLeft: 16,
    color: '#00a2ed'
  },
  themeItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  themeName: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },
  themeIndicate: {
    marginRight: 16,
    width: 16,
    height: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
});

module.exports = DrawerList;