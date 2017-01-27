import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View, Image } from 'react-native';

let imgBasicPath = 'http://baba.olmarket.co.uk/cms/uploads/';

function getProducts() {
    return fetch('http://baba.olmarket.co.uk/cms/products',  {
        method: 'GET',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'token': 'RAE6W1NUirZ5FRhcXU86uP80iA8FSNUtsv8dEfXK'
        }
    });
}

class item extends Component {
    constructor(props) {
      super(props);
      
    }

    render() {
        return (<View style={{flex: 1, justifyContent: 'flex-start', flexDirection: 'column'}}>
                <Image source={{uri: imgBasicPath + this.props.product.pics}} style={{flex: 1, width: 150}}/>
                <Text style={{flex: 1}}>{this.props.product.title}</Text>
        </View>);
    }
}


class productList extends Component {
    constructor(props) {
      super(props);
      
    }

    render() {
        // let items = this.props.list.map((v) => {
        //     return <item product={v}></item>;
        //     return <Text>1</Text>
        // });

        return (<View style={{flex:1, justifyContent:'flex-start', flexDirection: 'row', alignItems: 'stretch'}}>
            <Text>hello 2</Text>
        </View>); 
    }
}


class ListViewBasics extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    
    this.state = {
        products: []
    };
  }

  componentDidMount() {
      getProducts()
      .then((response) => response.json())
      .then((responseJson) => {
          console.log('responseJson:', responseJson);
          this.setState({products: responseJson.products});
      })
      .catch((error) => {
          console.log('error', error);
      });
  }


  render() {
    return (
      <View style={{flex: 1, paddingTop: 22, justifyContent: 'flex-start'}}>
          <Text>Hello</Text>
          <productList></productList>
      </View>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('reactNativeTest', () => ListViewBasics);