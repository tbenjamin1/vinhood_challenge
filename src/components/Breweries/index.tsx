import Brewery from './Brewery'

const Breweries = (props: { breweries: any[] }) => {
    return (
        <div className='flex flex-row justify-center items-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {props.breweries.length ? props.breweries.map(
                    (brewry: { id?: any; name?: string; state?: string }) => (
                        <Brewery key={brewry.id} brewry={brewry} />
                    )
                ) : <div className='flex flex-row justify-center items-center'>
                    <div className="card bg-gray-100 border border-gray-50 shadow">
                        <div className="card-body">
                            <h2 className="card-title m-4"> Not Available</h2>
                            <button className="btn" type="reset">
                                Back
                            </button>
                        </div>
                    </div>

                </div>}
            </div>
        </div>
    )
}

export default Breweries
