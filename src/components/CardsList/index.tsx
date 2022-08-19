import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
// import './styles.scss';
import CardItem from '../CardItem/index.tsx'

export default function CardsList() {

    type WishType = {
        id: string,
        name: string,
        link: string,
        price: number,
        img: string
    }

    const wishes: Array<WishType> = [
        { id: '1', name: 'Пылесос', link: 'http://...', price: 18000, img: 'допустим, картинка', userId: '2'},
        { id: '2', name: 'Кроссовки', link: 'http://...', price: 5000, img: 'допустим, картинка', userId: '1'},
        { id: '3', name: 'Машина', link: 'http://...', price: 350000, img: 'допустим, картинка', userId: '2'},
        { id: '4', name: 'Сумка', link: 'http://...', price: 4000, img: 'допустим, картинка', userId: '2'},
        { id: '5', name: 'Дрель', link: 'http://...', price: 8000, img: 'допустим, картинка', userId: '1'},
    ];

  return (
    <section>
        {wishes.map((item, index) => 
            // <h2>{item.name}</h2>
            <CardItem item={item} key={index}/>
        )}
    </section>
  );
}
