import React from 'react';
import './styles.scss';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';

export default function CardItem(props: WishType) {

  // console.log(props);
  
  return (
    <div className='card-wrapper'>
      <div className='card-content'>
        <div className='card-img'></div>
        <div className='card-info'>
            <span className='card-name'>{props.item.name}</span>
            <a className='card-link'>{props.item.link}</a>
            <span className='card-price'>{props.item.price} ₽</span>
        </div>
      </div>
      <div className='card-btns'>
      <Button className='card-btn-edit' icon={<EditOutlined />} />
      <Button className='card-btn-delete' icon={<DeleteOutlined />} />
        {/* <Button type="primary" ghost block>
          Изменить
        </Button> */}
        {/* <Button type="primary" danger ghost block>
          Удалить
        </Button> */}
        {/* <EditOutlined />
        <DeleteOutlined /> */}
      </div>
        
    </div>

  );
}

