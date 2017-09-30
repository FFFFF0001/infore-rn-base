/**
 * Created by coderxuan on 2017/5/6.
 */
import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {StyleSheet} from "../utils";

class TabBarItem extends Component {

    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage;
        return (
            <View>
                <Image
                    resizeMode={'contain'}
                    source={this.props.focused
                        ? selectedImage
                        : this.props.normalImage}
                    style={styles.image}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 26,
        height: 24
    }
});

export default TabBarItem
