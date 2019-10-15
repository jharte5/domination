function setImgWithId (idStr, urlStr) {
    const str = document.querySelector(idStr);
    str.src = urlStr;
    height30(document.getElementById("image-1"))
}
setImgWithId('#image-1', 'https://media3.giphy.com/media/U3qYN8S0j3bpK/giphy.webp?cid=790b7611f333be2344609cc745a645f9921ae87436a85fe1&rid=giphy.webp');
setImgWithId('#image-2', 'https://media3.giphy.com/media/3ohhwtfOtCraTNUTYI/giphy.webp?cid=790b76116dc1b76e5a670d99aa3e4a2e3eb02700a49e6029&rid=giphy.webp');
setImgWithId('#image-3', 'https://media2.giphy.com/media/11Tsyjflf2xq2A/200.webp?cid=790b7611571c847350f2ff91f553ff4c8df96da3f0fcfd45&rid=200.webp');

function lineThruText () {
    const thruText = document.querySelector('ul li:first-child');
    thruText.style.textDecoration = 'line-through';
}
lineThruText();

function removeListItem () {
    const remItem = document.getElementById('arguments');
    const listItem = remItem.getElementsByTagName('li')
//const lastLi = document.querySelector('ul>li:lastchild')
    let last = listItem[listItem.length - 1];
    remItem.removeChild(last);
}

removeListItem();
removeListItem();

function appendNewArgument (element) {
    const newElement = document.getElementById('arguments');
    newElement.appendChild(element);
}
const newImg = document.createElement('https://media2.giphy.com/media/11Tsyjflf2xq2A/200.webp?cid=790b7611571c847350f2ff91f553ff4c8df96da3f0fcfd45&rid=200.webp');
appendNewArgument(newImg);

function height30 (image) {
    image.style.height = "30px";
}

function invisible (element) {
    element.classList.add("invisible");
    //element.classname = 'invisible';
}

invisible(document.getElementById('thing-2'));

function fontId(font, id){
    id.style.fontSize = font;
}

fontId('35px', document.getElementById('thing-c'))
fontId('10px', document.getElementById('thing-1'))

function txt (txt1,txt2) {

}