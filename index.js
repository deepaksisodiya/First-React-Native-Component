/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var ListViewImages = require('./src/components/listViewImages');

var {
  AppRegistry,
  View,
  } = React;

var firstReactNative = React.createClass({

  render: function() {
    return (
      <View>
        <ListViewImages />
      </View>
    );
  },

});

AppRegistry.registerComponent('firstReactNative', () => firstReactNative);
