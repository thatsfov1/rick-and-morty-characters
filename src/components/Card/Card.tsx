import React from 'react'
import s from './Card.module.css'
import {ImCross, ImCheckmark} from "react-icons/im";
import {AiTwotoneQuestionCircle} from "react-icons/ai";
import {BiFemaleSign, BiMaleSign, BiQuestionMark} from "react-icons/bi";
import {OverlayTrigger, Popover} from "react-bootstrap";
import useNumber from "../../hooks/useNumber";
import {useLazyGetEpisodesQuery, useLazyGetLocationsQuery} from "../../store/characters.api";

type Props = {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    location: string;
    locationUrl:string;
    image: string;
    episode: string;
}

const Card = ({name, image, gender, status, species, type,
                  location, episode,locationUrl}:Props) => {


    const locationNumber = useNumber(locationUrl)
    const episodeNumber = useNumber(episode)

    const [fetchEpisode, {data:episodeData}] = useLazyGetEpisodesQuery()
    const [fetchLocation, {data:locationData}] = useLazyGetLocationsQuery()



    const getEpisode = () => {
        fetchEpisode(episodeNumber)
    }
    const getLocation = () => {
        fetchLocation(locationNumber)
    }


    return (
        <div className={s.container}>
            <div className={s.image}>
                <img alt='character' src={image}/>
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
                            <OverlayTrigger  placement="bottom"
                                            delay={{show: 250, hide: 200}}
                                            overlay={<Popover id="popover-location">
                                                <Popover.Header as="h3">{location}</Popover.Header>
                                                <Popover.Body>
                                                    {locationData?.dimension !== "unknown" && <div>
                                                        {locationData?.dimension}
                                                    </div>}
                                                    {locationData?.type && <div>
                                                        <span className={s.infoPopover}>Type: </span>
                                                        {locationData?.type}
                                                    </div>}
                                                </Popover.Body>
                                            </Popover>}>
                                <div onMouseEnter={getLocation} className={s.infoContent}>
                                    {location}
                                </div>
                            </OverlayTrigger>
                        </div>

                        <div>
                            <div className={s.info}>First seen in:</div>
                            <OverlayTrigger placement="bottom"
                                            delay={{show: 250, hide: 200}}
                                            overlay={<Popover id="popover-basic">
                                                <Popover.Header
                                                    as="h3">{episodeData?.name}(Season: {episodeData?.episode.slice(2, 3)} Episode: {episodeData?.episode.slice(4, 6)})
                                                </Popover.Header>
                                                <Popover.Body>
                                                    <span className={s.infoPopover}>Date of coming:</span>
                                                    {episodeData?.air_date}
                                                </Popover.Body>
                                            </Popover>}>
                                <div onMouseEnter={getEpisode} className={s.infoContent}>
                                    Episode
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card