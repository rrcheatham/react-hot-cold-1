import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Should display number of guesses', () => {
        let guessCount = 2;
        let guessText = "You've made 2 guesses!";
        let wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.text()).toEqual(guessText);
    });
});