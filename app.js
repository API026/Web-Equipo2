
const url = 'http://api.tvmaze.com/shows';

    fetch(url)
        .then(Response => Response.json())
        .then(data =>{
    
            let element = document.getElementById('elem')
            for(let i = 0; i<239; i++){
                if(data[i].image.original){
                    element.innerHTML += `<article class="show-card shadow">
                <div class="container-display">
                    <img src="${data[i].image.original}"></img>
                    <p class="rate">Rate: ${data[i].rating.average}</p>    
                </div>
                <ul class = "card-cont">
                    <h4 class= "">${data[i].name}</h4>
                    <li><p>País: <strong>${data[i].network.country.name}</strong></p></li>
                    <li><p>Canal de transmición: <strong>${data[i].network.name}</strong></p></li>
                    <li><p>Generos: <strong>${data[i].genres}</strong></p></li>
                    <br>
                    <li><p>${data[i].summary}</p></li>
                </ul>
                </article>
                `
                }
                
            }
            console.log(data)
        })
        .catch(err=>console.log(err))
  
