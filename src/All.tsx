import React, {Component, ComponentType} from 'react';
import * as _ from "lodash";

type ComponentTypeWithProps<P = any> = [ComponentType<P>, P]

export interface AllProps {
    of: (ComponentTypeWithProps | ComponentType)[]
    props?: object
    children: Function
}

class All extends Component<AllProps> {

    render() {
        const tree: Function = _.reduce(this.props.of, (accumulator: Function, value, index, array) => {
            let C;
            let Cprops = {};
            if(_.isArray(value)){
                [C, Cprops] = value;
            }else{
                C = value
            }

            return (...params) => {
                return <C {...this.props.props} {...Cprops} >
                    {(cRender) => {
                        return accumulator(cRender, ...params)
                    }}
                </C>
            }
        }, this.props.children)
        return tree()
    }
}

export default All;
