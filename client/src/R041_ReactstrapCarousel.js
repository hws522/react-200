import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://cdn.pixabay.com/photo/2021/12/28/16/35/leopard-6899752_960_720.jpg',
    altText: '슬라이드1 이미지 대체 문구',
    caption: '슬라이드1 설명',
    header: '슬라이드1 제목',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/01/19/21/16/cat-5932474_960_720.jpg',
    altText: '슬라이드2 이미지 대체 문구',
    caption: '슬라이드2 설명',
    header: '슬라이드2 제목',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/12/27/17/47/animal-6897849_960_720.jpg',
    altText: '슬라이드3 이미지 대체 문구',
    caption: '슬라이드3 설명',
    header: '슬라이드3 제목',
  },
];

class R041_ReactstrapCarousel extends Component {
  render() {
    return <UncontrolledCarousel items={items} />;
  }
}

export default R041_ReactstrapCarousel;
