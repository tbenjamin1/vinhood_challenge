import { Button } from '../../stories/Button';
import Brewery from './Brewery'

import { Link } from 'react-router-dom';

const Breweries = (props: { breweries: any[] }) => {
    return (
        <div className='flex flex-row justify-center items-center'>
            {props.breweries.length ? (

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border">
                    {props.breweries.map(
                        (brewry: { id?: any; name?: string; state?: string }) => (
                            <Brewery key={brewry.id} brewry={brewry} />
                        )
                    )}
                </div>) : (<div className='flex flex-row justify-center items-center'>
                    <div className="card bg-gray-100 border border-gray-50 shadow">
                        <div className="card-body flex flex-col justify-center items-center">
                            <h2 className="card-title m-4"> Not Available</h2>
                            <Link to='/'>
                                <Button label='Back to filter ' btnClass='btn' size='large' backgroundColor='bg-gray-300' ></Button>
                            </Link>

                        </div>
                    </div>

                </div>)}


        </div>
    )
}

export default Breweries
