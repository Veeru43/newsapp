import React, { Component } from 'react';
import { Container, Card, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base'


export default class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return(
        <Card >
          <List >
            <ListItem thumbnail>
              <Body>
                <Text numberOfLines={2}>{this.data.title}</Text>
                <Text note numberOfLines={3}>{this.data.description}</Text>
              </Body>
              <Right>
              <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://i.ibb.co/cNKgq1p/srkrcollege.jpg'}}/>
              </Right>
            </ListItem>
          </List>
        </Card>
        )
    }
}