/**
 * Created by coderxuan on 2017/5/15.
 */
import {LoginRequest, VertifyOTPRequest, ModifyPwdRequest} from '../../api/login/LoginRequests'
import {Toast} from 'teaset'
import {utils} from '../../ref'

export function checkOtp(self) {
    if (utils.CheckUtils.isTel(self.state.inputPhoneNum)) {
        return true
    } else {
        Toast.message('请输入正确手机号！')
    }
}

export function checkInput(self) {
    if (!isNull(self.state.inputPwd) && !isNull(self.state.inputPhoneAndEmail)) {
        return true
    } else {
        return false
    }
}

export function checkPhoneAndOtp(self) {
    if (!isNull(self.state.inputPhoneNum) && !isNull(self.state.inputVertify)) {
        return true
    } else {
        return false
    }
}

export function submitOtp(self) {
    if (utils.CheckUtils.isTel(self.state.inputPhoneNum)) {
        let params = {'telephone': self.state.inputPhoneNum, 'otp': self.state.inputVertify};
        new VertifyOTPRequest(params).start(function (data) {
            self.props.navigation.navigate('LoginModify', {tel: self.state.inputPhoneNum});
        })
    } else {
        Toast.message('请输入正确手机号！')
    }
}


/**
 * 登陆接口调用
 * @param self
 */
export async function loginSubmit(self) {
    let username = self.state.inputPhoneAndEmail;
    let password = self.state.inputPwd;
    let params = {'username': username, 'password': password};
    new LoginRequest(params).start(function (data) {
        Toast.message('登陆成功！');
        utils.CommonUtils.resetNavigation(self.props.navigation, 'TabHome');
    })
}


export function checkPwdModify(self) {
    if (!isNull(self.state.inputNewPwd) && !isNull(self.state.inputEnNewPwd) && self.state.inputNewPwd === self.state.inputEnNewPwd) {
        return true
    } else {
        return false
    }
}

/**
 * 修改手机号
 * @param self
 */
export function modifyFinish(self) {
    let params = {newPwd: self.state.inputEnNewPwd, telephone: self.props.navigation.state.params.tel};
    new ModifyPwdRequest(params).start(function (data) {
        Toast.message('修改成功！');
        utils.CommonUtils.resetNavigation(self.props.navigation, 'Login');
    });
}