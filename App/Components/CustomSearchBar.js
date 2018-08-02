import React, { Component } from 'react';
import { Dimensions, View, TouchableOpacity } from 'react-native'
import { Text, Icon, Item, Input, Container, Header, Button } from 'native-base'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CustomSearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={{ height:deviceWidth/7.5, justifyContent:"center", padding:5}}>
                <Item
                  searchBar
                  rounded
                  style={{
                    backgroundColor: "#fbfbfb",
                    height: deviceWidth/10.5,
                    borderColor: 'grey',
                    borderWidth: 1
                  }}
                >
                  <Icon
                    name="ios-search"
                    style={{ paddingLeft: 0, paddingTop: 0, marginLeft: 15 }}
                  />
                  <Input
                    placeholder="Search"
                    placeholderTextColor="grey"
                    style={{
                      color: "black"
                    }}
                    // onChangeText={searchText => onSearch(searchText)}
                    // value={searchText}
                  />
                </Item>
              </View>
        );
    }
}