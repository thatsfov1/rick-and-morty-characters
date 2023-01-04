import React, {useEffect, useState} from 'react'
import s from './Card.module.css'
import {ImCross,ImCheckmark} from "react-icons/im";
import {AiTwotoneQuestionCircle} from "react-icons/ai";
import axios from "axios";
import {BiFemaleSign, BiMaleSign, BiQuestionMark} from "react-icons/bi";
import BasicModal from "../Pages/PagesItems/ModalCard.jsx";

const Card = ({name,image,id, gender, status, species, type,dimension,
                  location,episode}) => {

   const [firstEpisodeDate, setFirstEpisodeDate] = useState()
    const [episodeCount, setEpisodeCount] = useState()
    const [firstEpisode, setFirstEpisode] = useState()
    const [episodeSeason, setEpisodeSeason] = useState()


    const requestFirstEpisode = async () =>{
       const { data } = await axios.get(episode)
        setFirstEpisode(data.name)
        setFirstEpisodeDate(data.air_date)
        setEpisodeSeason(data.episode.slice(2,3))
        setEpisodeCount(data.episode.slice(4,6))
    }

    useEffect(()=>{
        requestFirstEpisode()
    },[])


  return (
    <div className={s.container}>
        <div className={s.image}>
            <img src={image}/>
        </div>
        <div className={s.description}>
            <div className={s.cardTitle}>
                <span>{name}</span> {type && <div className={s.type}>({type})</div>}
            </div>
            <div className={s.cardDetails}>
                <div className={s.status}>
                    { status && <span>
                    {status === 'Dead' ? <ImCross fontSize='15px' color='#B80100' style={{marginRight: 5}}/>
                        : status === 'Alive' ? <ImCheckmark fontSize='15px' color='#39B549' style={{marginRight: 5}}/>
                            : <AiTwotoneQuestionCircle fontSize='15px' color='#FCC400' style={{marginRight: 5}}/>}
                        {status} - {species}
                </span>}
                    {gender && <span>
                        <span className={s.info}>Gender: </span>
                        {gender === 'Male' ? <BiMaleSign/> : gender === 'Female' ? <BiFemaleSign/> : <BiQuestionMark/>}{gender}
                    </span>}

                    <div>
                        <div className={s.info}>Last known location:</div>
                        <BasicModal >{location}</BasicModal>
                    </div>

                    <div>
                        <div className={s.info}>First seen in:</div>
                        <BasicModal date={firstEpisodeDate} episodeCount={episodeCount}
                                    episodeSeason={episodeSeason}>{firstEpisode}</BasicModal>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card