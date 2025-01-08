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

  export interface Reservation {
    reservationDate: string;
    startTime: string;
    endTime: string;
    tableId: string;

  }
  export interface User {
    _id: string;
    email: string;
    profileImage: string;
    createdAt: string;
    phone: string;
    lastName: string;
    firstName: string;
    
  }



  export interface CartItem {
    // define your cart item properties here
    _id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    // ... other properties
  }

  export interface Order {
    userId: string;
    tableId: string;
    reservationDate: string;
    startTime: string;
    endTime: string;
    customer: {
      firstName: string;
      lastName: string;
      email: string;
    };
    items: CartItem[];
    paymentMethod: string;
    specialInstructions: string;
  }

  export interface userOrder {
    _id: string;
    totalAmount: number;
    items: CartItem[];
    specialInstructions: string;
    customer: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
    };
    status: string;
    orderType: string;
    reservationId: string;
    userId: string;
    paymentStatus: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  }


