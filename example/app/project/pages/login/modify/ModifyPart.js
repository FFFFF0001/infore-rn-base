/**
 * Created by coderxuan on 2017/5/15.
 */
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from '../LoginStyles'
import {checkPwdModify, modifyFinish} from '../LoginFunc'
import {widget,Img} from '../../../ref'
export function ModifyPart(self) {
    return (
        <View>
            <View>
                <View style={[{marginTop: 31}, styles.inputContainer]}>
                    <TextInput
                        value={self.state.inputNewPwd}
                        onChangeText={(text) => {
                            text = text.replace('.', '');
                            self.setState({inputNewPwd: text});
                        }}
                        style={styles.input}
                        placeholder="输入新密码"
                        placeholderTextColor="#d2d2d2"
                        underlineColorAndroid='transparent'
                        secureTextEntry={!self.state.showNewMima}
                    />
                    <widget.CheckBox
                        style={styles.inputEndIcon}
                        checkedImage={Img.common.icon_eye}
                        unCheckedImage={Img.common.icon_invalid}
                        onClick={(check) => self.setState({showNewMima: !check})}
                        isChecked={false}
                    />
                </View>
                <View style={styles.line}/>
            </View>
            <View>
                <View style={[{marginTop: 10.5}, styles.inputContainer]}>
                    <TextInput
                        value={self.state.inputEnNewPwd}
                        onChangeText={(text) => {
                            text = text.replace('.', '');
                            self.setState({inputEnNewPwd: text});
                        }}
                        style={styles.input}
                        placeholder="确认新密码"
                        placeholderTextColor="#d2d2d2"
                        underlineColorAndroid='transparent'
                        secureTextEntry={!self.state.showConfirmMima}
                    />
                    <widget.CheckBox
                        checkedImage={Img.common.icon_eye}
                        unCheckedImage={Img.common.icon_invalid}
                        style={styles.inputEndIcon}
                        onClick={(check) => self.setState({showConfirmMima: !check})}
                        isChecked={false}
                    />
                </View>
                <View style={styles.line}/>
            </View>
            <widget.SubmitBtn
                style={{marginTop: 40.5}}
                text={'确认修改'}
                onPress={() => modifyFinish(self)}
                check={() => checkPwdModify(self)}/>

        </View>
    )
}