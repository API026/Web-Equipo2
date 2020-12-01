const url = 'https://apitvshows.herokuapp.com/api_tv_shows/shows/' //Constructor que guarda la url de nuestra API
fetch(url) //El fetch guarda nuestra url y empezamos con las condiciones 
    .then(respose => respose.json()) //Que nos responda con el json si es que funciona
    .then(data => { //nos devuelve los datos del mismo

        var string = ""; //declaramos variables el string guardará el nombre
        var cat = "";
        for (let i = 0; i < 18; i++) {
            string = data.All_shows[i].name;

            for (let j = 0; j < string.length; j++) {
                if (string[j] == " ") {
                    string[j] = "%20";
                }
            }

            cat = data.All_shows[i].category;

            fetch('http://api.tvmaze.com/search/shows?q=' + string)
                .then(response => response.json())
                .then(data => {
                    let element = document.getElementById('elem')
                    let element1 = document.getElementById('elem1')
                    let element2 = document.getElementById('elem2')

                    if (i >=0 && i <=5) {
                        element.innerHTML += `
                        <article class="show-card shadow">
                            <div class="container-display">
                                <img src="${data[0].show.image.original}"></img>
                                <p class="rate">Rate: ${data[0].show.rating.average}</p>    
                            </div>
                            <ul class = "card-cont">
                                <h4 class= "">${data[0].show.name}</h4>
                                <li><p>Generos: <strong>${data[0].show.genres}</strong></p></li>
                                <br>
                                <li><p>${data[0].show.summary}</p></li>
                            </ul>
                        </article>
                        `
                    } else if (i >=6 && i<=11) {
                        element1.innerHTML += `
                        <article class="show-card shadow">
                            <div class="container-display">
                                <img src="${data[0].show.image.original}"></img>
                                <p class="rate">Rate: ${data[0].show.rating.average}</p>    
                            </div>
                            <ul class = "card-cont">
                                <h4 class= "">${data[0].show.name}</h4>
                                <li><p>Generos: <strong>${data[0].show.genres}</strong></p></li>
                                <br>
                                <li><p>${data[0].show.summary}</p></li>
                            </ul>
                        </article>
                        `
                    } else if (i >= 12 && i<=18) {
                        element2.innerHTML += `
                        <article class="show-card shadow">
                            <div class="container-display">
                                <img src="${data[0].show.image.original}"></img>
                                <p class="rate">Rate: ${data[0].show.rating.average}</p>    
                            </div>
                            <ul class = "card-cont">
                                <h4 class= "">${data[0].show.name}</h4>
                                <li><p>Generos: <strong>${data[0].show.genres}</strong></p></li>
                                <br>
                                <li><p>${data[0].show.summary}</p></li>
                            </ul>
                        </article>
                        `
                    }

                    console.log(data)
                })
                .catch(err => console.log(err))
        }

        console.log(data)
    })
    .catch(err => console.log(err))
