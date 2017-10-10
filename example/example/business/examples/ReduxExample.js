/**
 * Created by coderxuan on 2017/6/9.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Label} from 'teaset'
import {widget, Img, utils} from "../../../app/project/ref";
import * as testActions from '../../../app/project/redux/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ReduxExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {saveTestKey} = this.props.testActions;
        let key = this.props.testKeyValue;
        return (
            <View style={styles.container}>
                <widget.TitleBar navigation={this.props.navigation}
                                 title={'Redux测试'}
                                 leftImage={Img.common.icon_bar_left}
                                 onLeftPress={() => this.props.navigation.goBack()}/>
                <View style={styles.textContent}>
                    <Text style={styles.text}>{this.props.testKeyValue}</Text>
                    <Button style={{
                        backgroundColor: '#rgba(238, 169, 91, 0.1)',
                        margin: 8,
                        borderColor: '#8a6d3b'
                    }} onPress={() => {
                        saveTestKey(key + 1);
                    }}>
                        <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='点击使testKey加1'/>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = utils.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textContent: {
        padding: 10
    },
    text: {
        fontSize: 15,
        color: '#333333',
        letterSpacing: 1
    },
});


function mapStateToProps(state) {
    return {
        testKeyValue: state.test.testKey
    }
}

function mapDispatchToProps(dispatch) {
    return {
        testActions: bindActionCreators(testActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);