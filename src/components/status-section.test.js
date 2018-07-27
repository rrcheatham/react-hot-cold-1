import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
    let guesses = [];
    let status = "Foo";
    it('Renders without crashing', () => {
        shallow(<StatusSection guesses={guesses} auralStatus={status} />);
    });
})