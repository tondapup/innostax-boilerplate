import React, {Component} from "react";
import { View } from 'react-native'
import { Container, Text } from "native-base";
import Header from '../../Components/CustomHeader'
import styles from './styles'
const DetailsRender = ({ goToScreen }) => {
  return (
    <Container>
      <Header title={"Details"} shouldHideBackButton={true}/>
      <View style={styles.View}>
        <Text>Details!</Text>
      </View>
    </Container>
  );
};


DetailsRender.propTypes = {

};

export default DetailsRender;
