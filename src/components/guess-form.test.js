import React from 'react';
import {GuessForm}  from './guess-form';
import {shallow, mount} from 'enzyme'; 
import {makeGuess} from '../actions'


describe('GuessForm', () => {
    it('should render something', () => {
        shallow(<GuessForm />);
    })

    it('should render form tag', () => {
        const wrapper = shallow(<GuessForm/>)
         expect(wrapper.contains(<input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>)).toEqual(true);
    })

    it('should run the onSubmit event', () => {
        const value = "50"
        const spy = jest.fn()
        const wrapper = mount(<GuessForm dispatch={spy}/>)
        wrapper.find('#userGuess').instance().value =value
        const button = wrapper.find('#guessButton');
        button.simulate("submit")
        expect(spy).toHaveBeenCalledWith(makeGuess(value))
    })

    
})