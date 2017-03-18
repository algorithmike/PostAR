import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';
import AppHeader from './components/AppHeader';

export default class App extends Component {
  render() {
    return (
      <Container>
        <AppHeader />
      </Container>
    );
  }
}