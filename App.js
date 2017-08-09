import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Image, StyleSheet, Alert, Linking
} from 'react-native';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {StackNavigator,addNavigationHelpers,NavigationActions} from 'react-navigation';
import ChatScreen from './Component/Form';
import InstagramLogin from './Component/InstagramLogin';
import DataScreen from './Component/DataScreen';
const styles = StyleSheet.create({
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});
const store = createStore(rootReducer, devToolsEnhancer());


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };


    render() {
        const {navigate} = this.props.navigation;
        return (
            <Provider store={store}>
                <View>

                    <Text>Hello, Chat App!</Text>
                    <Button
                        onPress={() => navigate('InstagramLogin',{store})}
                        title="Login to Instagram"
                    />
                </View>
            </Provider>)
    }

}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    InstagramLogin: {screen: InstagramLogin},
    Form: {screen: ChatScreen},
    DataScreen: {screen: DataScreen}

});


AppRegistry.registerComponent('AwesomeProject', () => SimpleApp);