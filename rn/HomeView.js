'use strict';

var React = require('react-native');
var {
  AsyncStorage,
  Platform,
  Dimensions,
  ListView,
  Image,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  ToastAndroid,
  BackAndroid,
} = React

var DrawerList = require('./DrawerItems');
var ListItem = require('./ListItem');

var DRAWER_WIDTH_LEFT = 56;
var i = 0;
var LISTVIEW_DATA ={"datas": [
  {"id": i++, "content": 'Text Demo'},
  {"id": i++, "content": 'Image Demo'},
  {"id": i++, "content": 'TextInput Demo'},
  {"id": i++, "content": 'ProgressBarAndroid Demo'},
  {"id": i++, "content": 'SwitchAndroid Demo'},
  {"id": i++, "content": 'ScrollView Demo'},
  {"id": i++, "content": 'WebView Demo'},
  {"id": i++, "content": 'ViewPagerAndroid Demo'},
  {"id": i++, "content": 'ToolbarAndroid Demo'},
  {"id": i++, "content": 'PullToRefreshViewAndroid Demo'},
  {"id": i++, "content": 'Toast Demo'},
  {"id": i++, "content": 'IntentAndroid Demo'},
  {"id": i++, "content": 'Native Module Demo -- MyToast'},
  {"id": i++, "content": 'Native UI Component Demo -- MyTextView'},
]};


var HomeView = React.createClass({

	getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      title: 'React Native Android Demo',
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    this.setState({
          dataSource: this.state.dataSource.cloneWithRows(LISTVIEW_DATA.datas),
          loaded: true,
        });
  },
	
	_onSelectDrawerItem: function(menuId: number){
		this.drawer.closeDrawer();
		this.setState({title: 'React Native Android Demo '+number,});
  	},
	
	_renderNavigationView: function(){
    	return(
      		<DrawerList
        		onSelectItem={this._onSelectDrawerItem}/>
    	);
  	},
  	
  	_onEndReached: function() {
      console.log('onEndReached() ');
    },
    
    _onSelectItems: function(datas) {
        console.log(datas.content);
        this.props.navigator.push({
          name: 'show_demo',
          datas: datas,
        });
    },
  
  _renderRow: function(
      datas: Object,
      sectionID: number | string,
      rowID: number | string,
      highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
    ) {
      return (
        <ListItem
          key={datas.id}
          onSelect={() => this._onSelectItems(datas)}
          onHighlight={() => highlightRowFunc(sectionID, rowID)}
          onUnhighlight={() => highlightRowFunc(null, null)}
          datas={datas}
        />
      );
  },
	
	render: function() {	
		
		return (
    		<DrawerLayoutAndroid
    			ref={(drawer) => { this.drawer = drawer; }}
 	   			drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
      			keyboardDismissMode="on-drag"
      			drawerPosition={DrawerLayoutAndroid.positions.Left}
      			renderNavigationView={this._renderNavigationView}>
      				<View style={styles.container}>
              			<ToolbarAndroid
                			title={this.state.title}
                			titleColor="white"
                			navIcon={require('image!ic_drawer')}
                			style={styles.toolbar}
                			onIconClicked={() => this.drawer.openDrawer()}
                			onActionSelected={this.onActionSelected} />
              					<ListView
          							ref="listview"
          							dataSource={this.state.dataSource}
          							renderRow={this._renderRow}
          							onEndReached={this._onEndReached}
          							automaticallyAdjustContentInsets={false}
          							keyboardDismissMode="on-drag"
          							keyboardShouldPersistTaps={true}
          							showsVerticalScrollIndicator={false}
        						/>
            		</View>
    		</DrawerLayoutAndroid>
  		);
	},
	
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
  },
  toolbar: {
    backgroundColor: '#000000',
    height: 56,
  },
  rator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  sectionHeader: {
    fontSize: 14,
    color: '#888888',
    margin: 10,
    marginLeft: 16,
  },
  title: {
    fontSize: 20,
    marginRight: 30,
  },
  content: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});

module.exports = HomeView;