import React from 'react';
import {InfoModal}  from './info-modal';
import {shallow, mount} from 'enzyme'; 
import {toggleInfoModal} from '../actions'

describe('InfoModal', () => {
    it('should render something', () => {
        shallow(<InfoModal />);
    })

    it('should render with a div with classname overlay', () => {
        const wrapper = shallow(<InfoModal/>)
        expect(wrapper.hasClass('overlay')).toEqual(true)
    })

    it('should hide the info modal onClick event', () => {
        const spy = jest.fn()
        const wrapper = mount(<InfoModal dispatch={spy}/>);
        const button = wrapper.find('.close');
        button.simulate("click")
        expect(spy).toHaveBeenCalledWith(toggleInfoModal())
    })
})