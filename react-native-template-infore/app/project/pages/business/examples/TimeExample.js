/**
 * Created by coderxuan on 2017/6/9.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import {ListRow} from 'teaset';

import {widget, utils, Image} from "../../../ref";

class TimeExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formatTime: new Date().dateFormat("yyyy-MM-dd hh:mm:ss"),
            formatTime2: new Date().dateFormat("yyyy年MM月dd"),
            specificTime: utils.DateUtils.time2Specific(1500060000000),
            dayMinus: utils.DateUtils.dayMinus('2017-06-27', '2017-08-15') + '天',
        }
    }

    componentWillMount() {
        let self = this;
        this.intervalFormatTime = setInterval(() => {
            self.setState({
                formatTime: new Date().dateFormat("yyyy-MM-dd hh:mm:ss"),
                formatTime2: new Date().dateFormat("yyyy年MM月dd")
            })
        }, 1000);
    }

    componentWillUnmount() {
        if (this.intervalFormatTime) {
            clearInterval(this.intervalFormatTime);
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <widget.TitleBar navigation={this.props.navigation}
                                 title={'时间组件'}
                                 leftImage={Image.common.icon_bar_left}
                                 onLeftPress={() => this.props.navigation.goBack()}/>
                <View>
                    <ListRow title='yyyy-MM-dd hh:mm:ss' detail={this.state.formatTime}/>
                    <ListRow title='yyyy年MM月dd' detail={this.state.formatTime2}/>
                    <ListRow title='具体时间戳（1500060000000）转格式时间' detail={this.state.specificTime}/>
                    <ListRow title='具体时间戳转格式时间' detail={this.state.specificTime}/>
                    <ListRow title='查看20170627-20170815之间的天数' detail={this.state.dayMinus}/>
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

export default TimeExample;
