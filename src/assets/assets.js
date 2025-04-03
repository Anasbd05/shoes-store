import shoe1 from "./shoe-1.jpg"
import shoe2 from "./shoe-2.jpg"
import shoe3 from "./shoe-3.jpg"
import shoe4 from "./shoe-4.png"
import shoe5 from "./shoe-5.jpg"
import shoe6 from "./shoe-6.jpg"
import shoe7 from "./shoe-7.jpg"
import shoe8 from "./shoe-8.jpg"
import shoe9 from "./shoe-9.jpg"
import shoe10 from "./shoe-10.jpg"
import shoe15 from "./shoe-15.jpg"
import shoe16 from "./shoe-16.png"
import shoe17 from "./shoe-17.png"

import shoe_s1 from "./shoe-s1.jpg"
import shoe_s2 from "./shoe-s2.jpg"
import shoe_s3 from "./shoe-s3.jpg"

import thumb_s1_1 from "./thumb-1.jpg"
import thumb_s1_2 from "./thumb-2.jpg"
import thumb_s1_3 from "./thumb-3.jpg"

import thumb_s2_1 from "./thumb-11.jpg"
import thumb_s2_2 from "./thumb-12.jpg"
import thumb_s2_3 from "./thumb-13.jpg"

import thumb_s3_1 from "./thumb-21.jpg"
import thumb_s3_2 from "./thumb-22.jpg"
import thumb_s3_3 from "./thumb-23.jpg"
import { CheckCheck, CheckCircle, Truck } from "lucide-react"









