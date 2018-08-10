import React, { Component } from 'react';
import { Dimensions, View } from 'react-native'
import { Text, Icon, Item, Input, Container } from 'native-base'
import styles from './Styles/CustomSearchBarStyles'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CustomSearchBar extends Component {

    constructor(props) {
        super(props);

    }
    render() {
      const {
        onSearch,
        searchText
      } = this.props
        return (
            <View style={{ height:deviceWidth/7.5, justifyContent:"center", padding:5}}>
                <Item
                  searchBar
                  rounded
                  style={styles.Item}
                >
                  <Icon
                    name="ios-search"
                    style={styles.Icon}
                  />
                  <Input
                    placeholder="Search"
                    placeholderTextColor="grey"
                    style={styles.Input}
                    onChangeText={searchText => onSearch(searchText)}
                    value={searchText}
                  />
                </Item>
              </View>
        );
    }
}