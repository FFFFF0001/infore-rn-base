import React, {Component} from 'react';
import {View} from 'react-native';
import {widget, utils} from '../ref';
import {Button, Label} from "teaset";

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
                    title='盈峰移动框架'
                />
                {/*时间工具*/}
                <Button style={{
                    backgroundColor: '#rgba(238, 169, 91, 0.1)',
                    margin: 8,
                    borderColor: '#8a6d3b'
                }} onPress={() => {
                    this.props.navigation.navigate('TabHome')
                }}>
                    <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='点击进入Example'/>
                </Button>
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
