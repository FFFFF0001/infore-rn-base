/**
 * Created by coderxuan on 2017/5/6.
 */
import baseRequest from '../../../../app/core/api/baseRequest'
import Urls from '../Urls'

/**
 * 登录接口
 */
class LoginRequest extends baseRequest {
    requestUrl() {
        return Urls.login.userLogin
    }
}

/**
 * 获取验证码
 */
class GetValidateCodeRequest extends baseRequest  {
    requestUrl() {
        return Urls.login.getValidateCode
    }
}
/**
 * 验证OTP
 */
class VertifyOTPRequest extends baseRequest  {
    requestUrl() {
        return Urls.login.verifyOtp
    }
}

/**
 * 修改密码
 */
class ModifyPwdRequest extends baseRequest {
    requestUrl() {
        return Urls.login.modifyPwd
    }
}


export {LoginRequest, GetValidateCodeRequest, VertifyOTPRequest, ModifyPwdRequest};