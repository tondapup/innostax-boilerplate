import React, {Component} from "react";
import { View } from 'react-native'
import { Container, Text } from "native-base";
import Header from '../../Components/CustomHeader'

const DetailsRender = ({ goToScreen }) => {
  return (
    <Container>
      <Header title={"Details"} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    </Container>
  );
};


DetailsRender.propTypes = {

};

export default DetailsRender;
