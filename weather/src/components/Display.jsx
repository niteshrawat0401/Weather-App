import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import {LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud} from '@mui/icons-material'

export const Display = ({result}) => {
    const Row = styled(Typography)({
        padding: 10,
        fontSize : 20,
        letterSpacing: 2,
        '& > svg': {
            marginRight : 10
        }
    })

    const Error = styled(Typography)({
        color: "red",
        margin: 180,
        fontSize: 22
    })

  return (
    result && Object.keys(result).length > 0 ?
    <Box style={{margin: '30px 60px'}}>
        <Row><LocationOn/>Location: {result.name}, {result.sys.country} &emsp;<SettingsBrightness/>Temperature: {result.main.temp}</Row>
        <Row></Row>
        <Row><Opacity/>Humidity: {result.main.humidity} &emsp;<Brightness5/>Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
        <Row></Row>
        <Row><Brightness6/>Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()} &emsp;<Dehaze/>Humidity: {result.weather[0].main}</Row>
        <Row></Row>
        <Row><Cloud/>Clouds: {result.clouds.all}%</Row>
    </Box> : <Error>Please enter the detail</Error>
  )
}
