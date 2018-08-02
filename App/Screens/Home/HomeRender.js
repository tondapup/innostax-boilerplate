import React, {Component} from "react";
import { View, TouchableOpacity } from 'react-native'
import { Container, Text, Icon } from "native-base";
import Header from '../../Components/CustomHeader'

const HomeRender = ({ goToScreen }) => {
  return (
    <Container>
      <Header  
        title={'Home'}
        shouldHideBackButton={true} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen!</Text>
      </View>
    </Container>
  );
};


HomeRender.propTypes = {

};

export default HomeRender;
