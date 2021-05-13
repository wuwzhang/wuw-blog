import { Row } from 'antd'
import styled from 'styled-components'

export const Container = styled(Row)`
  height: calc(100vh - 80px);
  overflow: auto;
`

export const LineItem = styled.section`
  height: 40px;
  @property --offset {
    syntax: '<length>';
    inherits: false;
    initial-value: 0;
  }
  text-underline-offset: var(--offset, 1px);
  text-decoration: underline;
  transition: --offset 400ms, text-decoration-color 400ms;
  font-size: 16px;
  &:hover {
    --offset: 4px;
    cursor: pointer;
  }
`

export const ItemContainer = styled(Row)`
  scroll-snap-type: y mandatory;
  margin: 0 !important;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`
