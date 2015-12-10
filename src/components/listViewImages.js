/**
 * Created by deepaksisodiya on 10/12/15.
 */

'use strict';

var React = require('react-native');
var cards = require('./../data/card.js');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  } = React;

var ListViewImages = React.createClass({

  getInitialState: function () {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  },

  componentDidMount: function () {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(cards.cards)
    })
  },

  render: function() {
    return (
      <View>
        <ListView style={styles.listView}
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow}>
        </ListView>
      </View>
    );
  },

  renderRow: function (card) {
    return (
      <View style={styles.rowData}>
        <Image source={{uri: card.image}} style={styles.imageStyle}></Image>
        <Text style={styles.text}>{card.name}</Text>
      </View>
    )
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: 'black',
  },
  listView: {
    paddingTop:20,
  },
  rowData: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
  },
  imageStyle: {
    width: 220,
    height: 200,
  },
});

module.exports = ListViewImages;
