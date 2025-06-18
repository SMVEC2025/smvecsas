import React, { useState } from 'react'
import VirtualTourHeader from '../../components/header/VirtualTourHeader';
import ThreeSixtyViewer from './ThreeSixtyViewer';

function Index() {
    const [selected, setSelected] = useState("campus");

    return (
        <div className='vt_main'>
            <ThreeSixtyViewer/>
        </div>
    )
}

export default Index