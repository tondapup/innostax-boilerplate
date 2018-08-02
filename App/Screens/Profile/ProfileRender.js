import React, {Component} from "react";
import {View} from 'react-native'
import { Container, Text } from "native-base";

const ProfileRender = ({ goToScreen }) => {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
  );
};


ProfileRender.propTypes = {

};

export default ProfileRender;
