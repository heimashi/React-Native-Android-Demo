'use strict';

var React = require('react-native');
var {
  Image,
  StyleSheet,
  Text,
  View,
} = React

var ImageExample = React.createClass({
	render: function(){
		return(
			<View>
			<Text>image from res</Text>
			<Image
              source={require('image!ic_image')}
              style={{width: 84, height: 84, marginLeft: 16, marginRight: 16}} >
              <Text style={{alignItems: 'center',marginTop: 20,}}>Inside</Text>
             </Image>
            <Text>image from internet</Text>
            <Image
              source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
              style={{width: 84, height: 84, marginLeft: 16, marginRight: 16}} />

             <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       			style={{width: 300, height: 300}} />
             </View>
		);
	}
});

module.exports = ImageExample;