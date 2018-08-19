import React, {Component} from 'react';
import _ from "lodash";



export interface SampleConsumer1Props {
    children: ({value}) => any
    hi?: string
}

class SampleConsumer1 extends Component<SampleConsumer1Props> {
    render() {
        return this.props.children({value: 'sc1'})
    }
}

export default SampleConsumer1;
