import React, { Component } from 'react';
import { Container, Header,Body,Title, Content, Tab, Tabs,Left,Right } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

export default class Tabscreens extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left/>
          <Body>
            <Title>NewsApp</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="News">
            <Tab1 />
          </Tab>
          <Tab heading="Jobs">
            <Tab2 />
          </Tab>
          <Tab heading="About us">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}