import React from 'react';
import './MainPage.scss';
import { Button } from '../Button/Button';

export const MainPage = () => {
  return (
    <section className="container">
      <div className="title">Firm Facts</div>
      <div className="horizontalLine"/>
      <div className="gridContainer">
        <div id="item-0"><Button variant={'icon'} disabled={false}/></div>
        <div id="item-1"><Button variant={'icon'} disabled={false}/></div>
        <div id="item-2"><Button variant={'default'} disabled={false}/></div>
        <div id="item-3"><Button variant={'icon'} disabled={false}/></div>
        <div id="item-4"><Button variant={'icon'} disabled={false}/></div>
        <div id="item-5"><Button variant={'icon'} disabled={true}/></div>
        <div id="item-6"><Button variant={'icon'} disabled={false}/></div>
      </div>
    </section>
  );
}
