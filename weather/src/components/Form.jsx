import React, { useState } from 'react'
import {Box, Button, InputBase} from "@mui/material"
import styled from '@emotion/styled'
import { getWeather } from '../services/api'

const Container = styled(Box)({
    background: '#445A6F',
    padding : 10,
})

const Input = styled(InputBase)({
    color: '#FFF',
    marginRight : 20,
    fontSize : 18
})

const Getbutton = styled(Button)({
    backgroundColor : '#e67e22'
})

export const Form = () => {
    const [data, setData] = useState({ city: '', country: ''})

    const handleChange = (e) =>{
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const GetData = async() =>{
      let result = await getWeather(data.city, data.country)
    }

  return (
    <Container>
        <Input placeholder='City' name= 'city' onChange={(e)=> handleChange(e)}/>
        <Input placeholder='Country' name= 'country' onChange={(e)=> handleChange(e)}/>
        <Getbutton onClick={GetData} variant='contained'>Get Weather</Getbutton>
    </Container>
  )
}
