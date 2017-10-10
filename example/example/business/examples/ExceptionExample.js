/**
 * Created by coderxuan on 2017/6/9.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'teaset'
import {widget, Img, utils} from "../../../app/project/ref";

const ERROR = 'setTimeout(()=>{throw new Error(\'GoError\')},1000);';

class ExceptionExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <widget.TitleBar navigation={this.props.navigation}
                                 title={'异常处理机制'}
                                 leftImage={Img.common.icon_bar_left}
                                 onLeftPress={() => this.props.navigation.goBack()}/>
                <View style={styles.textContent}>
                    <Text style={styles.text}>这里的异常处理机制可以做三方面的处理</Text>
                    <Text style={styles.text}>1.平台捕获异常：网易云捕、腾讯Bugly等</Text>
                    <Text style={styles.text}>2.Android做了CrashHandler，出现异常后通过IO写在本地SDK，方便开发人员查看，如果有平台可以上传到公司平台。</Text>
                    <Text style={styles.text}>3.代码容错，如果出现了脚本错误，希望捕获这种错误，给予用户合理的提示，并采集错误详情帮助后续版本改进。</Text>
                    <Text style={styles.text}>1可以参考具体平台SDK，2的相关代码在Android包下,针对三来处理。</Text>
                    <Text style={styles.error}>{ERROR}</Text>
                </View>
                <Button onPress={() => this.goError()} style={styles.button}>
                    <Text style={styles.btntext}>点击运行上面代码</Text>
                </Button>
                <View style={styles.textContent}>
                    <Text style={styles.error}>运行上述代码并未崩溃，转而是我们自己的处理。具体处理与修改在~/core/utils/ErrorHandler。</Text>
                </View>
            </View>
        )
    }

    goError() {
        setTimeout(() => {
            throw new Error('GoError')
        }, 1000);
    }
}

const styles = utils.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textContent: {
        padding: 10
    },
    text: {
        fontSize: 15,
        color: '#333333',
        letterSpacing: 1
    },
    error: {
        marginTop: 14,
        letterSpacing: 1,
        fontSize: 12,
        color: '#666666'
    },
    button: {
        backgroundColor: '#rgba(238, 169, 91, 0.1)',
        borderColor: '#8a6d3b',
        margin: 5,
    },
    btntext: {
        color: '#8a6d3b',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default ExceptionExample;