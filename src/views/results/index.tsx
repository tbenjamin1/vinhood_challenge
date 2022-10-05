import Breweries from '@components/Breweries'
import { fetchBreweries, getBreweries } from '@redux-slices/breweries.slice'
import { useAppDispatch } from '@store/hooks'
import { RootState } from '@store/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../../stories/Header'

const Results = () => {
    const dispatch = useAppDispatch()
    const breweries = useSelector(getBreweries)
    const breweriesStatus = useSelector(
        (state: RootState) => state.breweries.status
    )

    useEffect(() => {
        // @ts-expect-error
        dispatch(fetchBreweries())
    }, [])

    return (
        <div className='flex flex-col '>
            <Header user={{
                name: 'VinHood Challenge'
            }}
                onCreateAccount={() => { }}
                onLogin={() => { }}
                onLogout={() => { }} />

              {breweries.length &&  <div className='  flex flex-col justify-center items-center my-4 '>
                <div className='flex flex-col justify-center items-center rounded-md w-64 bg-blue-200'>
                <h1 className='p-2 '> Filter Results </h1> 
                </div>
               
             
              </div> }

            <Breweries breweries={breweries} />
        </div>
    )
}

export default Results
