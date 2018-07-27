import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('should display feedback', () => {
        let feedback = "very hot";
        //let guessAgain = "Guess again";
        let wrapper = shallow(<Feedback feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});