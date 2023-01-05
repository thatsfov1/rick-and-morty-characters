import React, {useEffect, useState} from 'react'
import s from './Card.module.css'
import {ImCross, ImCheckmark} from "react-icons/im";
import {AiTwotoneQuestionCircle} from "react-icons/ai";
import axios from "axios";
import {BiFemaleSign, BiMaleSign, BiQuestionMark} from "react-icons/bi";
import {OverlayTrigger, Popover, Tooltip} from "react-bootstrap";

const Card = ({
                  name, image, id, gender, status, species, type, dimension,
                  location, episode,locationUrl
              }) => {

    const [firstEpisodeDate, setFirstEpisodeDate] = useState()
    const [episodeCount, setEpisodeCount] = useState()
    const [firstEpisode, setFirstEpisode] = useState()
    const [episodeSeason, setEpisodeSeason] = useState()
    const [locationType, setLocationType] = useState()
    const [locationDimension, setLocationDimension] = useState()


    const requestFirstEpisode = async () => {
        const {data} = await axios.get(episode)
        setFirstEpisode(data.name)
        setFirstEpisodeDate(data.air_date)
        setEpisodeSeason(data.episode.slice(2, 3))
        setEpisodeCount(data.episode.slice(4, 6))
    }

    const requestLocation = async () =>{
        const {data} = await axios.get(locationUrl)
        setLocationType(data.type)
        setLocationDimension(data.dimension)

    }

    useEffect(() => {
        requestFirstEpisode()
        requestLocation()
    }, [])


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
                        {status && <span>
                    {status === 'Dead' ? <ImCross fontSize='15px' color='#B80100' style={{marginRight: 5}}/>
                        : status === 'Alive' ? <ImCheckmark fontSize='15px' color='#39B549' style={{marginRight: 5}}/>
                            : <AiTwotoneQuestionCircle fontSize='15px' color='#FCC400' style={{marginRight: 5}}/>}
                            {status} - {species}
                </span>}
                        {gender && <span>
                        <span className={s.info}>Gender: </span>
                            {gender === 'Male' ? <BiMaleSign/> : gender === 'Female' ? <BiFemaleSign/> :
                                <BiQuestionMark/>}{gender}
                    </span>}

                        <div>
                            <div className={s.info}>Last known location:</div>
                            <OverlayTrigger placement="bottom"
                                            delay={{show: 250, hide: 200}}
                                            overlay={<Popover id="popover-location">
                                                <Popover.Header as="h3">{location}</Popover.Header>
                                                <Popover.Body>
                                                    {locationDimension !== "unknown" && <div>{locationDimension}</div>}
                                                    {locationType && <div>
                                                        <span className={s.infoPopover}>Type: </span>{locationType}
                                                    </div>}
                                                </Popover.Body>
                                            </Popover>}>
                                <div className={s.infoContent}>{location}</div>
                            </OverlayTrigger>
                        </div>

                        <div>
                            <div className={s.info}>First seen in:</div>
                            <OverlayTrigger placement="bottom"
                                            delay={{show: 250, hide: 200}}
                                            overlay={<Popover id="popover-basic">
                                                <Popover.Header
                                                    as="h3">{firstEpisode}(Season: {episodeSeason} Episode: {episodeCount})</Popover.Header>
                                                <Popover.Body>
                                                    <span className={s.infoPopover}>Date of coming:</span> {firstEpisodeDate}
                                                </Popover.Body>
                                            </Popover>}
                            >
                                <div className={s.infoContent}>{firstEpisode}</div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card