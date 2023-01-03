import React from 'react'
import Card from "../../Card/Card.jsx";
import s from "../Characters/Characters.module.css";

const MapContentToCard = ({content}) => {
  return (
      <div className={s.content}>
      {content && content.map(c => <Card key={c.id} id={c.id} image={c.image}
                                                           status={c.status} name={c.name}
                                                           gender={c.gender} species={c.species}
      />)}
    </div>
  )
}
export default  MapContentToCard