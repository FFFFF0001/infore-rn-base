/**
 * Created by coderxuan on 2017/5/6.
 */
import {StackNavigator} from 'react-navigation';

//首页
import IndexScene from '../../project/pages'

//debug
import DebugScene from '../../project/pages/debug'

//tab界面
import TabNavigator from './TabNavigator'

//登录
import LoginScene from '../../project/pages/login'
import VertifyScene from '../../project/pages/login/vertify/VertifyScene'
import ModifyScene from '../../project/pages/login/modify/ModifyScene'

/**
 * Example
 */
//UI组件示例
import TeasetExample from '../../../example/ui/examples/TeasetExample'
import ImageExample from '../../../example/ui/examples/ImageExample'

// 业务组件示例
import TimeExample from '../../../example/business/examples/TimeExample'
import LinkedExample from '../../../example/business/examples/LinkedExample'
import ExceptionExample from '../../../example/business/examples/ExceptionExample'
import PositionExample from '../../../example/business/examples/PositionExample'
import PushyExample from '../../../example/business/examples/PushyExample'
import ReduxExample from '../../../example/business/examples/ReduxExample'

const INDEX = {
    INDEX: {screen: IndexScene}
};

const CommonScene = {
    Debug: {
        screen: DebugScene,
        navigationOptions: {
            header: null
        }
    },
};


const Tab = {
    TabHome: {screen: TabNavigator},
};

const Login = {
    Login: {
        screen: LoginScene,
        navigationOptions: {
            header: null
        }
    },
    LoginVertify: {
        screen: VertifyScene,
        navigationOptions: {
            header: null
        }
    },
    LoginModify: {
        screen: ModifyScene,
        navigationOptions: {
            header: null
        }
    },
};

const UIPages = {
    TeasetExample: {screen: TeasetExample},
    ImageExample: {screen: ImageExample}
};

const BusinessPages = {
    TimeExample: {screen: TimeExample},
    LinkedExample: {screen: LinkedExample},
    ExceptionExample: {screen: ExceptionExample},
    PositionExample: {screen: PositionExample},
    PushyExample: {screen: PushyExample},
    ReduxExample: {screen: ReduxExample}
};

const Navigator = StackNavigator(
    {
        ...INDEX,
        ...CommonScene,
        ...Login,
        ...Tab,
        ...UIPages,
        ...BusinessPages
    }, {
        navigationOptions: {
            header: null,
        }
    }
);
export default Navigator
