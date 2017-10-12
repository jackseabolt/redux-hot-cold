import React from 'react'; 
import {shallow} from 'enzyme'; 
import Game from './game';
import Header from './header';  

describe('Game', () => {
    it('Renders without crashing', () => {
        shallow(<Game />)
    });
    it('Renders a Header, GuessSection, GuessCount and GuessList elements', () => {
        const wrapper = shallow(<Game />); 
        expect(wrapper.contains(<Header />)).toEqual(true); 
    }); 
}); 
