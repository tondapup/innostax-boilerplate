import React, {Component} from "react";
import {View} from 'react-native'
import { Container, Text } from "native-base";

const SettingsRender = ({ goToScreen }) => {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen!</Text>
      </View>
  );
};


SettingsRender.propTypes = {

};

export default SettingsRender;
