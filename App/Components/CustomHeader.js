import React, { Component } from 'react';
import { Dimensions, View, TouchableOpacity, Platform } from 'react-native'
import { Text, Header, Icon, Left, Body, Right, Button } from 'native-base'
import * as commonConstants from '../Constants'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CustomHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { title, shouldHideBackButton, customRightButton, goBack, style } = this.props;
        return (
            <View>
                <Header style={{ ...style }}>
                    <Left style={{flex:0.2}}>
                        {shouldHideBackButton ? null : <Button transparent onPress={() => goBack()}>
                        <Icon name="ios-arrow-back" style={{color:'white'}} />
                    </Button>}
                    </Left>
                    <Body style={{flex:0.6, alignItems:'center'}}>
                        <Text style={{color: Platform.OS === commonConstants.ANDROID_PLATFORM ? "white" : "black"}}>{title}</Text>
                    </Body>
                    <Right style={{flex:0.2}}>
                        {customRightButton}
                    </Right>
                </Header>
            </View>
        );
    }
}