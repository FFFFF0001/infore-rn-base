/**
 * Created by InforeXuan on 2017/5/12.
 */
import React, {Component} from 'react';
import {ScrollView, View, Text, Keyboard, StatusBar} from 'react-native';
import {LoginPart} from './LoginPart'
import styles from './LoginStyles'
import {widget} from "../../ref";

const DebugButton = widget.DebugButton;

class LoginScene extends Component {

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow() {
        this.moveKeyboard(this, 'all', 120)
    }

    _keyboardDidHide() {
        this.resetKeyboard(this, 'all')
    }

    constructor(props: Object) {
        super(props)
        this.state = {
            showMima: false,
            inputPhoneAndEmail: '',
            inputPwd: ''
        }
    }

    /**
     * 上移动页面，用于TextInput弹出键盘遮挡表单
     * @param platform
     * @param distance
     */
    moveKeyboard(self, platform: string, distance: number) {
        if (platform === 'all' || platform === 'ios') {
            self.refs.scrollView.scrollTo({y: distance, animated: true});
        }
    }

    /**
     * 重置ScrollView，用于TextInput弹出键盘遮挡表单
     * @param platform
     */
    resetKeyboard(self, platform: string) {
        if (platform === 'all' || platform === 'ios') {
            self.refs.scrollView.scrollTo({y: 0, animated: true});
        }
    }


    render() {
        return (
            <ScrollView ref="scrollView" style={{flex: 1, backgroundColor: 'white'}}>
                <StatusBar
                    translucent={true}
                    backgroundColor="transparent"
                    barStyle="default"/>
                <View style={styles.container}>
                    <Text adjustsFontSizeToFit={false} allowFontScaling={false} style={styles.content}>盈峰项目管理系统</Text>
                    {LoginPart(this)}
                    <DebugButton navigation={this.props.navigation}/>
                </View>
            </ScrollView>
        );
    }
}

export default LoginScene;