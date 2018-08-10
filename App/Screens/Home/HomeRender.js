import React, {Component} from "react";
import { View, TouchableOpacity } from 'react-native'
import { Container, Text, Icon } from "native-base";
import Header from '../../Components/CustomHeader'
import styles from './styles'

const HomeRender = ({ goToScreen }) => {
  return (
    <Container>
      <Header  
        title={'Home'}
        shouldHideBackButton={true} />
      <View style={styles.View}>
        <Text>Home Screen!</Text>
      </View>
    </Container>
  );
};


HomeRender.propTypes = {

};

export default HomeRender;
