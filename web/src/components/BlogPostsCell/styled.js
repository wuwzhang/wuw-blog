import { Row } from 'antd'
import styled from 'styled-components'

export const Container = styled(Row)`
  height: calc(100vh - 80px);
  overflow: auto;
  scroll-snap-type: y mandatory;
  margin: 0 !important;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`
