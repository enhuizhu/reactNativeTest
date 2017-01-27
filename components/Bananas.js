import React, {Component} from 'react';
import { AppRegistry, Image } from 'ract-native';

class Bananas extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let pic = {
            uri: this.props.src
        };

        return (
            <Image source={pic} style={{width: 193, height: 110}}/>
        );
    }
}

export default Bananas;
