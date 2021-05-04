import React from 'react';

const ChartBar = props => {
    let barFillHeight = '0%';

    if(props.max > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chartbar__inner'>
                <div className='chart-bar__fill' style={{height: barFillHeight}} >
                    <div className='chart-bar__label'>
                        {props.label}
                    </div>
                </div>
            </div>
         </div>
    )
}
export default ChartBar;