import React from 'react';
import Collapse from '@components/Collapse'
import { fetchBreweries } from '@redux-slices/breweries.slice'
import { useAppDispatch } from '@store/hooks'
import { RootState } from '@store/store'
import { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {Button} from '../../stories/Button'

const TYPES = [
    'micro',
    'nano',
    'regional',
    'brewpub',
    'large',
    'planning',
    'bar',
    'contract',
    'proprietor',
    'closed',
]

const SearchFilter = () => {
    const history = useHistory()
    const dispatch = useAppDispatch()
    const [city, setCity] = useState('')
    const [type, setType] = useState(TYPES[0])
    const [name, setName] = useState('')
    const [sort, setSort] = useState(0)
    const [perPage, setPerPage] = useState(5)
    const breweriesStatus = useSelector(
        (state: RootState) => state.breweries.status
    )
   
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
        await dispatch(
            fetchBreweries({
                city,
                type,
                name,
                sort: sort ? 'asc' : 'desc',
                perPage,
            })
        ).unwrap()

        history.push('/results')
    }

    return (
        <div>
            <form className="py-4" onSubmit={handleSubmit}>
                <Collapse title="Filter By">
                    <div className="form-control my-3">
                        <label date-testid="home-page"  htmlFor="city" className="label">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="eg: Camilia"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control my-3">
                        <label htmlFor="city" className="label">
                            City
                        </label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="eg: New York"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control my-3">
                        <label htmlFor="type" className="label">
                            Type
                        </label>
                        <select
                            id="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="select select-bordered capitalize w-full"
                        >
                            {TYPES.map((type) => (
                                <option value={type} key={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control my-3">
                        <label
                            htmlFor="sort"
                            className="label justify-start gap-2"
                        >
                            <span>Desc</span>
                            <input
                                type="checkbox"
                                value={sort}
                                onChange={(e) => setSort(+e.target.value)}
                                id="sort"
                                className="toggle"
                            />
                            <span>Asc</span>
                        </label>
                    </div>
                </Collapse>
                <Collapse title="Per page">
                    <label className="label">Per Page: {perPage}</label>
                    <input
                        type="range"
                        value={perPage}
                        onChange={(e) => setPerPage(+e.target.value)}
                        min="0"
                        max="100"
                        className="range"
                        step="5"
                    />
                </Collapse>
                <div className="my-3 flex justify-end gap-2">
                <Button data-testid='filter-btn' type='reset' label='cancel' size='medium' primary={true} btnClass='btn' ></Button>
                
                 <Button type="submit" label='Apply ' btnClass={`btn ${breweriesStatus === 'loading' ? 'loading':''} btn-primary`} backgroundColor="blue" size='large' primary={false} ></Button>
           
                </div>
            </form>
        </div>
    )
}

export default SearchFilter
