import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../../Utils';
import ListItem from './index';

describe('ListItem Component', () => {
    
    describe('Checking Proptypes', () => {
        it('Should NOT throw an error', ()=>{
            const props = {
                title: "test title",
                desc: "test desc"
            }
            const propsErr = checkProps(ListItem, props);
            expect(propsErr).toBeUndefined();
        });
    });
    
    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                title: "test title",
                desc: "test desc"
            }
            wrapper = shallow(<ListItem {...props}/>);
        });

        it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        });
    });
    
    describe('Component should NOT render', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                desc: "test desc"
            }
            wrapper = shallow(<ListItem {...props}/>);
        });

        it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        });

        it('Should render a title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(0);
        });

        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'componentDesc');
            expect(desc.length).toBe(0);
        });
    });

})
