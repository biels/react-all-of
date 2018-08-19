import React, {Component} from 'react';
import _ from "lodash";



export interface SampleConsumer2RenderProps {
    other: string
}
export interface SampleConsumer2Props {
    children: (props: SampleConsumer2RenderProps) => any
    prop1: number
}

class SampleConsumer2 extends Component<SampleConsumer2Props> {
    render() {
        return this.props.children({other: 'sc2'})
    }
}

export default SampleConsumer2;
