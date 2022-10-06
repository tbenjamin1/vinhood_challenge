import * as ReactDOM from 'react-dom';
import React from 'react';
import Index from '../components/searchFilter/index'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';

it('Should render welcome page', () => {
    const component = render(<Index/>);
   const btnElement= component.getByTestId('filter-btn');
   expect(btnElement.textContent).toBe('cancel')
}) 
