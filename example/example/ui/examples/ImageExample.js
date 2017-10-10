/**
 * Created by InforeXuan on 2017/5/23.
 */
import React, {Component} from 'react'
import {
    View, Text, ScrollView, Image, TouchableWithoutFeedback
} from "react-native"
import {Button} from 'teaset'
import ImagePicker from 'react-native-image-crop-picker';
import {widget, utils, Img} from '../../../app/project/ref';

/**
 * 图片功能
 */
class ImageExample extends Component {
    constructor() {
        super();
        this.state = {
            clickImageUri: null,
            image: null,
            images: null
        };
    }

    _onImageClick(image) {
        if (!isNull(image)) {
            this.setState({
                clickImageUri: image.uri
            });
            this.po.showModal();
        }
    }

    pickSingleWithCamera(cropping) {
        ImagePicker.openCamera({
            cropping: cropping,
            width: 500,
            height: 500,
        }).then(image => {
            console.log('received image', image);
            this.setState({
                image: {uri: image.path, width: image.width, height: image.height},
                images: null
            });
        }).catch(e => console.log(e));
    }

    pickSingleBase64(cropit) {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: cropit,
            includeBase64: true
        }).then(image => {
            console.log('received base64 image');
            this.setState({
                image: {uri: `data:${image.mime};base64,` + image.data, width: image.width, height: image.height},
                images: null
            });
        }).catch(e => console.log(e));
    }

    cropLast() {
        if (!this.state.image) {
            return console.log('No image', 'Before open cropping only, please select image');
        }
        ImagePicker.openCropper({
            path: this.state.image.uri,
            width: 200,
            height: 200
        }).then(image => {
            console.log('received cropped image', image);
            this.setState({
                image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
                images: null
            });
        }).catch(e => {
            console.log(e);
        });
    }

    pickSingle(cropit, circular = false) {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: cropit,
            cropperCircleOverlay: circular,
            compressImageMaxWidth: 640,
            compressImageMaxHeight: 480,
            compressImageQuality: 0.5,
            compressVideoPreset: 'MediumQuality',
        }).then(image => {
            console.log('received image', image);
            this.setState({
                image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
                images: null
            });
        }).catch(e => {
            console.log(e);
        });
    }

    pickMultiple() {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false
        }).then(images => {
            this.setState({
                image: null,
                images: images.map(i => {
                    console.log('received image', i);
                    return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
                })
            });
        }).catch(e => console.log(e));
    }

    scaledHeight(oldW, oldH, newW) {
        return (oldH / oldW) * newW;
    }

    renderImage(image) {
        return <TouchableWithoutFeedback onPress={() => this._onImageClick(image)}>
            <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image}/>
        </TouchableWithoutFeedback>

    }

    renderAsset(image) {
        return this.renderImage(image);
    }


    render() {
        return (<View style={styles.container}>
            <widget.TitleBar
                leftImage={Img.common.icon_bar_left}
                onLeftPress={() => this.props.navigation.goBack()}
                navigation={this.props.navigation}
                title='图片'
            />
            <ScrollView>
                {this.state.image ? this.renderAsset(this.state.image) : null}
                {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
            </ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <Button onPress={() => this.pickSingleWithCamera(false)} style={styles.button}>
                    <Text style={styles.text}>拍照</Text>
                </Button>
                <Button onPress={() => this.pickSingleWithCamera(true)} style={styles.button}>
                    <Text style={styles.text}>拍照后裁剪</Text>
                </Button>
                <Button onPress={() => this.pickSingle(false)} style={styles.button}>
                    <Text style={styles.text}>选择单张图片</Text>
                </Button>
                <Button onPress={() => this.cropLast()} style={styles.button}>
                    <Text style={styles.text}>裁剪最后一张图片</Text>
                </Button>
                <Button onPress={() => this.pickSingleBase64(false)} style={styles.button}>
                    <Text style={styles.text}>选择单张图片并返回Base64编解码</Text>
                </Button>
                <Button onPress={() => this.pickSingle(true)} style={styles.button}>
                    <Text style={styles.text}>选择单张图片并裁剪</Text>
                </Button>
                <Button onPress={() => this.pickSingle(true, true)} style={styles.button}>
                    <Text style={styles.text}>选择单张图片并圆形裁剪</Text>
                </Button>
                <Button onPress={this.pickMultiple.bind(this)} style={styles.button}>
                    <Text style={styles.text}>选择多张图片</Text>
                </Button>
                <Button onPress={() => this.props.navigation.navigate('NinePicExample')} style={styles.button}>
                    <Text style={styles.text}>九宫格上传</Text>
                </Button>
            </View>
            <widget.PictureOverlay
                ref={(po) => {
                    this.po = po
                }}
                url={this.state.clickImageUri}
            />
        </View>);
    }
}

// define your styles
export const styles = utils.StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: '#rgba(238, 169, 91, 0.1)',
        borderColor: '#8a6d3b',
        margin: 5,
    },
    text: {
        color: '#8a6d3b',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default ImageExample;
