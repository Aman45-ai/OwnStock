import React from 'react'

const ProductContent = () => {
    const products = [
        {
            id: 1,
            name: "MacBook Air M3",
            brand: "Apple",
            category: "Laptop",
            price: 114900,
            purchaseDate: "12 Jan 2026",
            warrantyExpiry: "12 Jan 2027",
            image: "/images/macbook.jpg",
        },
        {
            id: 2,
            name: "iPhone 16 Pro",
            brand: "Apple",
            category: "Mobile",
            price: 134900,
            purchaseDate: "05 Feb 2026",
            warrantyExpiry: "05 Feb 2027",
            image: "/images/iphone.jpg",
        },
        {
            id: 3,
            name: "Bravia 55 inch 4K TV",
            brand: "Sony",
            category: "Television",
            price: 74990,
            purchaseDate: "18 Nov 2025",
            warrantyExpiry: "18 Nov 2026",
            image: "/images/sony-tv.jpg",
        },
        {
            id: 4,
            name: "Galaxy S25 Ultra",
            brand: "Samsung",
            category: "Mobile",
            price: 129999,
            purchaseDate: "22 Mar 2026",
            warrantyExpiry: "22 Mar 2027",
            image: "/images/s25.jpg",
        },
        {
            id: 5,
            name: "Double Door Refrigerator",
            brand: "LG",
            category: "Kitchen Appliances",
            price: 58990,
            purchaseDate: "10 Aug 2025",
            warrantyExpiry: "10 Sep 2026",
            image: "/images/refrigerator.jpg",
        },
        {
            id: 6,
            name: "WH-1000XM5",
            brand: "Sony",
            category: "Others",
            price: 29990,
            purchaseDate: "15 Dec 2024",
            warrantyExpiry: "15 Dec 2025",
            image: "/images/headphones.jpg",
        },
    ]
    const today = Date.now()
    let warrantyStatus
    return (
        <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {products.map((values) => {
                const formattedPurchaseDate = new Date(values.purchaseDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                })
                const formattedWarrantyDate = new Date(values.warrantyExpiry).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                })
                const expiryDate = new Date(values.warrantyExpiry).getTime()
                const warrantyTimeLeft = expiryDate - today
                const daysLeft = warrantyTimeLeft / (1000 * 60 * 60 * 24)
                if (daysLeft > 0 && daysLeft <= 30) {
                    warrantyStatus = "Expiring Soon"
                } else if (daysLeft > 30) {
                    warrantyStatus = "Active"
                } else {
                    warrantyStatus = "Expired"
                }
                return (
                    <div key={values.id}>
                        <h3>{values.name}</h3>
                        <p>{values.brand}</p>
                        <h1>{values.price}</h1>
                        <h1>{warrantyStatus}</h1>
                        <div>
                            <h3>Purchased on</h3>
                            <span>{formattedPurchaseDate}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductContent
