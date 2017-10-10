import {Platform, AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';
import {GLOB} from '../../config/setting'

export function initGlobal() {
    return new Promise(function (resolve, reject) {
        console.disableYellowBox = true;
        _mixinProptypes();
        let s = new Storage({
            // 最大容量，默认值1000条数据循环存储
            size: 1000,
            // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
            // 如果不指定则数据只会保存在内存中，重启后即丢失
            storageBackend: AsyncStorage,
            // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
            defaultExpires: null,
            // 读写时在内存中缓存数据。默认启用。
            enableCache: true,
        });
        (function (storage) {
            // 封装log
            global.log = function (msg, tag) {
                if (__DEV__) {
                    tag ? console.log(msg, tag) : console.log(msg);
                }
            };
            global.isNull = function (str) {
                if (str === null || str === undefined || str === '' || str === 'null') {
                    return true;
                }
                return false;
            };
            // 系统是iOS
            global._IOS_ = (Platform.OS === 'ios');
            // 系统是安卓
            global._Android_ = (Platform.OS === 'android');
            global.storage = storage;
            Object.assign(global, GLOB);
        })(s);
        resolve(global);
    });
}

function _mixinProptypes() {
    Date.prototype.dateFormat = function (format) {
        let o = {
            "M+": this.getMonth() + 1, //month
            "d+": this.getDate(), //day
            "h+": this.getHours(), //hour
            "m+": this.getMinutes(), //minute
            "s+": this.getSeconds(), //second
            "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
            "S": this.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };
}
