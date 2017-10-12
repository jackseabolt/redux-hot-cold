import reducer from './reducer'; 
import {toggleInfoModal, makeGuess, newGame} from './actions';

describe('reducer', () => {
    it('Should handle makeGuess action', () => {
        const state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100),
            showInfoModal: false
        };
        const guess = state.correctAnswer; 
        const action = makeGuess(guess); 
        const newState = reducer(state, action); 
        expect(newState).toEqual({ 
            guesses: [guess],
            feedback: 'You got it!', 
            correctAnswer: state.correctAnswer,
            showInfoModal: false
        }); 
    });
    it('Should handle newGame action', () => {
        const state = {
            guesses: [5, 6, 3],
            feedback: 'You got it!',
            correctAnswer: Math.round(Math.random() * 100),
            showInfoModal: true
        }; 
        const action = newGame();
        const newState = reducer(state, action); 
        expect(newState).toEqual({ 
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: newState.correctAnswer,
            showInfoModal: false
        }); 
    }); 
    it('Should handle toggleInfoModal action', () => {
        const state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100),
            showInfoModal: false
        };
        const action = toggleInfoModal(); 
        const newState = reducer(state, action); 
        expect(newState).toEqual({ 
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: state.correctAnswer,
            showInfoModal: true
        }); 
    }); 
    it('Should return current state on an unknown action', () => {
        const state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100),
            showInfoModal: false
        };
        const action = {
            type: "BLAH_BLAH" 
        }
        const newState = reducer(state, action); 
        expect(newState).toBe(state)
    }); 
    it('Should return current state if given an undefined state', () => {
        const state = undefined; 
        const action = { 
            type: 'BLAH_BLAH'
        }
        const newState = reducer(state, action); 
        expect(newState).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: newState.correctAnswer,
            showInfoModal: false
        }); 
    }); 
}); 