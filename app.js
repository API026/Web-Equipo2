
const url = 'http://api.tvmaze.com/shows';

    fetch(url)
        .then(Response => Response.json())
        .then(data =>{
    
            let element = document.getElementById('elem')
            for(let i = 0; i<239; i++){
                if(data[i].image.original){
                    element.innerHTML += `<article class="show-card shadow">
                    <img src="${data[i].image.original}"></img>
                    <ul class = "card-cont">
                        <div class="aux-list-cont">
                            <h4 class= "">${data[i].name}</h4>
                            <p class = "description ">Rate: ${data[i].rating.average}</p>    
                        </div>
                        <li><p class = "description ">País: ${data[i].network.country.name}</p></li>
                        <li><p class = "description ">Canal de transmición: ${data[i].network.name}</p></li>
                        <li><p class = "description ">Generos: ${data[i].genres}</p></li>
                        <li><p class = "description ">Descrpción: ${data[i].summary}</p></li>
                    </ul>
                    </article>
                    `
                }
                
            }
            console.log(data)
        })
        .catch(err=>console.log(err))
        


