/**
 * Created by coderxuan on 2017/6/9.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Label} from 'teaset'
import {widget, Img, utils} from "../../../app/project/ref";

class PushyExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <widget.TitleBar navigation={this.props.navigation}
                                 title={'热更新方案推荐pushy'}
                                 leftImage={Img.common.icon_bar_left}
                                 onLeftPress={() => this.props.navigation.goBack()}/>
                <View style={styles.textContent}>
                    <Text style={styles.text}>RN的热更新推荐使用中文网的Pushy，这里自己引用，给个链接过去好了。</Text>
                    <Button style={{
                        backgroundColor: '#rgba(238, 169, 91, 0.1)',
                        margin: 8,
                        borderColor: '#8a6d3b'
                    }} onPress={() => {
                        utils.LinkedUtils.HTTP('https://github.com/reactnativecn/react-native-pushy/blob/master/docs/guide.md')
                    }}>
                        <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='热更新直通车'/>
                    </Button>
                </View>
            </View>
        )
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
});

export default PushyExample;