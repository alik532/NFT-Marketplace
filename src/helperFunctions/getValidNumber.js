export const getValidNumber = (n) => {
    return n >= 1000 ? `${(n / 1000).toFixed(1)}K` : n 
}