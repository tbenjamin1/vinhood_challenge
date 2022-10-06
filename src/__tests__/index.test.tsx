
import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect'
import { render , screen } from '../test-utils';
import Index from '../components/searchFilter/index'
import { Provider } from 'react-redux';
import { store } from '@store/store';







// it('Should render welcome page', () => {
//     const component = render(<Index/>);
//    const btnElement= component.getByTestId('filter-btn');
//    expect(btnElement.textContent).toBe('cancel')
// }) 
