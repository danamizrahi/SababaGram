import React from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';

class DataScreen extends React.Component{

    render(){
        const {navigation}=this.props;
        return(
            <View>
                <text>{navigation.state.param.name} {navigation.state.param.last}</text>
            </View>
        )
    }
}

export default DataScreen;