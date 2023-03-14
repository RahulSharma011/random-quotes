const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote")
const author = document.getElementById("author")

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getquote(api_url)
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " --- By"+ author.innerHTML, "Tweet Window","width = 600, height=300")
}


const getColor =() =>{
    //hax code
    const getnumber= Math.floor( Math.random() * 16777215);
    const randomCode = "#" + getnumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    
}
document.getElementById("btn").addEventListener(
    "click",
    getColor,
)
