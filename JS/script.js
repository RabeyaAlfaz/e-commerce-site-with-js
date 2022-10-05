console.log("js connected");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

// Details to be changed on click 

const productImg = document.querySelector('.product-img');

const productName = document.querySelector('.product-name');

const productPrice = document.querySelector('.product-price');

const sneakerColor = document.querySelectorAll('.color');



const wrapper = document.querySelector('.slider-wrapper');
const navItems = document.querySelectorAll('.bottom-item');
console.log(navItems);


navItems.forEach((item,index) => {
    item.addEventListener('click', ()=>{
        // console.log(item,index);

        // slide change
       wrapper.style.transform = `translatex(${-100*index}vw)`;

    //    change selected product 
       const choosenProduct = products[index];
      productImg.src=choosenProduct.colors[0].img;
      productName.textContent = choosenProduct.title;
      productPrice.textContent = choosenProduct.price;

    //   change color 
    
    console.log(sneakerColor);
    sneakerColor.forEach((color,index) => {
      color.addEventListener('click',()=>
      {
        productImg.src=choosenProduct.colors[index].img;
      })
    });

    

    })
    
});

const modalShow = document.querySelector('.person-info');
const buyBtn= document.querySelector('.product-buy-btn');
const crossIcon= document.querySelector('.cross-icon');

buyBtn.addEventListener('click',()=>{
  modalShow.style.display = "block";
})
crossIcon.addEventListener('click',()=>{
  modalShow.style.display = "none";
})