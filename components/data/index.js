const date = new Date().toLocaleDateString('fa')

const categories = [
   {
      categoryId: 0,
      name: 'قطعات لپ تاپ',
      subItems: [
         { id: 0, name: 'قاب' },
         { id: 1, name: 'کیبورد' },
         { id: 2, name: 'شارژر' },
      ],
   },
   {
      categoryId: 1,
      name: 'قطعات کامپیوتر',
      subItems: [
         { id: 0, name: 'کیس' },
         { id: 1, name: 'کیبورد' },
         { id: 2, name: 'موس' },
      ],
   },
   {
      categoryId: 2,
      name: 'قطعات موبایل',
      subItems: [
         { id: 0, name: 'قاب' },
         { id: 1, name: 'گلس' },
         { id: 2, name: 'شارژر' },
      ],
   },
   {
      categoryId: 3,
      name: 'قطعات تبلت',
      subItems: [
         { id: 0, name: 'قاب' },
         { id: 1, name: 'گلس' },
         { id: 2, name: 'شارژر' },
      ],
   },
   {
      categoryId: 4,
      name: 'قطعات شبکه',
      subItems: [
         { id: 0, name: 'قاب' },
         { id: 1, name: 'کیبورد' },
         { id: 2, name: 'شارژر' },
      ],
   },
]

