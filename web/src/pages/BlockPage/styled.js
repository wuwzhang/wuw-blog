import styled from 'styled-components'

export const PlaceHolder = styled.article`
  height: 100%;
  position: relative;
`

export const ItemC = styled.section`
  display: flex;
  padding: 20px 16px;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`

export const Item = styled.section`
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
  ${(props) =>
    props.checked
      ? `
  color: #38f;
    text-decoration-color: #38f;
  `
      : ``};
  &:hover {
    --offset: 4px;
    color: #38f;
    text-decoration-color: #38f;
    cursor: pointer;
  }
`
