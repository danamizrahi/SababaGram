import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Image,StyleSheet
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ChatScreen from './Component/Form';
import List from './Component/ListScreen';
import DataScreen from './Component/DataScreen';

const styles = StyleSheet.create({
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>

                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('ListView')}
                    title="Chat with Lucy"
                />
            </View>)
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    ListView: {screen: List},
    Form: {screen: ChatScreen},
    DataScreen: {screen: DataScreen}

});

AppRegistry.registerComponent('AwesomeProject', () => SimpleApp);