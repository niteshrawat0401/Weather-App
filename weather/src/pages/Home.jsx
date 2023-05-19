import React from 'react'
import {Box, styled} from "@mui/material"
import sunrise from "../assets/image/sunrise.jpg"

const Component = styled(Box)({
    height: '100vh'
})

const Image = styled(Box)({
    backgroundImage: `url(${sunrise})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover'
}) 

export const Home = () => {
  return (
    <Component>
        <Image></Image>
        <Box></Box>
    </Component>
  )
}
