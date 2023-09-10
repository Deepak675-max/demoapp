
const axoisInstance = axios.create({
    baseURL: 'http://localhost:5000/api/player'
})

async function createPlayer(playerData) {
    try {
        const responseData = await axoisInstance.post('/create-player', playerData);
        if (responseData.data.error) {
            throw responseData.data.error.message;
        }
        return responseData.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPlayer(playerData) {
    try {
        const responseData = await axoisInstance.post('/get-player', playerData);
        if (responseData.data.error) {
            throw responseData.data.error.message;
        }
        return responseData.data.data.playerData;
    } catch (error) {
        console.log(error);
        throw error;
    }
}



document.getElementById('addBtn').addEventListener('click', addData);

document.getElementById('searchBtn').addEventListener('click', getData);


function addData(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const dateOfBirth = document.getElementById('dob');
    const photo = document.getElementById('photo');
    const birthPlace = document.getElementById('birthplace');
    const career = document.getElementById('career');
    const matches = document.getElementById('matches');
    const score = document.getElementById('score');
    const fifties = document.getElementById('fifties');
    const centuries = document.getElementById('centuries');
    const wickets = document.getElementById('wickets');
    const average = document.getElementById('average');

    const playerData = {
        name: name.value,
        dateOfBirth: dateOfBirth.value,
        imageUrl: photo.value,
        birthPlace: birthPlace.value,
        career: career.value,
        numberOfMatches: matches.value,
        score: score.value,
        fifties: fifties.value,
        centuries: centuries.value,
        wickets: wickets.value,
        average: average.value
    }
    createPlayer(playerData)
        .then(msg => {
            console.log(msg);
        })
        .catch(error => {
            console.log(error);
        })
}


function getData(event) {
    event.preventDefault();
    const name = document.getElementById('search-input');

    const playerData = {
        name: name.value
    }
    getPlayer(playerData)
        .then(data => {
            showPlayerData(data);
        })
        .catch(error => {
            console.log(error);
        })
}


function showPlayerData(data) {
    const profile = `
    <div class="mt-3">
    <img src="${data.imageUrl}" alt="${data.name}">
    </div>
    <div class="mt-3">
    <h5>${data.name}</h5>
    </div>
    <div class="mt-3">
    <h5>${data.dateOfBirth}</h5>
    </div>`;


    const personalInfo = `
    <div class="mt-3">
    <h2>Personal Information</h2>
    </div>
    <div class="mt-3">
    <h5>No Of Matches: ${data.numberOfMatches}</h5>
    </div>
    <div class="mt-3">
   <h5>No Of Fifties: ${data.fifties}</h5>
    </div>
    <div class="mt-3">
    <h5>Runs: ${data.score}</h5>
    </div>
    <div class="mt-3">
    <h5>No Of Centuries: ${data.centuries}</h5>
    </div>
    <div class="mt-3">
    <h5>Avg: ${data.average}</h5>
    </div>
    <div class="mt-3">
    <h5>wickets: ${data.wickets}</h5>
    </div>`;

    const careerinfo = `<p>${data.career}</p>`;

    document.getElementById('profile').innerHTML = profile;
    document.getElementById('profile').style.backgroundColor = 'aqua';
    document.getElementById('personal-info').innerHTML = personalInfo;

    document.getElementById('right-box').innerHTML = careerinfo;
}