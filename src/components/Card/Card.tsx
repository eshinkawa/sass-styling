import React from 'react';
import './Card.scss';

type CardType = 'default' | 'border';

interface CardProps {
  comp: React.ReactNode;
  variant?: CardType;
  id?: string;
}

const cardStyleMapper = (str: CardType = 'default'): string => {
  const map: Record<CardType, string> = {
    default: 'text',
    border: 'border',
  };
  return map[str] ?? 'text';
};

const Card: React.FC<CardProps> = ({ comp, variant = 'default', id }) => {
  return <article id={id} className={cardStyleMapper(variant)}>{comp}</article>;
};

export default Card;
