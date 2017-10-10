/**
 * Created by coderxuan on 2017/5/15.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableHighlight
} from 'react-native'

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.isChecked,
        }
    }

    static propTypes = {
        ...View.propTypes,
        onClick: React.PropTypes.func.isRequired,
        onIntercept: React.PropTypes.func,
        isChecked: React.PropTypes.bool
    };

    static defaultProps = {
        isChecked: false,
    };

    _getImg() {
        if (this.state.isChecked) {
            return this.props.checkedImage
        } else {
            return this.props.unCheckedImage
        }
    }

    _genCheckedImage() {
        let source = this._getImg();
        return (
            <Image style={this.props.style} source={source} resizeMode='contain'/>
        )
    }

    onClick() {
        if (!this.state.isChecked) {
            if (this.props.onIntercept && !this.props.onIntercept()) {
                return;
            }
        }
        this.setState({
            isChecked: !this.state.isChecked
        });
        this.props.onClick(this.state.isChecked);
    }

    render() {
        return (
            <TouchableHighlight
                onPress={() => this.onClick()}
                underlayColor='transparent'>
                {this._genCheckedImage()}
            </TouchableHighlight>
        )
    }
}
