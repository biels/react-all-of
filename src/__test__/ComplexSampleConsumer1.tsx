import React, {Component} from 'react';

export interface ComplexSampleConsumer1RenderProps {
    value: number
}

export interface ComplexSampleConsumer1Props {
    factor: number
    basis: number
    children: (props: ComplexSampleConsumer1RenderProps) => any
}

class ComplexSampleConsumer1 extends Component<ComplexSampleConsumer1Props> {
    render() {
        return this.props.children({value: this.props.basis * this.props.factor})
    }
}

export default ComplexSampleConsumer1;
