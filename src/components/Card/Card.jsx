import React from 'react'
import s from './Card.module.css'

const Card = ({name,image,id, gender, status, species}) => {
  return (
    <div className={s.container}>
        <div className={s.image}>
            <img src={image}/>
        </div>
        <div className={s.card-title}>
            {name}
        </div>
        <div className={s.card-details}>
            {status}
        </div>
    </div>
  )
}

export default Card