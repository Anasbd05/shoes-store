import {shoes} from '@/assets/assets'
import React from 'react'

const ShoeDetails = async ({params}) => {

    const {title} = params

    const SelectedShoe = shoes.filter((shoe) => shoe.title.replaceAll(' ',"") === title)
    return (
        <div>

        </div>
    )
}

export default ShoeDetails
