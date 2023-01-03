import React, {useState} from 'react'
import {Dropdown} from "react-bootstrap";
import s from './Dropdowns.module.css'

const Dropdowns = ({title}) => {
    const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <Dropdown  onMouseLeave={() => setShowDropdown(false)}
                 onMouseOver={() => setShowDropdown(true)}
                 style={{padding:20}}
      >
        <Dropdown.Toggle className={s.toggle} variant="light" id="dropdown-basic">
            {title}
        </Dropdown.Toggle>

        <Dropdown.Menu show={showDropdown}>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Dropdowns