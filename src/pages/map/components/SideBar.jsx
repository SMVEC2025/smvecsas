import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'

function SideBar() {
    const {imagePath, setImagePath} = useContext(AppContext)
    const array =[
        {
            name:"canteen",
            image:"/assets/img/360/canteen.jpg"
        },
         {
            name:"play ground",
            image:"/assets/img/360/ground.jpg"
        },
         {
            name:"Gate 1",
            image:"/assets/img/360/gate1.jpg"
        },
         {
            name:"Gate 2",
            image:"/assets/img/360/gate2.jpg"
        },
         {
            name:"Entrance",
            image:"/assets/img/360/entrance.jpg"
        },

    ]
  return (
    <div className='map_sidebar-main'>
      {array.map((e,i)=>(
         <div onClick={()=>{setImagePath(e.image)}}>
        <img src={e.image} alt="" />
        <h2>{e.name}</h2>
       </div>
      ))}
    </div>
  )
}

export default SideBar