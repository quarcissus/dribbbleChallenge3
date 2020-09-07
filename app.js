const macWrapper = document.querySelector(".mac-wrapper");
console.log(macWrapper.children[0])

for (let i = 0; i < macWrapper.children.length; i++) {
    let deg = Math.random() * 180
    macWrapper.children[i].style.webkitTransform = 'rotate(' + deg + 'deg)';
    macWrapper.children[i].style.mozTransform = 'rotate(' + deg + 'deg)';
    macWrapper.children[i].style.msTransform = 'rotate(' + deg + 'deg)';
    macWrapper.children[i].style.oTransform = 'rotate(' + deg + 'deg)';
    macWrapper.children[i].style.transform = 'rotate(' + deg + 'deg)';
}