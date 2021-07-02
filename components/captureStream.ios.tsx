import { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Button, NativeModules, Alert } from 'react-native';
import { mediaDevices, RTCView, MediaStream } from "react-native-webrtc";

import React from 'react';
// const { CalendarModuleFoo } = NativeModules;


export class CaptureStream extends Component {
    state = { streamUrl: null };
    videoRef: any;
    TJ: any;
    constructor(props: any){
      super(props);
    //   this.videoRef = React.createRef();
      
      console.log("----",NativeModules);
      console.log("hi")
      console.log("hi-----")
    //   this.TJ.testMethod("test", "123");
      alert();
    }

    turnOn = () => {
        alert();
        NativeModules.RNHello.createCalendarEvent("test", "jai");
      }
    
  captureStream = async () => {
      alert("capturing streams");
      try {
        let stream: MediaStream = await mediaDevices.getUserMedia({ audio: true, video: true }) as MediaStream;
        console.log("stre", stream);
        this.setState({ streamUrl : stream });
        // this.videoRef.current.srcObject = stream;
        console.log("----->>>>>", this.state.streamUrl.toURL());
        /* use the stream */
      } catch(err) {
        /* handle the error */
        console.error("err", err)
      }
    
  }

  render(){
    return (
      <ScrollView>
        <View>
          <Text>From capture stream</Text>
        </View>
        <Button
          onPress={this.captureStream}
          title= "hi"
        />
        {/* <Button
        onPress={this.turnOn}
       title="Turn ON "
       color="#FF6347" /> */}
        <RTCView
            streamURL={this.state.streamUrl?.toURL()} style={{width: 300, height: 300, alignSelf: 'center'}}
             />
        <View>
        <Text>hi from mobile</Text> 
        </View>
        
        
      </ScrollView>
      
    );
  }
}