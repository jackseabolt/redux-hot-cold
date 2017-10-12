import React from 'react';
import InfoModal from './info-modal'; 
import {Header} from './header';  
import {shallow} from 'enzyme'; 
import TopNav from './top-nav'; 


describe('Header', () => {
    describe('without info modal', () => {
        it('will not display modal', () => {
            const wrapper = shallow(<Header showInfoModal={false} />); 
            expect(wrapper.contains(<InfoModal />)).toEqual(false); 
        });
        it('Renders without crashing', () => {
            shallow(<Header />); 
        }); 
        it('Renders TopNav', () => {
            const wrapper = shallow(<Header />);
            expect(wrapper.contains(<TopNav />)).toEqual(true); 
        });
        it('Render h1 element with text', () => {
            const wrapper = shallow(<Header />);
            expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true); 
        });  
    }); 
    describe('with info modal', () => {
        it('will display modal', () => {
            const wrapper = shallow(<Header showInfoModal={true} />); 
            expect(wrapper.contains(<InfoModal />)).toEqual(true); 
        }); 
    }); 
}); 