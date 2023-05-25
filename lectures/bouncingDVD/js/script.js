// console.log('js file connected')

var logo = document.createElement('img')
logo.src = './images/404Error.png'
logo.alt = '404 Error'
document.getElementById('dvd').appendChild(logo)
logo.className = 'logo'

// maybe tell it a specific direction to move
// x/y to help move
// speed that it will move
// what to do if it hits an obstacle
// changes color/speed/?? when it hits obstacle
// need to know the size of the screen / area

// already have a way to call the images

// for loop
// conditionals
// functions
// array - of the colors or changeable objects


// animate logo
// where to start
// where to move
// what color to start
// what color to change

// Step #1
let x = 0, y = 0, dirX = 1, dirY = 1
const speed = 2
const colors = ["magenta", "white", "teal", "orange", "green"]
const size = [2, 6, 10, 12, 8]

let dvd = document.getElementById("dvd")
dvd.style.backgroundColor = colors[0]

const dvdWidth = dvd.clientWidth
const dvdHeight = dvd.clientHeight
// console.log("logo width",logoWidth)
const screenWidth = document.body.clientWidth
const screenHeight = document.body.clientHeight
// console.log("screen width",screen)

function randColor() {
    let colorIndex = Math.floor(Math.random() * colors.length)
    return colors[colorIndex]
}
function randSize() {
    let sizeIndex = Math.floor(Math.random() * size.length)
    return size[sizeIndex]
}
// console.log(randColor())
function randomChanges() {
    let bg = dvd.style.backgroundColor = randColor()
    let pad = dvd.style.padding = randSize() + "px"
    return bg, pad
}
// console.log(randomChanges())

function animate() {
    if( y + dvdHeight >= screenHeight || y < 0) {
        dirY *= -1
        randomChanges()
        console.log("1st if", dirY)
    }
    if( x + dvdWidth >= screenWidth || x < 0) {
        dirX *= -1
        randomChanges()
        console.log("2nd if", dirX)
    }
    x += dirX * speed
    y += dirY * speed
    dvd.style.left = x + "px"
    dvd.style.top = y + "px"
    console.log("new x", x, "new y", y)
    window.requestAnimationFrame(animate)
}
window.requestAnimationFrame(animate)