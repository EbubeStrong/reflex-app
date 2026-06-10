import React from 'react'
import frsc from '../images/hotlineImages/frsc.svg'
import sss from '../images/hotlineImages/ssService.svg'
import ncc from '../images/hotlineImages/ncc.svg'
import ndlea from '../images/hotlineImages/ndlea.svg'
import eswama from '../images/hotlineImages/eswama.svg'
import erAfrica from '../images/hotlineImages/erAfrica.svg'
import '../style/otherHotlines.css'


function OtherHotlines() {
  return (
    <div className='other-hotlines'>
        <div className='row'>

            <div className='frsc-div'>
                <img src={frsc} alt='FRSC'/>
                FRSC
            </div>

            <div className='sss-div'>
                <img src={sss} alt='SSS'/>
               State Security Service
            </div>
        </div>

        <div className='row'>

            <div className='ncc-div'>
                <img src={ncc} alt='NCC'/>
                Nigerian Comms Commision
            </div>

            <div className='ndlea-div'>
                <img src={ndlea} alt='NDLEA'/>
              NDLEA
            </div>
        </div>
        <div className='row'>
        <div className='eswama-div'>
                <img src={eswama} alt='ESWAMA'/>
               ESWAMA
            </div>
            <div className='erAfrica-div'>
                <img src={erAfrica} alt='ERAfrica'/>
              Emergency Respone Africa
            </div>
        </div>
    </div>
  )
}

export default OtherHotlines