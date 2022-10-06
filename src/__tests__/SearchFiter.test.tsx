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
   render(<Provider store={store}><SearchFilter/> </Provider>);
   expect(screen.getByTestId('filter'))
})

describe('My Connected React-Redux Component', () => {
    let store:any;
    let component:any;
  
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
    });
  
    it('should render with given state from Redux store', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should dispatch an action on button click', () => {
        renderer.act(() => {
          component.root.findByType('button').props.onClick();
        });
        renderer.act(() => {
            component.root.findByType('input')
              .props.onChange({ target: { value: 'satte name' } });
          });
    
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            fetchBreweries({ city:'kigali',
                type:'micro',
                name:'brewery',
                sort: 'desc',
                perPage:6, })
        );
      });

 
  
    
  });
 




  