/**
 * base
 */
import {config} from '../../app/config/setting'

/**
 * Utils
 */
const StyleSheet = require('../core/utils/StyleSheet');
const DateUtils = require('../core/utils/DateUtils');
const LinkedUtils = require('../core/utils/LinkedUtils');
const CheckUtils = require('../core/utils/CheckUtils');
const CommonUtils = require('../core/utils/CommonUtils');

/**
 * widget
 */
import TitleBar from '../core/widget/TitleBar'
import OverlayContainer from '../core/widget/OverlayContainer'
import PictureOverlay from '../core/widget/PictureOverlay'
import DebugButton from '../core/widget/DebugButton'
import CheckBox from '../core/widget/CheckBox'
import SubmitBtn from '../core/widget/SubmitBtn'

/**
 * ImageRefs
 */
const icon_bar_left = require('./images/icon_bar_left.png');
const icon_maillist = require('./images/icon_maillist.png');
const icon_maillist_selected = require('./images/icon_maillist_selected.png');
const icon_wrong = require('./images/icon_wrong.png');
const icon_eye = require('./images/icon_eye.png');
const icon_invalid = require('./images/icon_invalid.png');


module.exports = ref = {
    base:{
        config
    },
    widget: {
        TitleBar,
        OverlayContainer,
        PictureOverlay,
        DebugButton,
        CheckBox,
        SubmitBtn
    },
    utils: {
        StyleSheet,
        DateUtils,
        LinkedUtils,
        CheckUtils,
        CommonUtils
    },
    Img: {
        common: {
            icon_bar_left,
            icon_maillist,
            icon_maillist_selected,
            icon_wrong,
            icon_eye,
            icon_invalid
        }
    }
};

