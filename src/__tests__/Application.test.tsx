import React from "react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {render,screen} from '@testing-library/react'
const mockStore = configureStore([]);

import Application from "../Application";

it('render welcome page',() => {
 let  store = mockStore({
      myState: 'sample text',
    });
   render(<Provider store={store}><Application/> </Provider>);
   expect(screen.getByTestId('home-page'))
})