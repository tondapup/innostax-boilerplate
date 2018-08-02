import React, {Component} from "react";
import {View} from 'react-native'
import { Container, Text } from "native-base";

const HomeRender = ({ goToScreen }) => {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen!</Text>
      </View>
  );
};


HomeRender.propTypes = {

};

export default HomeRender;
