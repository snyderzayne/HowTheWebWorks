// async function getData() {
//     const response = await axios.get('https://swapi.dev/api/planets/')
//     const { next, results } = response.data
//     for (let planet of results) {
//         console.log(planet.name);
//     }
//     const response2 = await axios.get(next);
//     const results2 = response2.data.results;
//     for (let planet of results2) {
//         console.log(planet.name);
//     }
// }

// async function getData() {
//     const response = await axios.get('https://api.spacexdata.com/v3/launches/upcoming')
//     const ul = document.querySelector("#launches");
//     for(let launch of response.data) {
//         const newLi = document.createElement("li");
//         newLi.innerText = launch.mission_name;
//         ul.append(newLi)
//         console.log(launch.mission_name);
//         console.log(launch.rocket.rocket_name)
//     }
// }

async function randomDog() {
    const res = await axios.get('https://dog.ceo/api/breed/hound/images')
    const img = document.querySelector('#dog');
    img.src = res.data.message;
    console.log(res.data);
}