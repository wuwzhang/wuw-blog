import { Col, Row } from 'antd'
import styled from 'styled-components'

export const Container = styled(Row)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: auto;
  scroll-snap-type: y mandatory;
  margin: 0 !important;
  position: relative;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`

export const Item = styled(Col)`
  width: 100%;
  height: 180px;
  scroll-snap-align: start;
  padding: 5px 10px;
  background: #fff;
  display: flex;
  align-items: center;
  position: relative;

  &:nth-child(1) p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:nth-child(2) p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  span {
    padding: 0 2px;
    border: 2px solid #38f;
    border-radius: 5px;
    background: #38f;
    color: #fff;
  }

  &:nth-child(3) p {
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    & > span {
      display: inline-block;
    }
  }
`

export const Tip = styled.section`
  ${(props) =>
    props.show
      ? `
      position: absolute;
  left: 0;
  top: 0;
  background: #dfdfdf4f;
  padding: 2px 3px;
  `
      : ` display: none `};
`
