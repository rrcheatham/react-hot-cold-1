import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });

    it('Renders the aural status', () => {
        const TEST_STATUS = "Foo";
        const wrapper = shallow(<AuralStatus auralStatus={TEST_STATUS} />);
        expect(wrapper.contains(TEST_STATUS)).toEqual(true);
    });
});