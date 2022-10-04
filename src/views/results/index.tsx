import Breweries from '@components/Breweries'
import { fetchBreweries, getBreweries } from '@redux-slices/breweries.slice'
import { useAppDispatch } from '@store/hooks'
import { RootState } from '@store/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

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
        <div>
            <Breweries breweries={breweries} />
        </div>
    )
}

export default Results
