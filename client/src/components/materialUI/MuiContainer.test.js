import React from 'react';
import { create } from 'react-test-render';
import MuiContainer from './MuiContainer';

it('should render an empty list', () => {
    const tree = create(
        <MuiContainer />
    );
    expect(tree.toJSON()).toMatchSnapshot();
})