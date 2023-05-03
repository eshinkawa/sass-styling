import React from 'react';
import './Button.scss';
import shape from '../../assets/shape.svg'

type ButtonType = 'default' | 'icon';
export const Button = ({disabled = false, variant = 'default'}: { disabled: boolean, variant: ButtonType }) => {
  const textStyleMapper = (str: string = 'default'): string => {
    const map: { [key: string]: string } = {
      default: 'text',
      icon: 'textWithIcon'
    };
    return map[str] ?? 'text';
  }

  const handleClick = () => {
    alert('Button Clicked');
  }

  const backgroundColor = disabled ? '#AAAAAA' : '';
  const border = disabled ? 0 : '';

  return (
    <button className="button" onClick={handleClick} disabled={disabled} style={{backgroundColor, border}}>
      {variant === 'icon' && <img src={shape} className="icon" alt="search-icon"/>}
      <div className={textStyleMapper(variant)}>
        This is a two line button
        that terminates with something
      </div>
    </button>
  );
}
