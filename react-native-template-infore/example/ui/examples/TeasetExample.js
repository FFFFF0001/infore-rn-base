/**
 * Created by InforeXuan on 2017/9/24.
 */
import React, {Component} from 'react';
import {TeaNavigator} from 'teaset';
import TeasetExampleHome from 'teaset/example/views/Home';
import {View} from "react-native";
import {widget, utils, Img} from '../../../app/project/ref';

class Teaset extends Component {
    render() {
        return (
            <View style={styles.container}>
                <widget.TitleBar
                    leftImage={Img.common.icon_bar_left}
                    onLeftPress={() => this.props.navigation.goBack()}
                    navigation={this.props.navigation}
                    title='Teaset'
                />
                <TeaNavigator rootView={<TeasetExampleHome/>}/>
            </View>
        );
    }
}

const styles = utils.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default Teaset;
