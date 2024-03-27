
const apiUrl = `https://newsdata.io/api/1/news?apikey=pub_40769e7d39ba1a3bd51d4e7079bb0d6889a73&q=stock%20market&country=in&language=en&category=business`;

let arr = ["https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png","https://st2.depositphotos.com/2493575/5398/i/950/depositphotos_53989081-stock-photo-black-texture.jpg","https://htmlcolorcodes.com/assets/images/colors/green-color-solid-background-1920x1080.png"]
fetch(apiUrl)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data)
    for(let i =0; i<data.results.length; i++){
            if(data.results[i].image_url == null){
                data.results[i].image_url = arr[Math.floor(Math.random()*arr.length)]
            }
            if(data.results[i].description == null){
                data.results[i].description = "visit this link given here.."
            }
            if(data.results[i].description.length>300){
              data.results[i].description = "visit this link given here.."
            }
        document.getElementsByClassName("card_container")[0].innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${data.results[i].image_url}" alt="Card image cap" style="width: 18rem;height: 10rem; border-radius:10px">
        <div class="card-body">
          <h5 class="card-title">${data.results[i].title}</h5>
          <h5><br></h5>
          <h7 style="margin:10px 0">${data.results[i].pubDate}</h7>
          <h5><br></h5>
          <p class="card-text" maxlength="300">${data.results[i].description}</p>
          <button "><a href="${data.results[i].link}" style="text-decoration:none">Visit here</a></button>
        </div>
      </div>`
}
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
  
