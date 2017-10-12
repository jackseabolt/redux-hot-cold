import React from 'react';
import {GuessList}  from './guess-list';
import {shallow, mount} from 'enzyme'; 


describe('GuessList', () => {
    it('should render something', () => {
        const testGuesses = []
        shallow(<GuessList guesses={testGuesses}/>);
    })

    it('should render wrapper of unordered list with className guessBox', () => {
        const testGuesses = []
        const wrapper = shallow(<GuessList guesses={testGuesses}/>);
        expect(wrapper.hasClass('guessBox')).toEqual(true)
    })

    it('should render guess to guesses array', () => {
        const testGuesses = ['5']
        const wrapper = shallow(<GuessList guesses={testGuesses}/>);
        expect(wrapper.contains(<li key={0}>{"5"}</li>))
    })
})