export const shoes = [
    {
        id: 14,
        title: "Elite Runner",
        description: "Limited edition shoe with premium materials.",
        longDesc: "The Elite Runner is designed for those who demand the best. Made with top-tier materials, this limited-edition shoe offers exceptional durability, comfort, and a sleek design. Perfect for athletes and sneaker enthusiasts alike, it provides superior cushioning and support for long-distance runs or everyday wear.",
        price: 400,
        image: shoe_s1,
        thumbs: [
            { id: 1, thumbPic: thumb_s2_1 },
            { id: 2, thumbPic: thumb_s2_2 },
            { id: 3, thumbPic: thumb_s2_3 }
        ],
        sizes: [38, 39, 40, 41, 42, 43, 44]
    },
    {
        id: 15,
        title: "Speed Pro",
        description: "High-performance shoe with cutting-edge design.",
        longDesc: "Engineered for speed and agility, the Speed Pro offers a lightweight design combined with cutting-edge materials for maximum performance. The aerodynamic shape and responsive cushioning make it an excellent choice for runners, sprinters, and athletes looking for an edge in their training or competitions.",
        price: 420,
        image: shoe_s2,
        thumbs: [
            { id: 4, thumbPic: thumb_s3_1 },
            { id: 5, thumbPic: thumb_s3_2 },
            { id: 6, thumbPic: thumb_s3_3 }
        ],
        sizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 16,
        title: "Ultra Glide",
        description: "Ultra-lightweight sneaker with maximum comfort.",
        longDesc: "Designed for those who prioritize comfort, the Ultra Glide provides an ultra-lightweight experience with breathable materials and a flexible sole. Whether you're running errands, going for a jog, or just looking for an everyday shoe, this sneaker ensures you stay comfortable throughout the day.",
        price: 440,
        image: shoe_s3,
        thumbs: [
            { id: 7, thumbPic: thumb_s1_1 },
            { id: 8, thumbPic: thumb_s1_2 },
            { id: 9, thumbPic: thumb_s1_3 }
        ],
        sizes: [38, 39, 40, 41, 42, 43]
    },    
    {
        id: 1,
        title: "Trail Master",
        description: "High-quality running shoe with enhanced grip and comfort.",
        longDesc: "The Trail Master is built for outdoor enthusiasts. Featuring a rugged outsole for superior grip and a cushioned midsole for maximum comfort, this shoe is ideal for trail running, hiking, or exploring rough terrains. Experience stability and protection with every step.",
        price: 300,
        image: shoe1,
        sizes: [38, 39, 40, 41, 42, 43, 44]
    },
    {
        id: 2,
        title: "Urban Flex",
        description: "Stylish sneaker designed for all-day wear.",
        longDesc: "Blending style and functionality, the Urban Flex is a must-have for city dwellers. Featuring a breathable mesh upper, flexible sole, and a sleek design, this sneaker keeps you comfortable and fashionable throughout the day—whether at work, school, or a night out.",
        price: 320,
        image: shoe2,
        sizes: [39, 40, 41, 42, 43, 44]
    },
    {
        id: 3,
        title: "Sport Active",
        description: "Durable sports shoe with breathable material.",
        longDesc: "Designed for sports and active lifestyles, the Sport Active features a high-quality construction with breathable mesh and a shock-absorbing midsole. Whether you're hitting the gym or going for a run, this shoe offers durability and comfort in every movement.",
        price: 350,
        image: shoe3,
        sizes: [40, 41, 42, 43, 44, 45]
    },
    {
        id: 4,
        title: "Casual Elite",
        description: "Elegant and comfortable casual shoe.",
        longDesc: "A perfect blend of elegance and comfort, the Casual Elite is designed for those who want style without compromising comfort. Featuring a soft insole, premium materials, and a minimalist look, this shoe is ideal for casual outings or business-casual settings.",
        price: 280,
        image: shoe4,
        sizes: [38, 39, 40, 41, 42]
    },
    {
        id: 5,
        title: "Comfort Glide",
        description: "Lightweight walking shoe with soft cushioning.",
        longDesc: "Engineered for all-day walking comfort, the Comfort Glide offers lightweight construction and soft cushioning. Whether you're commuting, traveling, or simply strolling around, this shoe provides support and ease with every step.",
        price: 310,
        image: shoe5,
        sizes: [39, 40, 41, 42, 43]
    },
    {
        id: 6,
        title: "Daily Motion",
        description: "Sporty and fashionable sneaker for everyday use.",
        longDesc: "Daily Motion is your go-to sneaker for everyday adventures. With a stylish design and breathable upper, it provides lasting comfort while keeping you looking fresh. Perfect for casual outings or light workouts.",
        price: 290,
        image: shoe6,
        sizes: [40, 41, 42, 43, 44]
    },
    {
        id: 7,
        title: "Classic Runner",
        description: "Classic running shoe with durable sole.",
        longDesc: "A timeless running shoe that never goes out of style. The Classic Runner is crafted with high-quality materials, a durable sole, and superior cushioning to provide optimal performance and support for runners of all levels.",
        price: 330,
        image: shoe7,
        sizes: [38, 39, 40, 41, 42, 43]
    },
    {
        id: 8,
        title: "Street Style",
        description: "Trendy and supportive high-top sneaker.",
        longDesc: "Step up your fashion game with Street Style, a high-top sneaker that combines trendiness and support. With a sturdy design and comfortable fit, this shoe provides both style and functionality, making it perfect for casual outings and social gatherings.",
        price: 340,
        image: shoe8,
        sizes: [39, 40, 41, 42, 43, 44]
    },
    {
        id: 9,
        title: "Pro Athlete",
        description: "Premium quality sports shoe for high performance.",
        longDesc: "Designed for elite athletes, the Pro Athlete shoe offers premium quality materials for the ultimate performance. With enhanced grip, shock absorption, and support, it's perfect for high-intensity sports and demanding workouts, ensuring you stay at the top of your game.",
        price: 360,
        image: shoe9,
        sizes: [40, 41, 42, 43, 44, 45]
    },
    {
        id: 10,
        title: "Modern Luxe",
        description: "Sleek and stylish footwear for casual wear.",
        longDesc: "For those who appreciate elegance, the Modern Luxe is a stylish and sleek shoe designed for casual wear. Featuring a minimalistic yet refined design, it's perfect for any occasion, offering comfort and sophistication in one package.",
        price: 380,
        image: shoe10,
        sizes: [39, 40, 41, 42, 43, 44]
    },
    {
        id: 11,
        title: "Flex Comfort",
        description: "Comfortable and flexible shoe with a modern design.",
        longDesc: "The Flex Comfort shoe combines modern design with unbeatable comfort. Its flexible sole and cushioned insole provide all-day wearability, making it perfect for both active days and relaxed occasions.",
        price: 300,
        image: shoe15,
        sizes: [38, 39, 40, 41, 42, 43]
    },
    {
        id: 12,
        title: "Grip Master",
        description: "All-terrain running shoe with superior grip.",
        longDesc: "Whether you're running on trails, roads, or uneven surfaces, the Grip Master provides superior traction and stability. Its durable outsole and cushioned midsole offer both comfort and protection, making it perfect for all-terrain runners.",
        price: 320,
        image: shoe16,
        sizes: [39, 40, 41, 42, 43, 44]
    },
    {
        id: 13,
        title: "Agile Boost",
        description: "Lightweight sports shoe for enhanced agility.",
        longDesc: "The Agile Boost is designed for athletes who demand speed and agility. With a lightweight build and responsive cushioning, this shoe helps you make quick movements and explosive bursts, making it ideal for competitive sports or high-speed training.",
        price: 340,
        image: shoe17,
        sizes: [40, 41, 42, 43, 44, 45]
    }
];


export const BestSeller = [
    {
        id: 1,
        title: "Classic Runner",
        description: "Classic running shoe with durable sole.",
        price: 330,
        image: shoe7,
    },
    {
        id: 3,
        title: "Flex Comfort",
        price: 300,
        image: shoe15,
    },
    {
        id: 2,
        title: "Grip Master",
        description: "All-terrain running shoe with superior grip.",
        price: 320,
        image: shoe16,
    },
    {
        id: 4,
        title: "Ultra Glide",
        description: "Ultra-lightweight sneaker with maximum comfort.",
        price: 440,
        image: shoe_s3,        
    },    
    {
        id: 5,
        title: "Trail Master",
        description: "High-quality running shoe with enhanced grip and comfort.",
        price: 300,
        image: shoe1,
    }
]

export const provides = [
    {
        title :  "High-quality and stylish shoes",
        icon : <CheckCheck  className="w-14 h-14 font-bold"/>
    } ,
    {
        title :  "Free Shipping",
        icon : <Truck className="w-14 h-14 font-bold" />
    } ,
    {
        title :  "7 Days Return Policy",
        icon : <CheckCircle className="w-14 h-14 font-bold"/>
    } ,
]