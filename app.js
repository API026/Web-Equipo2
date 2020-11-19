
    const url = 'http://api.tvmaze.com/shows';

    fetch(url)
        .then(Response => Response.json())
        .then(data =>{
    
            let element = document.getElementById('elem')
            for(let i = 0; i<239; i++){
               
                element.innerHTML += `<article class="show-card shadow">
                <img src="${data[i].image.original}"></img>
                <ul class = "card-cont"><h4 class= "white-lt">${data[i].name}</h4>
            
                <ul>
                    <li><p class = "description white-lt">Calificación: ${data[i].rating.average}</p></li>    
                    <li><p class = "description white-lt">País: ${data[i].network.country.name}</p></li>
                    <li><p class = "description white-lt">Canal de transmición: ${data[i].network.name}</p></li>
                    <li><p class = "description white-lt">Generos: ${data[i].genres}</p></li>
                    <li><p class = "description white-lt">Descrpción: ${data[i].summary}</p></li>
                </ul>
                </ul>
                </article>
                `
            }
            console.log(data)
        })
        .catch(err=>console.log(err))
        


