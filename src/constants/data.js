import images from './images';

const menu = [
  {
    title: 'Artisanal Appetizers',
    description: 'Fresh ceviche with mango, avocado, and citrus-infused seafood medley.',
    tags: 'Sea bass, Shrimp, Mango, Avocado',
  },
  {
    title: 'Global Fusion Entree',
    description: 'Grilled ribeye steak marinated in zesty chimichurri sauce, served with sweet potato puree.',
    tags: 'Ribeye steak, Chimichurri sauce, Sweet potato puree, Grilled vegetables',
  },
  {
    title: 'Epicurean Indulgences',
    description: 'Creamy cheesecake with a tropical twist of passion fruit, topped with mango coulis.',
    tags: 'Cream cheese, Passion fruit, Mango coulis, Graham cracker crust',
  },
];

const seasonal_menu = [
  {
    title: 'Butternut Squash Sage Risotto',
    description: 'Creamy risotto with roasted butternut squash, sage, and Parmesan cheese.',
    tags: ' Arborio rice, Butternut squash, Sage, Parmesan cheese',
  },
  {
    title: 'Mango Coconut Basil Sorbet',
    price: 'Refreshing sorbet with the tropical combination of mango, coconut, and fresh basil.',
    tags: 'Mango, Coconut milk, Basil, Simple syrup',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Michelin Guide',
    subtitle: 'Three Michelin Stars (2023)',
  },
  {
    imgUrl: images.award01,
    title: 'James Beard Foundation',
    subtitle: 'Outstanding Chef of the Year(2022)',
  },
  {
    imgUrl: images.award03,
    title: 'Worlds 50 Best Restaurants',
    subtitle: 'Top 5 Restaurants Worldwide(2021)',
  },
];

export default { menu, seasonal_menu, awards };
