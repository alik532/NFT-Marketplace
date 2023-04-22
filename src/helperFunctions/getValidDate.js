export const getValidDate = (date) => {
    const list = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${list[(+(date.slice(5,7)))-1]} ${date.slice(0,4)}`
}