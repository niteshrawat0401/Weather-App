import React, { useState } from 'react'
import {Box, styled} from "@mui/material"
import sunrise from "../assets/image/sunrise.jpg"
import { Form } from '../components/Form'
import { Display } from '../components/Display'

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    margin: '0 auto',
    alignItems: 'center',
    width: '65%'
})

const Image = styled(Box)({
    backgroundImage: `url(${sunrise})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
}) 

export const Home = () => {

    const [result, setResult] = useState({})

  return (
    <Component>
        <Image></Image>
        <Box style={{ border:"1px solid red", width: "73%", height: "80%"}}>
            <Form setResult={setResult}/>
            <Display result={result}/>
        </Box>
    </Component>
  )
}
