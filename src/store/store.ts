import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import breweriesReducer from '@redux-slices/breweries.slice'
import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
    reducer: {
        breweries: breweriesReducer,
    },
    middleware: [thunkMiddleware],
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
