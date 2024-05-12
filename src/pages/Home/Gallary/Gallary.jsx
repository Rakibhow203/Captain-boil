
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (

    <ImageList sx={{ width: 1280, height: 450, gap: 4 }} cols={3} rowHeight={260} style={{ borderRadius: '16px' }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: '16px', boxShadow: '25px 4px 6px rgba(0, 0, 0, 0.1)' }}

          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.ibb.co/3CvKfGk/images-11.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://i.ibb.co/zFdQyhn/images-10.jpg',
    title: 'Burger',
  },
  {
    img: 'https://i.ibb.co/GktcP1n/images-9.jpg',
    title: 'Camera',
  },
  {
    img: 'https://i.ibb.co/99NPYcZ/images-8.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://i.ibb.co/8gJ5SGL/images-7.jpg',
    title: 'Hats',
  },
  {
    img: 'https://i.ibb.co/6DBpMGP/images-6.jpg',
    title: 'Honey',
  },
  {
    img: 'https://i.ibb.co/QMnS1HT/images-5.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://i.ibb.co/HD39VD6/images-4.jpg',
    title: 'Fern',
  },
  {
    img: 'https://i.ibb.co/xsBpwhr/images-3.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'https://i.ibb.co/GsDTxWk/images-2.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://i.ibb.co/gdDnMpZ/422716586-369690832582242-1528670149571588063-n.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://i.ibb.co/5TYKhcF/images-1.jpg',
    title: 'Bike',
  },
];
