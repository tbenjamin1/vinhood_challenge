import Brewery from './Brewery'

const Breweries = (props: { breweries: any[] }) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {props.breweries.map(
                (brewry: { id?: any; name?: string; state?: string }) => (
                    <Brewery key={brewry.id} brewry={brewry} />
                )
            )}
        </div>
    )
}

export default Breweries
