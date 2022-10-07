import React from "react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {render,screen} from '@testing-library/react'
import { fetchBreweries } from '@redux-slices/breweries.slice'
const mockStore = configureStore([]);

import SearchFilter from "../components/searchFilter/index";

it('render filter page',() => {
 let  store = mockStore({
      myState: 'filter test',
      breweries: {
        breweries: [],
        status: 'idle',
        error: null,
      },
    });
   render(<Provider store={store}><SearchFilter/></Provider>);
   expect(screen.getByTestId('filter'))
})

describe('My Connected React-Redux Component', () => {
    let store:any;
    let component:any;
    let buttonApply:any;
  
    beforeEach(() => {
      store = mockStore({
        myState: 'sample text',
        breweries: {
            breweries: [],
            status: 'idle',
            error: null,
          },
      });
  
      component = render(
        <Provider store={store}>
          <SearchFilter />
        </Provider>
      );

      buttonApply= screen.getByRole('button',{ name:/Apply/i})
    });
  
    it('apply button should be defined ', () => {
      expect(buttonApply).toBeDefined() ;
    });

    it('should render with given state from Redux store', () => {
      expect(component).toMatchSnapshot();
    });

    

 
  
    
  });
 




  