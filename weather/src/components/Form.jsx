import React, { useState } from 'react'
import {Box, Button, InputBase} from "@mui/material"
import styled from '@emotion/styled'
import { getWeather } from '../services/api'

const Container = styled(Box)({
    background: '#5d9ce4',
    padding : 10,
})

const Input = styled(InputBase)({
    color: '#FFF',
    marginRight : 20,
    fontSize : 18,
    borderRadius: 10,
})

const Getbutton = styled(Button)({
    backgroundColor : '#3a62f6'
})

export const Form = ({setResult}) => {
    const [data, setData] = useState({ city: '', country: ''})

    const handleChange = (e) =>{
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const GetData = async() =>{
      let response = await getWeather(data.city);
        setResult(response);
    }

  return (
    <Container>
        <Input placeholder='City' name= 'city' onChange={(e)=> handleChange(e)} />
        <Input placeholder='Country' name= 'country' onChange={(e)=> handleChange(e)}/>
        <Getbutton onClick={GetData} variant='contained'>Get Weather</Getbutton>
    </Container>
  )
}