const Banners = ['/img/1.jpg', '/img/2.jpg', '/img/3.jpg']
const Items = [
   {
      id: 0,
      img: ['/img/item.jpg', '/img/item.jpg', '/img/item.jpg'],
      title: 'IPHONE 13 PRO MAX 128 گیگابایت',
      description: '',
      info: [
         {
            name: 'مشخصات کلی',
            data: [{ title: '', information: ['تست2', 'تست'] }],
         },
         {
            name: 'نمایشگر',
            data: [{ title: '', information: ['تست2', 'تست'] }],
         },
      ],
      price: [
         {
            newPrice: 100000,
            oldPrice: 120000,
            date: date,
         },
      ],
      oldPrice: 100000,
      specialOffer: false,
      visited: 0,
      avalibility: 10,
      rating: 4.5,
      keyword: ['آیفون', 'موبایل', 'iPhone 13'],
      comments: [
         {
            id: 0,
            name: 'علی مطهری',
            comment: 'عالی بود',
            answer: 'ممنون',
            aproved: false,
            date: date,
         },
      ],
      category: { id: 0, subitemId: 0 },
      colors: [
         { colorId: 0, name: 'سفید', colorHex: '#ffffff' },
         { colorId: 1, name: 'مشکی', colorHex: '#000' },
         { colorId: 5, name: 'نقره ای', colorHex: '#c0c0c0' },
      ],
   },
   {
      id: 1,
      img: ['/img/item.jpg', '/img/item.jpg', '/img/item.jpg'],
      title: 'IPHONE 13 PRO MAX 128 گیگابایت',
      description: '',
      info: [
         {
            name: 'مشخصات کلی',
            data: [{ title: '', information: ['تست2', 'تست'] }],
         },
         {
            name: 'نمایشگر',
            data: [{ title: '', information: ['تست2', 'تست'] }],
         },
      ],
      price: [
         {
            newPrice: 100000,
            oldPrice: 120000,
            date: date,
         },
      ],
      oldPrice: 100000,
      specialOffer: false,
      visited: 0,
      avalibility: 10,
      rating: 4.5,
      keyword: ['آیفون', 'موبایل', 'iPhone 13'],
      comments: [
         { id: 0, name: 'علی مطهری', comment: 'عالی بود', answer: '', aproved: false, date: date },
      ],
      category: { id: 0, subitemId: 0 },
      colors: [
         { colorId: 0, name: 'سفید', colorHex: '#ffffff' },
         { colorId: 1, name: 'مشکی', colorHex: '#000' },
         { colorId: 5, name: 'نقره ای', colorHex: '#c0c0c0' },
      ],
   },
   {
      id: 2,
      img: ['/img/item.jpg', '/img/item.jpg', '/img/item.jpg'],
      title: 'IPHONE 13 PRO MAX 128 گیگابایت',
      description: '',
      info: [
         {
            name: 'مشخصات کلی',
            data: [{ title: '', information: ['تست2', 'تست'] }],
         },
         {
            name: 'نمایشگر',
            data: [{ title: '', information: ['تست2', 'تست'] }],
         },
      ],
      price: [
         {
            newPrice: 100000,
            oldPrice: 120000,
            date: date,
         },
      ],
      oldPrice: 100000,
      specialOffer: false,
      visited: 0,
      avalibility: 10,
      rating: 4.5,
      keyword: ['آیفون', 'موبایل', 'iPhone 13'],
      comments: [
         { id: 0, name: 'علی مطهری', comment: 'عالی بود', answer: '', aproved: false, date: date },
      ],
      category: { id: 0, subitemId: 0 },
      colors: [
         { colorId: 0, name: 'سفید', colorHex: '#ffffff' },
         { colorId: 1, name: 'مشکی', colorHex: '#000' },
         { colorId: 5, name: 'نقره ای', colorHex: '#c0c0c0' },
      ],
   },
   {
      id: 3,
      img: ['/img/item.jpg', '/img/item.jpg', '/img/item.jpg'],
      title: 'IPHONE 13 PRO MAX 128 گیگابایت',
      description: '',
      info: [
         {
            name: 'مشخصات کلی',
            data: [{ title: '', information: ['تست2', 'تست'] }],
         },
         {
            name: 'نمایشگر',
            data: [{ title: '', information: ['تست2', 'تست'] }],
         },
      ],
      price: [
         {
            newPrice: 100000,
            oldPrice: 120000,
            date: date,
         },
      ],
      oldPrice: 100000,
      specialOffer: false,
      visited: 0,
      avalibility: 10,
      rating: 4.5,
      keyword: ['آیفون', 'موبایل', 'iPhone 13'],
      comments: [
         { id: 0, name: 'علی مطهری', comment: 'عالی بود', answer: '', aproved: false, date: date },
      ],
      category: { id: 0, subitemId: 0 },
      colors: [
         { colorId: 0, name: 'سفید', colorHex: '#ffffff' },
         { colorId: 1, name: 'مشکی', colorHex: '#000' },
         { colorId: 5, name: 'نقره ای', colorHex: '#c0c0c0' },
      ],
   },
   {
      id: 4,
      img: ['/img/item.jpg', '/img/item.jpg', '/img/item.jpg'],
      title: 'IPHONE 13 PRO MAX 128 گیگابایت',
      description: '',
      info: [
         {
            name: 'مشخصات کلی',
            data: [{ title: '', information: ['تست2', 'تست'] }],
         },
         {
            name: 'نمایشگر',
            data: [{ title: '', information: ['تست2', 'تست'] }],
         },
      ],
      price: [
         {
            newPrice: 100000,
            oldPrice: 120000,
            date: date,
         },
      ],
      oldPrice: 100000,
      specialOffer: false,
      visited: 0,
      avalibility: 10,
      rating: 4.5,
      keyword: ['آیفون', 'موبایل', 'iPhone 13'],
      comments: [
         { id: 0, name: 'علی مطهری', comment: 'عالی بود', answer: '', aproved: false, date: date },
      ],
      category: { id: 0, subitemId: 0 },
      colors: [
         { colorId: 0, name: 'سفید', colorHex: '#ffffff' },
         { colorId: 1, name: 'مشکی', colorHex: '#000' },
         { colorId: 5, name: 'نقره ای', colorHex: '#c0c0c0' },
      ],
   },
]
const colors = [
   { colorId: 0, name: 'سفید', colorHex: '#ffffff' },
   { colorId: 1, name: 'مشکی', colorHex: '#000' },
   { colorId: 2, name: 'قرمز', colorHex: '#ff0000' },
   { colorId: 3, name: 'آبی', colorHex: '#0000FF' },
   { colorId: 4, name: 'طلایی', colorHex: '#ffd700' },
   { colorId: 5, name: 'نقره ای', colorHex: '#c0c0c0' },
   { colorId: 6, name: 'بنفش', colorHex: '#800080' },
   { colorId: 7, name: 'سبز', colorHex: '#00ff00' },
]

const ads = [
   { url: '/img/ads1.jpg', href: '' },
   { url: '/img/ads1.jpg', href: '' },
   { url: '/img/ads1.jpg', href: '' },
   { url: '/img/ads1.jpg', href: '' },
   { url: '/img/ads1.jpg', href: '' },
   { url: '/img/ads1.jpg', href: '' },
]
export { categories, Items, Banners, ads, colors }
