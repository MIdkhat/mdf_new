import React, { useState } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  title: string
  id: string
  backgroundimage: string
  hidden?: boolean
  active?: boolean
  actionType: 'toggle' | 'action'
  onClick: (active?: boolean) => void
}

type StyledButtonProps = Omit<ButtonProps, 'actionType' | 'onClick'>

const StyledButton = styled.button<StyledButtonProps>`
  width: 40px;
  height: 40px;
  background-size: 80px 40px;
  background-position: 0% 0%;
  background-color: #ccc;
  background-image: ${(props) => `url(${props.backgroundimage})`};
  background-repeat: no-repeat;
  float: left;
  display: ${(props) => (props.hidden ? 'none' : 'inline-block')};
  opacity: 0.95;
  cursor: pointer;
  outline: none;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  color: #3399cc;
  margin-top: 5px;
  -webkit-appearance: none;
  &:hover {
    border-color: red;
  }
  &.active {
    background-position: 90% 0%;
    border: 1px solid #3399cc;
    background-color: white;
  }
`

const Button: React.FC<ButtonProps> = (props) => {
  const { title, id, actionType, backgroundimage, onClick } = props
  const [active, setActive] = useState<boolean | undefined>(props.active)
  //   const [hidden, setHidden] = useState(props.hidden)

  const handleButtonClick = () => {
    if (actionType == 'toggle') {
      if (active === undefined) {
        setActive(false)
      }
      setActive(!active)
      onClick(!active)
    } else {
      onClick()
    }
  }

  return (
    <StyledButton
      type="button"
      title={title}
      id={id}
      backgroundimage={backgroundimage}
      hidden={props.hidden}
      className={active ? 'active' : ''}
      onClick={handleButtonClick}
    />
  )
}

export default Button
