import React, { Component } from 'react';
import { Dimensions, View } from 'react-native'
import { Text, Header, Icon, Left, Body, Right, Button } from 'native-base'
import * as commonConstants from '../Constants'
import styles from './Styles/CustomHeaderStyles'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CustomHeader extends Component {

    render() {
        const { title, shouldHideBackButton, customRightButton, goBack, style } = this.props;
        return (
            <View>
                <Header androidStatusBarColor="black" style={{ backgroundColor:"#F7F7F7", ...style }}>
                    <Left style={styles.Left}>
                        {shouldHideBackButton ? null : <Button transparent onPress={() => goBack()}>
                        <Icon name="ios-arrow-back" style={styles.Icon} />
                    </Button>}
                    </Left>
                    <Body style={styles.Body}>
                        <Text style={styles.Text}>{title}</Text>
                    </Body>
                    <Right style={styles.Right}>
                        {customRightButton}
                    </Right>
                </Header>
            </View>
        );
    }
}