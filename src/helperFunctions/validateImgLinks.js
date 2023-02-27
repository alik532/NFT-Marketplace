export function getValidImgLink(link) {
    let i = link.length - 1
    while (link[i] !== '?') 
        i--
    return link.slice(0, i+1) + 'w=1920' + link.slice(i+1, link.length)
}