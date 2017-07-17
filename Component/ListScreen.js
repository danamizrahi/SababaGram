import React from 'react';
import { View, ListView, StyleSheet, Text,TouchableHighlight } from 'react-native';
import Row from '../Component/Row';

const styles = StyleSheet.create({
    container: {
        flex: 2,
        marginTop: 20,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});

export default class ListViewDemo extends React.Component {
    static navigationOptions = {
        title: 'List',
    };

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{first:'dana',last:'mizr'},
                {first:'dana',last:'mizr'},
                {first:'dana',last:'mizr'},
                {first:'dana',last:'mizr'},
                {first:'dana',last:'mizr'},
                {first:'dana',last:'mizr'},
                {first:'dana',last:'mizr'},
                {first:'dana',last:'mizr'},
                {first:'dana',last:'mizr'}]),
        };
    }
    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(data) => <Row {...data}/>}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                renderHeader={()=><Text>details</Text>}
            />
        );
    }
}
