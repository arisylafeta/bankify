'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
    return (
        <div>
                <CountUp end={amount}
                         duration={2}
                          decimals={2}
                           separator=','
                           prefix='$'
                           decimal='.' />
        </div>
    )
}

export default AnimatedCounter
