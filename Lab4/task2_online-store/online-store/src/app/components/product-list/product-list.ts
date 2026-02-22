import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Экран 6.3 дюйма, OLED, процессор A19 Pro.',
      price: 802600,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

    {
      id: 2,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Экран 6.1 дюйма, OLED, процессор A16 Bionic.',
      price: 399684,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },

    {
      id: 3,
      name: 'Смартфон Samsung Galaxy S25 5G 12 ГБ/256 ГБ синий',
      description: 'Экран 6.2 дюйма, Dynamic AMOLED 2X, процессор Exynos 2400.',
      price: 445000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p56/p03/20107707.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p39/p03/20107708.png',
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/p03/20107709.png',
        'https://resources.cdn-kaspi.kz/img/m/p/pb1/p00/20107710.png'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-sinii-133432433/?c=750000000'
    },

    {
      id: 4,
      name:'Смартфон Apple iPhone 16 128Gb фиолетовый',
      description:'Экран 6.1 дюйма, OLED, процессор A18.',
      price:454119,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hff/h64/87295472042014.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h4f/87295472074782.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hf1/87295472107550.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hf1/87295472107550.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-fioletovyi-123727182/?c=750000000'
    },

    {
      id: 5,
      name:'Смартфон Samsung Galaxy S24 FE 5G 8 ГБ/128 ГБ черный',
      description:'Экран 6.7 дюйма, OLED, процессор Samsung Exynos 2400e.',
      price:254985,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pdb/p79/1610315.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbe/p79/1610316.png',
        'https://resources.cdn-kaspi.kz/img/m/p/pfe/p76/1610320.png',
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p7d/1610304.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-128-gb-chernyi-128143528/?c=750000000'
    },

    {
      id: 6,
      name:'Смартфон Apple iPhone 13 128Gb розовый',
      description:'Экран 6.1 дюйма, OLED, процессор A15 Bionic.',
      price: 479990,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h89/hd5/64000136019998.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf9/hdc/64000138313758.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h02/hdb/64000140935198.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000'
    },

    {
      id: 7,
      name: 'Смартфон Samsung Galaxy A36 5G 8 ГБ/128 ГБ белый',
      description: 'Экран 6.7 дюйма, Super AMOLED, процессор Snapdragon 6 Gen 3.',
      price: 147490,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/p84/30557260.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p28/p84/30557261.png',
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/p84/30557262.png',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p83/30557263.png'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a36-5g-8-gb-128-gb-belyi-136436225/?c=750000000'
    },

    {
      id: 8,
      name:'Смартфон Apple iPhone Air 256Gb голубой',
      description:'Экран 6.5 дюйма, OLED, процессор A19 Pro.',
      price: 568012,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pb8/p40/64171189.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa3/p5a/64477196.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/p86/p3d/64171197.png',
        'https://resources.cdn-kaspi.kz/img/m/p/p30/p3e/64171191.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-air-256gb-goluboi-145468599/?c=750000000'
    },

    {
      id: 9,
      name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
      description: 'Экран 6.8 дюйма, Dynamic AMOLED 2X, процессор Snapdragon 8 Gen 2.',
      price: 494996,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/hb0/69635684368414.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/hae/69635684892702.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hdc/69635685416990.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000'
    },

    {
      id: 10,
      name: 'Смартфон Samsung Galaxy S21 FE 8 ГБ/256 ГБ серый',
      description: 'Экран 6.4 дюйма, Dynamic AMOLED 2X, процессор Qualcomm SM8350 Snapdragon 8 888.',
      price: 264983,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h70/64354219884574.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h00/h47/64354223357982.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h98/64354225782814.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb4/h8a/64354228994078.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s21-fe-8-gb-256-gb-seryi-103394396/?c=750000000'
    },
  ];
}