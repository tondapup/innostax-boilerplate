import React, {Component} from "react";
import {View} from 'react-native'
import { Container, Text } from "native-base";

const DetailsRender = ({ goToScreen }) => {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
  );
};


DetailsRender.propTypes = {

};

export default DetailsRender;
