import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import AppleHeader from 'react-native-apple-header';
import Card from 'react-native-paper';
import Carousel from 'react-bootstrap/Carousel';

import CustomButton from './CustomButton';

export default function ScoreCard(props) {
    
    return (
      <FlatList 
          data={props.players}
          renderItem={( { item } ) => (
                    <Text>{item.name}</Text>
                    // <Card>
                    //     <Card.Title title="Card Title" subtitle="Card Subtitle"/>
                    //     <Card.Content>
                    //     <Title style={styles.text}>{item.name}</Title>
                    //     <Paragraph>Card content</Paragraph>
                    //     </Card.Content>
                    //     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    //     <Card.Actions>
                    //     <Button>Cancel</Button>
                    //     <Button>Ok</Button>
                    //     </Card.Actions>
                    // </Card>
            )}
            
            horizontal={true}
      />
    );
  }


  const styles = StyleSheet.create({
    text: {
        color: "white"
    }
})