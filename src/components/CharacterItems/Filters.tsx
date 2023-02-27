import React from 'react'
import {Button, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup} from "@mui/material";

type Props = {
    gender?:string,
    status?:string,
    setGender: React.Dispatch<React.SetStateAction<string | undefined>>,
    setStatus: React.Dispatch<React.SetStateAction<string | undefined>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
    setSearchBy: React.Dispatch<React.SetStateAction<boolean>>
}

const Filters = ({status,gender,setGender,setStatus, setSearchBy, setSearch} :Props) => {

    const clearFilters = () => {
        setSearchBy(false)
        setSearch('')
        setStatus('')
        setGender('')
    }

  return (
    <div style={{ display:'flex', paddingBottom:10}}>
        <div>
            <FormGroup>
            <FormLabel id="gender-label">Gender</FormLabel>
            <RadioGroup
                row
                aria-labelledby="gender-label"
                name="radio-buttons-group"
            >
                <FormControlLabel onChange={() => setGender("Female")} checked={gender === "Female"} value="female"
                                  control={<Radio style={{color: "#6EC325"}}/>} label="Female"/>
                <FormControlLabel onChange={() => setGender("Male")} checked={gender === "Male"} value="male"
                                  control={<Radio style={{color: "#6EC325"}}/>} label="Male"/>
                <FormControlLabel onChange={() => setGender("Other")} checked={gender === "Other"} value="other"
                                  control={<Radio style={{color: "#6EC325"}}/>} label="Other"/>
            </RadioGroup>
            <FormLabel id="status-label">Status</FormLabel>
            <RadioGroup
                row
                aria-labelledby="status-label"
                name="radio-buttons-group"
            >
                <FormControlLabel onChange={() => setStatus("Alive")} checked={status === "Alive"} value="alive"
                                  control={<Radio style={{color: "#6EC325"}}/>} label="Alive"/>
                <FormControlLabel onChange={() => setStatus("Dead")} checked={status === "Dead"} value="dead"
                                  control={<Radio style={{color: "#6EC325"}}/>} label="Dead"/>
                <FormControlLabel onChange={() => setStatus("Unknown")} checked={status === "Unknown"} value="unknown"
                                  control={<Radio style={{color: "#6EC325"}}/>} label="Unknown"/>
            </RadioGroup>
        </FormGroup>
        </div>
        <div style={{marginTop:20}}>
            <Button size="medium" onClick={() => clearFilters()}
                   style={{backgroundColor: "#6EC325", borderRadius: 7, color: "white"}}>Clear Filters</Button>
        </div>
    </div>
  )
}


export default Filters