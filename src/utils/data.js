import bcrypt from "bcryptjs"

const data = {
    users:[
        {
            name:"sameer",
            email:'admin@example.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:true,

        },
        {
            name:"aditya",
            email:'user@example.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:false,
        },
    ],
    products: [
        {
            name: 'free shirt',
            slug: 'free-shirt',
            category: "Shirts",
            image: "/images/hoodie5.jpg",
            price: 70,
            brand: "nike",
            rating: 4.4,
            numReview: 20,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            name: 'free shirt',
            slug: 'tee-shirt',
            category: "Shirts",
            image: "/images/hoodie6.jpg",
            price: 70,
            brand: "Raymond",
            rating: 4.4,
            numReview: 20,
            countInStock: 24,
            description: 'A popular shirt',
        },

        {
            name: 'slim shirt',
            slug: 'Slim-shirt',
            category: "Shirts",
            image: "/images/hoodie3.jpg",
            price: 70,
            brand: "Adidas",
            rating: 4.4,
            numReview: 20,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            name: 'Golf pant',
            slug: 'Golf-pant',
            category: "Pants",
            image: "/images/hoodie4.jpg",
            price: 90,
            brand: "Oliver",
            rating: 2.4,
            numReview: 13,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            name: 'jeans pant',
            slug: 'Jeans-pant',
            category: "Pants",
            image: "/images/hoodie5.jpg",
            price: 90,
            brand: "Nike",
            rating: 2.4,
            numReview: 13,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            name: 'jeans pant',
            slug: 'formal-pant',
            category: "Pants",
            image: "/images/hoodie6.jpg",
            price: 120,
            brand: "Nike",
            rating: 2.4,
            numReview: 13,
            countInStock: 20,
            description: 'A popular shirt',
        },


    ],
}
export default data;