import { FoodItem, Category } from '@/types';


export const categories: Category[] = [
  {
    id: 'all',
    name: 'All Items',
    description: 'Browse all available menu items'
  },
  {
    id: 'Main Courses',
    name: 'Mains',
    description: 'Hearty meals and main dishes'
  },
  {
    id: 'Snacks',
    name: 'Snacks',
    description: 'Lively if you prefer light meals'
  },
  {
    id: 'Veg',
    name: 'Veg',
    description: 'Veg items for vegeterians'
  },
  {
    id: 'Non veg',
    name: 'Non veg',
    description: 'Non veg items for non vegeterians'
  },
  {
    id: 'Beverages',
    name: 'Beverages',
    description: 'Refreshing drinks and coffee'
  }
];

export const foodItems: FoodItem[] = [
  { 
    id: "1", 
    name: "Parotta & Beef Curry", 
    price: 40.00, 
    category: ["Main Courses","Non veg"],
    description: "Soft Kerala parottas served with spicy beef curry.", 
    image:"/images/porota_new.jpg",
    availability:true
 
  },
  { 
    id: "2", 
    name: "Chicken Biryani", 
    price: 70.00, 
    category: ["Main Courses","Non veg"], 
    description: "Traditional Kerala-style chicken biryani with raita & pickle.", 
    image:"/images/biry1.jpg",
    availability:true
  },
  { 
    id: "3", 
    name: "Masala Dosa", 
    price: 30.00, 
    category: ["Veg","Main Courses"], 
    description: "Crispy dosa stuffed with spiced potato filling, served with chutney & sambar.", 
    image:"/images/dosa1.jpg",
    availability:true
  },
  { 
    id: "4", 
    name: "Lime Juice", 
    price: 15.00, 
    category: "Beverages", 
    description: "Refreshing lime juice with a hint of salt and sugar.", 
    image: '/images/lime.jpg',
    availability:true
  },
  { 
    id: "5", 
    name: "Samosa", 
    price: 10.00, 
    category:["Snacks","Veg"], 
    description: "Crispy fried pastry filled with spicy potato masala.", 
    image: '/images/samosa1.jpg',
    availability:true

  },
  { 
    id: '6', 
    name: "Tea", 
    price: 10.00, 
    category: "Beverages", 
    description: "Strong Kerala-style black tea with milk and sugar.", 
    image: '/images/tea1.jpg',
    availability: true
  },
  { 
    id: '7', 
    name: "Coffee", 
    price: 15.00, 
    category: "Beverages", 
    description: "Freshly brewed hot coffee with milk and sugar.", 
    image: '/src/assets/food/coffee.jpg',
    availability: true
  }
  
];