/**
 * Created by coderxuan on 2017/6/9.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Label} from 'teaset';
import {widget, Img, utils} from "../../../app/project/ref";

const Geolocation = require('Geolocation');

/**
 * 定位，Reactnative提供了Geolocation API，让我们可以很方便的获取当前的位置信息，或者监听位置变化。
 */
class PositionExample extends Component {

    constructor(props) {
        super(props);
    }

    getLocation() {
        Geolocation.getCurrentPosition(
            location => {
                console.log(location)
                var result = "速度：" + location.coords.speed +
                    "\n经度：" + location.coords.longitude +
                    "\n纬度：" + location.coords.latitude +
                    "\n准确度：" + location.coords.accuracy +
                    "\n行进方向：" + location.coords.heading +
                    "\n海拔：" + location.coords.altitude +
                    "\n海拔准确度：" + location.coords.altitudeAccuracy +
                    "\n时间戳：" + location.timestamp;
                alert(result);
            },
            error => {
                console.log(error)
                alert("获取位置失败：" + error)
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <widget.TitleBar navigation={this.props.navigation}
                                 title={'位置信息'}
                                 leftImage={Img.common.icon_bar_left}
                                 onLeftPress={() => this.props.navigation.goBack()}/>
                <Button style={{
                    backgroundColor: '#rgba(238, 169, 91, 0.1)',
                    margin: 8,
                    borderColor: '#8a6d3b'
                }} onPress={() => {
                    this.getLocation()
                }}>
                    <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='获取位置'/>
                </Button>
            </View>
        )
    }
}

const styles = utils.StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        margin: 15,
        height: 30,
        borderWidth: 1,
        padding: 6,
        borderColor: '#ddd',
        textAlign: 'center'
    },
});

export default PositionExample;