import React, {
    Component
} from 'react'
import App from './app'

class RootScene extends Component {
    constructor(props: Object) {
        super(props);
    }

    render() {
        return (
            <App/>
        )
    }
}

export default RootScene