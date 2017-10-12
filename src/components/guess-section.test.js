import React from 'react';
import {GuessSection}  from './guess-section';
import {shallow} from 'enzyme'; 
import GuessForm from './guess-form'

describe('GuessSection', () => {
    it('should render something', () => {
        shallow(<GuessSection />);
    })

    it('should render h2 element with props being passed in', () => {
        const testProp = 'test feedback'
        const wrapper = shallow(<GuessSection feedback = {testProp}/>);
        expect(wrapper.contains(<h2 id="feedback">{testProp}</h2>))
    })

    it('should render GuessForm component', () => {
        const wrapper = shallow(<GuessSection />)
        expect(wrapper.contains(<GuessForm/>)).toEqual(true)
    })
})

