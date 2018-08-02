import React, {Component} from "react";
import {View} from 'react-native'
import { Container, Text } from "native-base";
import Header from '../../Components/CustomHeader'

const SettingsRender = ({ goToScreen }) => {
  return (
    <Container>
      <Header title={"Settings"} shouldHideBackButton={true}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen!</Text>
      </View>
    </Container>
  );
};


SettingsRender.propTypes = {

};

export default SettingsRender;
