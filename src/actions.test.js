import {TOGGLE_INFO_MODAL, toggleInfoModal, MAKE_GUESS, makeGuess, NEW_GAME, newGame} from './actions'; 

describe('toggleInfoModal', () => {
   it('Should return the action', () => {
        const action = toggleInfoModal();
        expect(action.type).toEqual(TOGGLE_INFO_MODAL);  
   }); 
}); 

describe('makeGuess', () => {
    it('Should return an action', () => {
        const guess = "5"; 
        const action = makeGuess(guess); 
        expect(action.type).toEqual(MAKE_GUESS); 
        expect(action.guess).toEqual(guess); 
    })
}); 

describe('newGame', () => {
    it('Should return an action', () => {
        const action = newGame(); 
        expect(action.type).toEqual(NEW_GAME); 
        expect(typeof action.correctAnswer).toEqual('number')
    })    
}); 