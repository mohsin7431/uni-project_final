let slide=document.querySelectorAll(".slidecard");
let card=document.querySelectorAll(".card");
let count=0 ;
 slide.forEach(function(slides,index){
slides.style.left=`${index*100}%`

 })
 function myfun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count*100}%)`
    })
 }
 setInterval(function(){
    count++;
    if (count== slide.length){
        count=0
    }
    myfun();
  //  console.log("Hello World");
 },
 2000
)
//card detail
card.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log(cards.firstElementChild.src);
        document.querySelector(".container").style.display="none";

        let div=document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`<img src=${cards.firstElementChild.src} alt="">
        <div class="cardText">
            <h2>top Trending</h2>
            <h2>Review</h2>
            <p>If you waant to buy this shoes please order now.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>
        </div>`
        document.querySelector("body").appendChild(div)
    })
})