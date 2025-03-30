// header
const Menu = document.getElementById('menu');
const nav = document.querySelector('.nav-items');


Menu.addEventListener('click', () => {
    if (nav.style.visibility === 'visible') {
        nav.style.visibility = 'hidden';
        
    } else {
        nav.style.visibility = 'visible';
       
    }
});



const cards=[
    {
        image:"/Assets/images/speaker1.svg",
        name:"Yochai Benkler",
        title:"Berkman Professor of Entrepreuneurial Legal Studies at Harvard Law School",
        description:"Benkler studies commons-based peer production,and published his seminal book,The Wealth of Networks in 2006"
        
    },
    {
        image:"/Assets/images/speaker2.svg",
        name:"SohYeong Noh",
        title:"Director of Art Centre Nabi and a board member ofCC Korea",
        description:"As the main venue for new media art production in Korea.Nabi promotes cross-disciplinary collaboration and understanding among science technology,humanities,and the arts."
        
    },
    {
        image:"/Assets/images/speaker1.svg",
        name:"Yochai Benkler",
        title:"Berkman Professor of Entrepreuneurial Legal Studies at Harvard Law School",
        description:"Benkler studies commons-based peer production,and published his seminal book,The Wealth of Networks in 2006"
        
    },
    {
        image:"/Assets/images/speaker1.svg",
        name:"Yochai Benkler",
        title:"Berkman Professor of Entrepreuneurial Legal Studies at Harvard Law School",
        description:"Benkler studies commons-based peer production,and published his seminal book,The Wealth of Networks in 2006"
        
    },
    {
        image:"/Assets/images/speaker1.svg",
        name:"Yochai Benkler",
        title:"Berkman Professor of Entrepreuneurial Legal Studies at Harvard Law School",
        description:"Benkler studies commons-based peer production,and published his seminal book,The Wealth of Networks in 2006"
        
    },
    {
        image:"/Assets/images/speaker1.svg",
        name:"Yochai Benkler",
        title:"Berkman Professor of Entrepreuneurial Legal Studies at Harvard Law School",
        description:"Benkler studies commons-based peer production,and published his seminal book,The Wealth of Networks in 2006"
        
    },
    
]



// more button and function

const btnMore = document.getElementById('btn-more');
const btnHide = document.getElementById('btn-hide');
const card1 = document.querySelector('.main-cards');

card1.innerHTML = cards.map((card, index)=>{
    let className = '';
   if(index !== 0 && index !== 1){
     className = 'hide-card';
   }

   btnMore.addEventListener('click', ()=>{
   const hideCard = document.querySelectorAll('.hide-card');
   for(i = 0; i< hideCard.length; i++){
    hideCard[i].style.display = 'flex';
   }
   btnHide.style.display = 'block';
   btnMore.style.display = 'none'
   })

   btnHide.addEventListener('click', ()=>{
    const hideCard = document.querySelectorAll('.hide-card');
    for(i = 0; i< hideCard.length; i++){
     hideCard[i].style.display = 'none';
    }
    btnHide.style.display = 'none';
    btnMore.style.display = 'block'
    })
    return `
<article class="speaker-container ${className}" key='${index}'>
                    <div><img class="speaker-image" src="${card.image}" alt="#"></div>
                    <div>
                        <h4 class="author-name">${card.name}</h4>
                    <p class="desc">${card.title}</p>
                    <p>${card.description}</p>
                    </div>
                </article>
    `
}).join('')