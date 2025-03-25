
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


const card = document.querySelector(".main-cards")


const mapCard = cards.map((card, index)=>(
    `
     <article class="speaker-container" key='${index}'>
                    <div><img src="${card.image}" alt="#"></div>
                    <div>
                        <h4 class="author-name">${card.name}</h4>
                    <p class="desc">${card.title}</p>
                    <p>${card.description}</p>
                    </div>
                </article>
    
    ` 
))

card.innerHTML=mapCard;