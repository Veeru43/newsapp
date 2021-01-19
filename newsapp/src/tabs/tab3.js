import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class Tab3 extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.ibb.co/cNKgq1p/srkrcollege.jpg'}} />
                <Body>
                  <Text>NewsApp</Text>
                  <Text note>Designer and Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://i.ibb.co/27ry6tH/ap.jpg'}} style={{height: 300, width: 300, flex: 1,borderRadius: 10}} />
                <Text>
                GraphicDesigner:RajaSaran
                </Text>
                <Text>
                    Developer:Veerababu
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}