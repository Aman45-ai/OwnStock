export const Warranty = (values) => {
    const today = Date.now()
    if (values.warrantyExpiry) {
        const expiryDate = new Date(values.warrantyExpiry).getTime()
        const warrantyTimeLeft = expiryDate - today
        const daysLeft = Math.floor(warrantyTimeLeft / (1000 * 60 * 60 * 24))
        if (daysLeft > 0 && daysLeft <= 30) {
            return {
                status:"Expiring Soon",
                daysLeft
            }
        } else if (daysLeft > 30) {
            return {
                status:"Active",
                daysLeft
            }
        } else {
            return {
                status:"Expired",
                daysLeft:0
            }
        }
    }else{
        return {
                status:"Warranty Unavailable",
                daysLeft:null
            }
    }
}

