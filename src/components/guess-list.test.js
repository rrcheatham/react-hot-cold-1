import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    const guesses = [30, 40, 50];

    it('Renders without crashing', () => {
        shallow(<GuessList guesses={guesses}/>);
    });

    it('should render guesses', () => {
        let guessesMap = guesses.map((guess) => (
            <li>{guess}</li>
        ));
        let wrapper = shallow(<GuessList guesses={guesses} />);
        expect(wrapper.contains(guessesMap)).toEqual(true);
    });
});