'use strict';

var React = require('react-native');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  Navigator,
  ToastAndroid,
  BackAndroid,
} = React;

var COMPONENTS = [
  require('./rn/view/MyToastUtil'),
  require('./rn/view/NativeUIComponentDemo'),
  require('./rn/apis/Lifecycle'),
  require('./rn/network/FetchExample'),
  require('./rn/network/XmlHttpRequest'),
  require('./rn/view/TextExample'),
  require('./rn/view/ImageExample'),
  require('./rn/view/TextInputExample'),
  require('./rn/view/ProgressBarAndroidExample'),
  require('./rn/view/SwitchAndroidExample'),
  require('./rn/view/ScrollViewExample'),
  require('./rn/view/WebViewExample'),
  require('./rn/view/ViewPagerAndroidExample'),
  require('./rn/view/ToolbarAndroidExample'),
  require('./rn/view/PullToRefreshViewAndroidExample'),
  require('./rn/view/ToastAndroidExample'),
  require('./rn/view/IntentAndroidExample'),
  
];

var TimerMixin = require('react-timer-mixin');
var SplashScreen = require('./rn/SplashScreen');
var HomeView = require('./rn/HomeView');
var _navigator;

BackAndroid.addEventListener('hardwareBackPress', function() {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});



var ReactNativeAndroidDemo = React.createClass({
  getInitialState: function() {
      return {
        splashed: true,
      };
  },
  mixins: [TimerMixin],
  componentDidMount: function() {
    this.setTimeout(
      () => {
        this.setState({splashed: true});
      },
      5000,
    );
  },
  routeMapper: function(route, navigationOperations, onComponentRef) {
      _navigator = navigationOperations;
      if (route.name === 'home') {
        return (
          <View style={styles.container}>
          	<HomeView navigator={navigationOperations}/>
          </View>
        );
      } else if (route.name === 'show_demo') {
         var Mycomponent = COMPONENTS[route.datas.id];
         return (<Mycomponent navigator={navigationOperations}/>);
      }
  },
  render: function() {
    if (this.state.splashed) {
        var initialRoute = {name: 'home'};
        return (
          <Navigator
            style={styles.container}
            initialRoute={initialRoute}
            configureScene={() => Navigator.SceneConfigs.FadeAndroid}
            renderScene={this.routeMapper}
          />
        );
      } else {
        return (
          <SplashScreen/>
        );
      }
  }
});

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('ReactNativeAndroidDemo', () => ReactNativeAndroidDemo);