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

const wrapper = document.querySelector('.slider-wrapper');

const links = document.querySelectorAll('.bottom-item');

const productImg = document.querySelector('.product-img');
const productName = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price');

const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size');

sizes.forEach((size,index)=>{
  size.addEventListener('click',()=>{
sizes.forEach((size)=>{
  size.style.backgroundColor = "white";
  size.style.color = "black";
});
size.style.backgroundColor = "black";
size.style.color = "white";
  })
})

// sizes.forEach((size,index)=>
// {
//   size.addEventListener('click',()=>{
//    sizes.forEach((size)=>{
//     size.style.backgroundColor = "white";
//     size.style.color = "black";
//    });
//    size.style.backgroundColor = "black";
//    size.style.color = "white";
//   })
// })




links.forEach((link,index)=>{
  link.addEventListener('click',()=>
  {
    console.log(link,index);
    wrapper.style.transform = `translateX(${-100*index}vw)`;

    const choosenProduct = products[index]; 
    productName.textContent = choosenProduct.title;
    productPrice.textContent = choosenProduct.price;
    productImg.src = choosenProduct.colors[0].img;

    colors.forEach((color,index)=>{
      color.style.backgroundColor = choosenProduct.colors[index].code;
color.addEventListener('click',()=>{
productImg.src= choosenProduct.colors[index].img;
})
    })

  })
})