import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './Styles/BusySpinnerStyles'
import { Spinner } from "native-base";

export default class BusySpinner extends Component {

    render() {
        return (
            <View style={styles.spinner}>
                    <Spinner color={"#3b5998"}/>
            </View>
        );
    }
}