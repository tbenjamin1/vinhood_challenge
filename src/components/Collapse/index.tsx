import React from 'react'
import { ReactChild, ReactFragment, ReactPortal } from 'react'

const Collapse = (props: {
    title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
    children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined
}):any => {


    return (
        <div className="collapse collapse-plus border border-gray-100 bg-gray-200">
            <input type="checkbox" />
            <div className="collapse-title  text-lg font-medium">
                {props.title}
            </div>
            <div className="collapse-content bg-white">{props.children}</div>
        </div>
    )
}

export default Collapse
