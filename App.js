/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text ,Card, CardItem} from 'native-base';
import { StockContainer } from './src/components';




export default class App extends Component{
  render() {
    return (
      <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Stock Advisor</Title>
        </Body>
        <Right />
      </Header>
      <Content>
      
        <StockContainer/>
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
