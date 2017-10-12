import React from 'react';
import {TopNav}  from './top-nav';
import {shallow, mount} from 'enzyme'; 
import {newGame, NEW_GAME, toggleInfoModal} from '../actions'

describe('InfoModal', () => {
    it('should render something', () => {
        shallow(<TopNav />);
    })

    it('should render an anchor with its properties and text', () => {
        const wrapper = shallow(<TopNav/>)
        expect(wrapper.containsMatchingElement(<a className="what">What?</a>)).toEqual(true)
    })

    it('should render an anchor with its properties and text', () => {
        const wrapper = shallow(<TopNav/>)
        expect(wrapper.containsMatchingElement(<a className="new">+ New Game</a>)).toEqual(true)
    })

    it('call the toggleInfoModal method when the What? text is clicked', () => {
        const spy = jest.fn()
        const wrapper = mount(<TopNav dispatch={spy}/>)
        const button = wrapper.find('.what');
        button.simulate('click')
        expect(spy).toHaveBeenCalledWith(toggleInfoModal())
    })

    it('call the newGame method when the + New Game text is clicked', () => {
        const spy = jest.fn()
        const wrapper = mount(<TopNav dispatch={spy}/>)
        const button = wrapper.find('.new');
        button.simulate('click')
        expect(spy).toHaveBeenCalled()
        expect(spy.mock.calls[0][0].type).toEqual(NEW_GAME)
        console.log(spy.mock.calls)        
    })
})