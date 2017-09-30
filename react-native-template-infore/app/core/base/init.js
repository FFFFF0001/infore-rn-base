import {
    AppRegistry
} from 'react-native';

import entry from '../../config/entry'
import Infore from './infore'
import {config} from '../../config/setting'
import {initGlobal} from "./initGlobal"
import {ErrorHandler} from "../utils"

export function initInfore(Infore: Class) {
    Infore.prototype._launchApp = function (options?: Object) {
        const {$AppProjectName} = options;
        (async () => {
            await initGlobal();
            // 进行异常处理(仅当release时有效)
            ErrorHandler();
            AppRegistry.registerComponent($AppProjectName, () => entry);
        })();
    }
}

const launcher = (function (options) {
    new Infore(options);
})(config);

export default launcher;
