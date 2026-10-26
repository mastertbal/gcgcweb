import React from 'react'
import WhereValueChild from './WhereValueChild'
import top_right_arrow from '../assets/top_right_arrow.png';
import diamond from '../assets/diamond.png';
import grid from '../assets/grid.png';

type Props = {}

const WhereValueCreated = (props: Props) => {
    return (
        <section className='wvc'>
            <div className='wvc-content'>
                <h3 className='where'>WHERE VALUE IS CREATED</h3>
                <h1 className='built'>Built for practical outcomes.</h1>
                <p className='start'>Start with one clearly defined problem. Demonstrate the value. Expand through measurable results</p>
                <div className='wtv-second-content'>
                    <WhereValueChild imageUrl={top_right_arrow} title="Logistics & delivery" desc='Reach the actual handover point—not just the nearest street or building. Reduce ambiguity across markets, compounds and multi-unit sites.' />
                    <WhereValueChild imageUrl={diamond} title="Insurance & risk" desc='Differentiate physical premises and link authorized verification evidence to a more useful location record.' />
                    <WhereValueChild imageUrl={grid} title="Business inclusion" desc='Help informal enterprises become visible and reachable, opening pathways to customers, financial services and shared infrastructure.' />
                </div>
            </div>
        </section>
    )
}

export default WhereValueCreated