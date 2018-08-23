import {render, shallow} from "enzyme";
import * as renderer from 'react-test-renderer';
import * as React from "react";
import {ComponentType} from "react";
import SampleConsumer1 from "./__test__/SampleConsumer1";
import SampleConsumer2 from "./__test__/SampleConsumer2";
import ComplexSampleConsumer1 from "./__test__/ComplexSampleConsumer1";
import {All} from "./All";

describe('MultiConsumer', function () {
    it('works with 1 component that takes no props', function () {
        const element = (
            <All
                of={[
                    [SampleConsumer1, {}],
                ]}
            >
                {(sc1) => {
                    expect(sc1).toEqual({value: 'sc1'})
                    return null
                }}
            </All>
        );
        const rendered = shallow(element)
    });
    it('works with 2 components that take no props', function () {
        const element = (
            <All
                of={[
                    [SampleConsumer1, {}],
                    [SampleConsumer2, {}],
                ]}
            >
                {(sc1, sc2) => {
                    expect(sc1).toEqual({value: 'sc1'})
                    expect(sc2).toEqual({other: 'sc2'})
                    return null
                }}
            </All>
        );
        const rendered = render(element)
    });
    it('works with 2 components', function () {
        const element = (
            <All
                of={[SampleConsumer1, SampleConsumer2]}
            >
                {(sc1, sc2) => {
                    expect(sc1).toEqual({value: 'sc1'})
                    expect(sc2).toEqual({other: 'sc2'})
                    return null
                }}
            </All>
        );
        const rendered = render(element)
    });
    it('works with 5 components', function () {
        const element = (
            <All
                of={[SampleConsumer1, SampleConsumer2, SampleConsumer2, SampleConsumer1, SampleConsumer1]}
            >
                {(sc1, sc2, sc3, sc4, sc5) => {
                    expect(sc1).toEqual({value: 'sc1'})
                    expect(sc2).toEqual({other: 'sc2'})
                    expect(sc3).toEqual({other: 'sc2'})
                    expect(sc4).toEqual({value: 'sc1'})
                    expect(sc5).toEqual({value: 'sc1'})
                    return null
                }}
            </All>
        );
        const rendered = render(element)
    });
    it('works with 1 component that takes inlined props', function () {
        const element = (
            <All
                of={[
                    [ComplexSampleConsumer1, {basis: 2, factor: 3}],
                ]}
            >
                {(sc1) => {
                    expect(sc1).toEqual({value: 2 * 3})
                    return null
                }}
            </All>
        );
        const rendered = render(element)
    });
    it('works with 1 component that takes inlined and global props', function () {
        const element = (
            <All
                of={[
                    [ComplexSampleConsumer1, {basis: 2}],
                ]}
                props={{factor: 4, basis: 3}}
            >
                {(sc1) => {
                    console.log('sc1', sc1);
                    expect(sc1).toEqual({value: 2 * 4})
                    return null
                }}
            </All>
        );
        const rendered = renderer.create(element)
    });
    it('works with of using mixed notation', function () {
        const element = (
            <All
                of={[
                    [ComplexSampleConsumer1, {basis: 2, factor: 2}],
                    SampleConsumer1,
                    SampleConsumer2,
                ]}
            >
                {(sc1, sc2, sc3) => {
                    expect(sc1).toEqual({value: 2 * 2})
                    expect(sc2).toEqual({value: 'sc1'})
                    expect(sc3).toEqual({other: 'sc2'})
                    return null
                }}
            </All>
        );
        const rendered = renderer.create(element)
    });

});
