import product from '../../../assets/product.png'

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

        },
        {
            id: 2,
            name: "iPhone 16 Pro",
            brand: "Apple",
            category: "Mobile",
            price: 134900,
            purchaseDate: "05 Feb 2026",
            warrantyExpiry: "05 Feb 2027",

        },
        {
            id: 3,
            name: "Bravia 55 inch 4K TV",
            brand: "Sony",
            category: "Television",
            price: 74990,
            purchaseDate: "18 Nov 2025",
            warrantyExpiry: "18 Nov 2026",

        },
        {
            id: 4,
            name: "Galaxy S25 Ultra",
            brand: "Samsung",
            category: "Mobile",
            price: 129999,
            purchaseDate: "22 Mar 2026",
            warrantyExpiry: "22 Mar 2027",

        },
        {
            id: 5,
            name: "Double Door Refrigerator",
            brand: "LG",
            category: "Kitchen Appliances",
            price: 58990,
            purchaseDate: "10 Aug 2025",
            warrantyExpiry: "10 Sep 2026",

        },
        {
            id: 6,
            name: "WH-1000XM5",
            brand: "Sony",
            category: "Others",
            price: 29990,
            purchaseDate: "15 Dec 2024",
            warrantyExpiry: "15 Dec 2025",

        },
        {
            id: 7,
            name: "Dyson V15 Detect",
            brand: "Dyson",
            category: "Kitchen Appliances",
            price: 62900,
            purchaseDate: "08 Apr 2026",
            warrantyExpiry: "08 Apr 2027",

        },
        {
            id: 8,
            name: "Dell XPS 13",
            brand: "Dell",
            category: "Laptop",
            price: 119990,
            purchaseDate: "21 May 2026",
            warrantyExpiry: "21 May 2027",

        },
        {
            id: 9,
            name: "Sony WH-1000XM5",
            brand: "Sony",
            category: "Others",
            price: 29990,
            purchaseDate: "15 Jun 2026",
            warrantyExpiry: "15 Jun 2027",

        },
    ]
    const today = Date.now()


    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 py-2 gap-7'>
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
                let warrantyStatus
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
                    <div key={values.id} className='border border-zinc-700 rounded-2xl px-4 hover:-translate-y-1 duration-300 transition-all cursor-pointer'>
                        <div className='w-full max-w-80 mx-auto'>
                            <div className='flex items-center gap-2 py-2'>
                                <div className='w-30'>
                                    <img src={product} alt="" className='w-full rounded-2xl' />
                                </div>
                                <div>
                                    <h3 className='text-white text-lg'>{values.name}</h3>
                                    <p className='text-zinc-500 text-sm'>{values.brand}</p>
                                    <h1 className='text-[#08b6a8] text-xl'>₹ {values.price}</h1>
                                    <h1>{warrantyStatus}</h1>
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-2 border-t border-zinc-700 px-4 py-2'>
                                <div className='text-sm'>
                                    <h3 className='text-zinc-400'>Purchased on</h3>
                                    <span className='text-zinc-300 font-semibold'>{formattedPurchaseDate}</span>
                                </div>
                                <div className='text-sm' >
                                    <h3 className='text-zinc-400'>Warranty till</h3>
                                    <span className='text-zinc-300 font-semibold'>{formattedWarrantyDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductContent
