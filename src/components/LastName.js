import React from 'react'

import { useSelector } from 'react-redux'

const LastName = () => {

    const last = useSelector((state) => state.user.lastName)
    return <div className='font-bold'>{last}</div>
}

export default LastName
