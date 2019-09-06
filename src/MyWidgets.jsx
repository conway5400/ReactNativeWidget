import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";

import { TrackPlayer } from "react-native-track-player";


export class MyWidgets extends Component {
    render() {
        alert(TrackPlayer);
        
        return <HelloWorldSample sampleText={this.props.sampleText} style={this.props.style} />;
    }
}
