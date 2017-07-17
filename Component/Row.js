import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, Alert} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});

class Row extends React.Component {
    static navigationOptions = {
        title: 'List',
    };

    render() {
        console.log(this.props.navigator);
        const {first, last}=this.props;
        return (
            <TouchableHighlight onPress={()=>this.props.navigation.navigate({screen:'DataScreen'})}>
                <View style={styles.container}>
                    <Image
                        style={styles.photo}
                        source={require('./../img/logo.png')}
                    />
                    <Text style={styles.text}>
                        {`${first} ${last}`}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }


}

export default Row;