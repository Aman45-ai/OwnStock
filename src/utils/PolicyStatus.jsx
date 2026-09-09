export const PolicyStatus = (values) => {
    const today = Date.now()

    const expiryDate = new Date(values.expiryDate)
    const policyTimeLeft = expiryDate-today
    const daysLeft = Math.floor(policyTimeLeft/(1000*60*60*24))

    if (daysLeft >= 0 && daysLeft <= 30) {
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
}