// Единое место настроек. Пути к картинкам — относительно папки public.
export const business = {
  name: 'Чистота в аренду',
  owner: 'Эрнест',
  city: 'Уфа',
  telegramUrl: 'https://t.me/Imponchic',
  // Когда появится ссылка на MAX — вставьте сюда, все кнопки переключатся на неё автоматически.
  maxUrl: '',
  phone: '+7 965 655 5980',
  phoneHref: 'tel:+79656555980',
  avitoUrl: 'https://www.avito.ru/ufa/predlozheniya_uslug/arenda_karcher_puzzi_8_himchistka_8020508125',
  prices: { wash: 800, washDryer: 1000, portion: 200 },
  pro: { example: 9000, selfExample: 1400 },
  images: {
    ernest: '/images/ernest.jpg', // положите фото Эрнеста в public/images/ernest.jpg
    hero: '/images/equipment-set.webp',
    puzzi: '/images/puzzi-1.webp',
    wd3: '/images/Karcher wd3_1.jpg',
    dryer: '/images/puzzi-and-dryer.webp',
  },
  // Файлы видео кладутся в public/videos
  videos: ['/videos/Instruction-1.mp4', '/videos/Instruction-2.mp4', '/videos/Instruction-3.mp4'],
  // Слайдер «до / после». Исходные картинки — «до» слева, «после» справа.
  results: [
    { src: '/images/before-after-3.webp', title: 'Стулья', ratio: '900/1200' },
    { src: '/images/before-after-4.webp', title: 'Сиденья авто', ratio: '900/1200' },
    { src: '/images/before-after-5.webp', title: 'Ковёр', ratio: '900/1200' },
    { src: '/images/before-after-1.webp', title: 'Пол салона', ratio: '900/1200' },
    { src: '/images/before-after-6.webp', title: 'Ворсовый ковёр', ratio: '900/1800' },
  ],
  // 10 отзывов: на ПК два ряда по 5, на телефоне — 2 колонки
  reviews: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11].map(n => `/images/review-${n}.webp`),
}
export const rub = (n: number) => n.toLocaleString('ru-RU') + ' ₽'
