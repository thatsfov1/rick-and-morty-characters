import React from 'react'
import Card from "../Card/Card.tsx";
import s from "../Characters/Characters.module.css";
import {Result} from "../../models/models";

const MapContentToCard = ({content}: { content?:Result[] }) => {
  return (
      <div className={s.content}>
      {content && content.map(c => <Card key={c.id} image={c.image}
                                                           status={c.status} name={c.name}
                                                           gender={c.gender} species={c.species}
                                                           type={c.type}
                                         location={c.location.name} episode={c.episode[0]}
                                         locationUrl={c.location.url}

      />)}

      </div>
  )
}
export default  MapContentToCard