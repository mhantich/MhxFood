export interface Category {
    name: string;
    _id: string;
    // add other category properties as needed
  }
  export interface Meal {
    name: string;
    _id: string;
    price: number;
    description: string;
    image: string;
    category: string;
    type: string;
    isPopular: boolean;


    // add other meal properties as needed
  }
  export interface Table {
    _id: string;
    tableNumber: string;
    capacity: number;
    isAvailable: boolean;
  }
  