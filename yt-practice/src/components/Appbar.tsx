import React from 'react'
import Searchbar from './Searchbar'

const Appbar = () => {
return (
    <div className='flex justify-between items-center pt-1 p-3'>
        <div className='inline-flex items-center'>
            Youtube
        </div>
        <div>
            <Searchbar/>
        </div>
        <div>
            Sign In
        </div>
    </div>
  )
}

export default Appbar
