import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
// import { mediaDevices, RTCView, MediaStream } from "react-native-webrtc";
import { CaptureStream } from "./components/captureStream";

export default class App extends React.Component {
  state = { stream: "" };
  
  test(){
    console.log("yes");
  }

  // captureStream(){
    // mediaDevices.getUserMedia({
    //   audio: true, video: true,
    // }).then((stream: any) => {
    //   console.log('Stream found');
    //   this.setState({ stream: stream.toURL()})
    // }).catch(error => {
    //   console.error('Stream not found: ', error);
    // });
  // }

  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
        <CaptureStream />
      </ScrollView>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
