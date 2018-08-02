import React, {Component} from "react";
import {View} from 'react-native'
import { Container, Text } from "native-base";
import Header from '../../Components/CustomHeader'

const ProfileRender = ({ goToScreen }) => {
  return (
    <Container>
      <Header title={"Profile"} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    </Container>
  );
};


ProfileRender.propTypes = {

};

export default ProfileRender;
