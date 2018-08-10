import React, {Component} from "react";
import {View} from 'react-native'
import { Container, Text } from "native-base";
import Header from '../../Components/CustomHeader'
import styles from './styles'

const ProfileRender = ({ goToScreen }) => {
  return (
    <Container>
      <Header title={"Profile"} shouldHideBackButton={true}/>
      <View style={styles.View}>
        <Text>Profile!</Text>
      </View>
    </Container>
  );
};


ProfileRender.propTypes = {

};

export default ProfileRender;
