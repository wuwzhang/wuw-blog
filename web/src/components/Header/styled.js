import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-center: center;
  flex-direction: column;
  background: #fafafa;
  z-index: 1;
`

export const Menu = styled.ul`
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 3px 0px #ccc;
  a {
    color: #000;
    &:hover,
    &:active {
      li {
        color: #fff !important;
      }
    }
  }
`

export const MenuItem = styled.li`
  position: relative;
  padding: 20px;
  font-size: 18px;
  color: ${(props) => (props.checked ? '#38f' : '#000')};
  line-height: 1;
  transition: 0.2s all linear;
  cursor: pointer;
  list-style: none;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 2px solid #38f;
    background: linear-gradient(90deg, #38f, #38f),
      linear-gradient(90deg, rgba(51, 136, 255, 0.6), #38f);
    background-repeat: no-repeat;
    background-position: 110% 100%, 0 100%;
    background-size: 100% 2px, 0 2px;
    transition: 0.2s all linear;
  }
  &:hover::before {
    width: 100%;
    top: 1px;
    left: 0;
    color: #38f;
    transition-delay: 0.1s;
    border-bottom-color: #38f;
    background-size: 0 3px, 100% 3px;
    z-index: -1;
  }
  &:active {
    background: #38f;
  }
  &:hover {
    background: rgba(51, 136, 255, 0.6);
    font-weight: 500;
  }
  &:hover ~ li::before {
    left: 0;
  }
`
