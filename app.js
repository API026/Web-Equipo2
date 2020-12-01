const url = 'https://apitvshows.herokuapp.com/api_tv_shows/shows/'
fetch(url)
    .then(respose => respose.json())
    .then(data => {

        var string = "";
        var cat = "";
        for (let i = 0; i < 14; i++) {
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
                    if (i == 0) {
                        element.innerHTML += `<h3>TOP ANIMATION</h3><div class="spacer"></div>`
                    } else if (i == 5) {
                        element.innerHTML += `<h3>TOP DOCUMENTARY</h3><div class="spacer"></div>`
                    } else if (i == 10) {
                        element.innerHTML += `<h3>TOP THRILLER</h3><div class="spacer"></div>`
                    }


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

                    console.log(data)
                })
                .catch(err => console.log(err))
        }

        console.log(data)
    })
    .catch(err => console.log(err))
