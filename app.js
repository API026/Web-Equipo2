
const url = 'http://api.tvmaze.com/shows';

fetch(url)
    .then(Response => Response.json())
    .then(data => {

        let element = document.getElementById('elem')
        for (let i = 0; i < 239; i++) {

            element.innerHTML += `<article class="show-card shadow">
                <div class="container-display">
                    <img src="${data[i].image.original}"></img>
                    <p class="rate">Rate: ${data[i].rating.average}</p>    
                </div>
                <ul class = "card-cont">
                    <h4 class= "">${data[i].name}</h4>
                    <li><p>País: ${data[i].network.country.name}</p></li>
                    <li><p>Canal de transmición: ${data[i].network.name}</p></li>
                    <li><p>Generos: ${data[i].genres}</p></li>
                    <br>
                    <li><p>Descrpción: ${data[i].summary}</p></li>
                </ul>
                </article>
                `
        }
        console.log(data)
    })
    .catch(err => console.log(err))



