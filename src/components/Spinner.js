import React from 'react'
import Header from './Header'

function Spinner() {
    return (
        <div>
            <Header />
            <div className='grid h-screen place-items-center '>
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

        </div>
    )
}

export default Spinner