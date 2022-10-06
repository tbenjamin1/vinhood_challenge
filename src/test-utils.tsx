


import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

 import breweriesSlice from '@redux-slices/breweries.slice'

interface WrapperProps {
    children?: React.ReactNode;
}

function render(ui: any, { route = '/', initialState = {} } = {}) {
    window.history.pushState({}, 'Test page', route);
    const store = configureStore({ reducer: breweriesSlice, preloadedState: initialState });

    const Wrapper = ({ children }: WrapperProps) => {
        return (
            <Provider store={store}>
               {children}
            </Provider>
        );
    };

    return rtlRender(ui, { wrapper: Wrapper });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };