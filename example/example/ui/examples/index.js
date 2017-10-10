/**
 * Created by coderxuan on 2017/6/9.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import {Label, Button} from 'teaset';
import {utils} from '../../../app/project/ref';

class UIExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    {/*teaset*/}
                    <Button style={{
                        backgroundColor: '#rgba(238, 169, 91, 0.1)',
                        margin: 8,
                        borderColor: '#8a6d3b'
                    }} onPress={() => {
                        this.props.navigation.navigate('TeasetExample')
                    }}>
                        <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='Teaset组件库'/>
                    </Button>

                    {/*图片上传，裁剪，九宫图，点击查看大图*/}
                    <Button style={{
                        backgroundColor: '#rgba(238, 169, 91, 0.1)',
                        margin: 8,
                        borderColor: '#8a6d3b'
                    }} onPress={() => {
                        this.props.navigation.navigate('ImageExample')
                    }}>
                        <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='图片功能'/>
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
    }
});

export default UIExamples;
