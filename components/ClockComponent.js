import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ClockCounter extends Component{
    constructor(props){
        super(props);
        this.state = { seconds: props.t}
        this.setPlaying = props.setPlaying
    }
    componentDidMount (){
        this.setPlaying(true);
        this.interval = setInterval(
            () => {
            this.setState({
                seconds: this.state.seconds - 1
            })
        }, 1000);
    }
    componentDidUpdate(){
        if(this.state.seconds === 0){ 
          clearInterval(this.interval);
          this.setPlaying(false);
        }
      }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render () {
        return (
          <View >
                <Text style ={{textAlignVertical: "center",textAlign: "center",
                color: "white",
                fontWeight: 'bold',
                fontSize: 24,
                marginTop: 0,
                width: "100%", }}
                >{this.state.seconds} sec.</Text>
            </View>
        )
    }
}