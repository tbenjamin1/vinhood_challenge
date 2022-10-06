import * as ReactDOM from 'react-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Filter from '../components/searchFilter/index';


it('Should render welcome page', () => {
   const component = render(<Filter/>);
   const homeElement= component.getByTestId('home-page');
   expect(homeElement.textContent).toBe('Name')
}) 