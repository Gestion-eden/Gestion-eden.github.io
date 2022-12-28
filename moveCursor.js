let innerCursor=document.querySelector('.inner-cursor');
let outerCursor=document.querySelector('.outer-cursor');


function moveCursor(e){
    let x=e.clientX;
    let y=e.clientY;
    console.log(x, y);
    innerCursor.style.left=`${x}px`;
    innerCursor.style.top=`${y}px`;
    outerCursor.style.left=`${x}px`;
    outerCursor.style.top=`${y}px`;
}



document.addEventListener("mousemove",moveCursor);


let links=Array.from(document.querySelectorAll("a, button"));

links.forEach((link)=>{
    link.addEventListener('mouseover',()=>{
        innerCursor.classList.add('grow');

    });
    link.addEventListener('mouseleave',()=>{
        innerCursor.classList.remove('grow');

    });
})