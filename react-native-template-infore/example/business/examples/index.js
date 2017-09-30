/**
 * Created by coderxuan on 2017/6/9.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import {Label, Button} from 'teaset';
import {utils} from "../../../app/project/ref";

class BusinessExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {/*时间工具*/}
                <Button style={{
                    backgroundColor: '#rgba(238, 169, 91, 0.1)',
                    margin: 8,
                    borderColor: '#8a6d3b'
                }} onPress={() => {
                    this.props.navigation.navigate('TimeExample')
                }}>
                    <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='时间工具'/>
                </Button>
                {/*Linked系统功能*/}
                <Button style={{
                    backgroundColor: '#rgba(238, 169, 91, 0.1)',
                    margin: 8,
                    borderColor: '#8a6d3b'
                }} onPress={() => {
                    this.props.navigation.navigate('LinkedExample')
                }}>
                    <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='Linked系统功能'/>
                </Button>
                {/*登录注册OTP验证*/}
                <Button style={{
                    backgroundColor: '#rgba(238, 169, 91, 0.1)',
                    margin: 8,
                    borderColor: '#8a6d3b'
                }} onPress={() => {
                    this.props.navigation.navigate('Login')
                }}>
                    <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='登录流程'/>
                </Button>
                {/*异常处理机制*/}
                <Button style={{
                    backgroundColor: '#rgba(238, 169, 91, 0.1)',
                    margin: 8,
                    borderColor: '#8a6d3b'
                }} onPress={() => {
                    this.props.navigation.navigate('ExceptionExample')
                }}>
                    <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='异常处理机制'/>
                </Button>
                {/*定位*/}
                <Button style={{
                    backgroundColor: '#rgba(238, 169, 91, 0.1)',
                    margin: 8,
                    borderColor: '#8a6d3b'
                }} onPress={() => {
                    this.props.navigation.navigate('PositionExample')
                }}>
                    <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='定位'/>
                </Button>

                {/*热更新*/}
                <Button style={{
                    backgroundColor: '#rgba(238, 169, 91, 0.1)',
                    margin: 8,
                    borderColor: '#8a6d3b'
                }} onPress={() => {
                    this.props.navigation.navigate('PushyExample')
                }}>
                    <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='Pushy热更新'/>
                </Button>
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

export default BusinessExamples;
