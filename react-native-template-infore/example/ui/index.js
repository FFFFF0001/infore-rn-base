import React, {Component} from 'react';
import {View} from 'react-native';
import {widget, utils} from '../../app/project/ref';
import Example from './examples'

const StyleSheet = utils.StyleSheet;

class UIScene extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <widget.TitleBar
                    navigation={this.props.navigation}
                    title='UI组件'
                />
                <Example
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default UIScene;
