import React from 'react'
import Header from '../../../components/Header'

function Placements() {
    const partners = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/2560px-Tata_Consultancy_Services_old_logo.svg.png",
        "https://mma.prnewswire.com/media/1953706/Integra_Logo.jpg?p=facebook",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVb3-triq81EGt_qghnuLhJXg9i9JcO3Xwog&s",

        "https://getvectorlogo.com/wp-content/uploads/2019/01/sutherland-global-services-vector-logo.png",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYV6C8ePsFoRjppsDhjXY2ifABMWlu0UgWjQ&s",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjO0YBBxvGNQJdn_2u-so8MsdL0ostWy-EsQ&s",

        "",

        "",

        "",

        "",


    ]
    return (

        <div className='hp_main'>
            <Header title="Proud Placements" />
            <div className='conmain'>
                {partners.map((e, i) => (
                    <div className='con'>
                        <img src={e} alt="" />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Placements