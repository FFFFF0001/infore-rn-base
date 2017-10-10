/**
 * Created by coderxuan on 2017/6/9.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Label} from 'teaset';
import {widget, utils, Img} from "../../../app/project/ref";

const {Call, SMS, Email, HTTP} = utils.LinkedUtils;

class LinkedExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <widget.TitleBar navigation={this.props.navigation}
                                 title={'Linked系统功能'}
                                 leftImage={Img.common.icon_bar_left}
                                 onLeftPress={() => this.props.navigation.goBack()}/>
                <View>
                    <Button style={{
                        backgroundColor: '#rgba(238, 169, 91, 0.1)',
                        margin: 8,
                        borderColor: '#8a6d3b'
                    }} onPress={() => {
                        Call(10086)
                    }}>
                        <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='给10086打电话'/>
                    </Button>
                    <Button style={{
                        backgroundColor: '#rgba(238, 169, 91, 0.1)',
                        margin: 8,
                        borderColor: '#8a6d3b'
                    }} onPress={() => {
                        alert('当前IOS系统已经禁止调用短信的scheme的权限')
                    }}>
                        <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}}
                               text='当前IOS系统已经禁止调用短信的scheme的权限'/>
                    </Button>
                    <Button style={{
                        backgroundColor: '#rgba(238, 169, 91, 0.1)',
                        margin: 8,
                        borderColor: '#8a6d3b'
                    }} onPress={() => {
                        Email('x@qq.com')
                    }}>
                        <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='给x@qq.com发邮件'/>
                    </Button>
                    <Button style={{
                        backgroundColor: '#rgba(238, 169, 91, 0.1)',
                        margin: 8,
                        borderColor: '#8a6d3b'
                    }} onPress={() => {
                        HTTP('http://www.baidu.com')
                    }}>
                        <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='系统浏览器打开百度'/>
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
    }
});

export default LinkedExample;