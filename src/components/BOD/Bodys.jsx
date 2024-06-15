import React from 'react'
import Body from '../body/Body'
import Repository from '../repository/Repository'

function Bodys() {
  return (
    <>
    <div className='bodys'>
        <div className='body-right'>
            <Body/>
        </div>
        <div className="left-section">
            <Repository/>

        </div>
    </div>

    </>
  )
}

export default Bodys