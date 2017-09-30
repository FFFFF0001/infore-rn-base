import React, {Component} from 'react';
import {View} from 'react-native';
import {widget, utils} from '../../ref'

class BusinessScene extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <widget.TitleBar
                    navigation={this.props.navigation}
                    title='业务组件'
                />
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

export default BusinessScene;
