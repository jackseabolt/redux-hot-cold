import React from 'react';
import {GuessCount}  from './guess-count';
import {shallow} from 'enzyme'; 

describe('GuessCount', () => { 
    it('should render something', () => {
        shallow(<GuessCount count = {10}/>)
    }) 

    it('should render a paragraph tag with props passed in', () => {
        const wrapper = shallow(<GuessCount count = {10} />);
        expect(wrapper.contains(<p>Guess #<span id="count">{10}</span>!</p>)).toEqual(true)
    })
})


