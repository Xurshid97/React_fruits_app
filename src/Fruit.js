import React from 'react'
import './fruitStyle.css'

let Fruits = (props) => {
    return (
        <div className='card'>
            <div className='card_left'>
                <img src={props.imag}></img>
            </div>

            <div className='card_right'>
                <div className='card_right__top'>
                    <h2>{props.title}</h2>
                    <button>Add</button>
                </div>

                <div className='card_right__bottom'>
                    <div className='card_right__bottom_details'>
                        <h3 className='detail_top'>UOM</h3>
                        <h3>{props.uom}</h3>
                    </div>
                    <div className='card_right__bottom_details'>
                        <h3 className='detail_top'>Pack size</h3>
                        <h3>{props.packSize}</h3>
                    </div>
                    <div className='card_right__bottom_details'>
                        <h3 className='detail_top'>Per Unit</h3>
                        <h3>{`$ ${props.perUnit}`}</h3>
                    </div>
                    <div className='card_right__bottom_details'>
                        <h3 className='detail_top'>Total</h3>
                        <h3>{`$ ${props.total}`}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Fruits