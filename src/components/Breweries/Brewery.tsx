import { Card } from "../../stories/Card"


interface IBreweryProps {
    brewry: {
        id?:string,
        name?: string | undefined,
        state?: string | undefined
    }
}

const Brewery = (props: IBreweryProps) => {

    return (
        <div>
        <Card title={props.brewry.name} body={props.brewry.state} card="card bg-gray-100 border border-gray-50" cardbody="card-body" cardtitle="card-title"></Card>
         
     </div>

    )
}

export default Brewery
