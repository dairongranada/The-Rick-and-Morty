for (let i = 1; i < 5; i++) {
    const URL = "https://rickandmortyapi.com/api/character?page="+i;
    // const URL = "https://hp-api.herokuapp.com/api/characters/";

    const main = document.querySelector('main');
    const inputCharacter = document.getElementById('inputCharacter');

    guardaArray =[];

    const consApi = async (api) => {
        const res = await fetch(api);
        const data = await res.json();
        
            data.results.map(element => (
            console.log(
            ` Name:  ${element.name} Gender:  ${element.gender}img:  ${element.image}`,
            generateRicks(element)

                // inputCharacter.addEventListener('keyup', function sss(e) {
                //     if (inputCharacter.value == element.name) {
                //         guardaArray.push[element.name];
                //         console.log(element.name)
                //         console.log(guardaArray)
                //     }
                // })
        )))
    }
    consApi(URL);

        // console.log(element.name)
        // console.log(
        // ` Name:  ${element.name} Gender:  ${element.gender}img:  ${element.image}`,
        // generateRicks(element)



    // ===================   C R E A R   C A R D S  =================== //
    const generateRicks = (rickAndMorty) => {
        const divContent = document.createElement('div');
        divContent.classList.add('contanerCard');

        const divImg = document.createElement('div');
            const img = document.createElement('img');
            img.classList.add('img-card');
            img.src = rickAndMorty.image;

        const divInfo = document.createElement('div');
        divInfo.classList.add('info')

        const nameCharacter = document.createElement('h4');
        nameCharacter.textContent = rickAndMorty.name;

        const gender = document.createElement('p');
        gender.textContent = `Gender: ${rickAndMorty.gender}`;

        const species = document.createElement('p');
        species.classList.add('species')
        species.textContent = `Species: ${rickAndMorty.species}`;


        divImg.appendChild(img);
        divContent.appendChild(divImg);

        divInfo.appendChild(nameCharacter);
        divInfo.appendChild(species);
        divInfo.appendChild(gender);

        divContent.appendChild(divInfo);

        main.appendChild(divContent);
        
    }
}


    // const generateAllCharter = async() => {
    //     console.log('Gener');
    //     response.map(elemet => generateRicks(elemet));
    // }
    
    // window.addEventListener('load', generateAllCharter);




