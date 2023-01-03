import React from 'react'
import s from './Card.module.css'
import {ImCross,ImCheckmark} from "react-icons/im";
import {AiTwotoneQuestionCircle} from "react-icons/ai";

const Card = ({name,image,id, gender, status, species}) => {
  return (
    <div className={s.container}>
        <div className={s.image}>
            <img src={image}/>
        </div>
        <div className={s.description}>
            <div className={s.cardTitle}>
                <span>{name}</span>
            </div>
            <div className={s.cardDetails}>
                <div className={s.status}>
                <span>
                    {status === 'Dead' ? <ImCross fontSize='15px' color='#B80100' style={{marginRight:5}}/>
                        : status === 'Alive' ? <ImCheckmark fontSize='15px' color='#39B549' style={{marginRight:5}}/>
                        : <AiTwotoneQuestionCircle fontSize='15px' color='#FCC400' style={{marginRight:5}}/>}
                    {status} - {species}
                </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card