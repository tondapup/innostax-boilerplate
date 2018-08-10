import React, {Component} from "react";
import {View} from 'react-native'
import { Container, Text } from "native-base";
import Header from '../../Components/CustomHeader'
import styles from './styles'

const SettingsRender = ({ goToScreen }) => {
  return (
    <Container>
      <Header title={"Settings"} shouldHideBackButton={true}/>
      <View style={styles.View}>
        <Text>Settings Screen!</Text>
      </View>
    </Container>
  );
};


SettingsRender.propTypes = {

};

export default SettingsRender;
