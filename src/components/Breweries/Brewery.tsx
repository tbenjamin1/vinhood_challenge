interface IBreweryProps {
    brewry: {
        id?:string,
        name?: string | undefined
        state?: string | undefined
    }
}

const Brewery = (props: IBreweryProps) => {

    return (
        
        <div className="card bg-gray-100 border border-gray-50 shadow">
            <div className="card-body">
                <h2 className="card-title">{props.brewry.name}</h2>
                <p>state: {props.brewry.state}</p>
            </div>
        </div>

    )
}

export default Brewery
