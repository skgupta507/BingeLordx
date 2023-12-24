import React from 'react'
import Genre from './action/Genre'
import styled from 'styled-components';
import tw from 'twin.macro';
import { useParams } from 'react-router-dom';

const Container = styled.div`${tw``}`

const GenreCards = () => {
  const { type } = useParams()
  return (
    <Container>
      <Genre type={type} movieID="28" seriesID="10759"/>
      <Genre type={type} movieID="27" seriesID="35"/>
      <Genre type={type} movieID="35" seriesID="99"/>
      <Genre type={type} movieID="10749" seriesID="18"/>
      <Genre type={type} movieID="9648" seriesID="10751"/>
      <Genre type={type} movieID="878" seriesID="10765"/>
      <Genre type={type} movieID="37" seriesID="37"/>
    </Container>
  )
}

export default GenreCards