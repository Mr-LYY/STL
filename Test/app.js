const btn = document.querySelector('.button');
const grpInput = document.querySelector('.input');
const seedBtn = document.querySelector('#seed');
const seedPlayers = document.querySelector('#seedPlayers');
const groupSection = document.querySelector('.groups');

let players = [
    {
        id: 1,
        name: 'Иван',
        points: 34,
        age: 8,
        city: 'Москва'
    },
    {
        id: 2,
        name: 'Николай',
        points: 231,
        age: 13,
        city: 'Санкт Петербург'
    },
    {
        id: 3,
        name: 'Георгий',
        points: 411,
        age: 9,
        city: 'Новосибирск'
    },
    {
        id: 4,
        name: 'Анастасия',
        points: 21,
        age: 11,
        city: 'Кемерово'
    },
    {
        id: 5,
        name: 'Евгений',
        points: 76,
        age: 7,
        city: 'Ростов-на-Дону'
    },
    {
        id: 6,
        name: 'Ольга',
        points: 111,
        age: 12,
        city: 'Омск'
    },
    {
        id: 7,
        name: 'Саша',
        points: 54,
        age: 12,
        city: 'Воронеж'
    },
    {
        id: 8,
        name: 'Миша',
        points: 984,
        age: 11,
        city: 'Самара'
    }
]




//Функции сортировки и перемешивания массивов

const sortByPoints = (arr) => {
    arr.sort((a, b) => a.points < b.points ? 1 : -1);
}

const shuffle = (arr) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}
//---------------------------------------------------------------





//Берем и вставляем сеянных игроков по 1 в каждую группу

const takeSeededPlayers = (playersMassive, groupsQty) => {

    sortByPoints(playersMassive);
    const newSeededPlayersMassive = playersMassive.slice(0, groupsQty.value)
    
    return newSeededPlayersMassive
}

const putSeededPlayer = (i) => {
    
    arr = takeSeededPlayers(players, grpInput)

    return arr[i].name
}
//---------------------------------------------------------





//Берем и вставляем остальных игроков в группы

const playersAfterSeeded = (arr, groupsQty) => {

    playersWithoutSeeded = arr.slice(groupsQty.value)
    shuffle(playersWithoutSeeded)

    return playersWithoutSeeded
}

const putNotSeededPlayers = (arr, groupsQty) => {

    newArr = playersAfterSeeded(arr, groupsQty);

    grpPlayers = Math.floor(newArr.length / groupsQty.value)
   
    return  newArr.splice(0,grpPlayers)
    
}

//---------------------------------------------------------






const createGrpSection = (i) => {
    
    templateItem = document.querySelector('.group-template').content
    grpItem = templateItem.cloneNode(true)
    grpItem.querySelector('.group-number').textContent = `Группа № ${i + 1}`
    grpItem.querySelector('.group-player').textContent = putSeededPlayer(i)

    /*const newPlayer = document.createElement('p')
    newPlayer.textContent = putOtherPlayersInGroups(players, grpInput)[i].name
    grpItem.querySelector('.group-player').append(newPlayer)*/

    return grpItem
}

const seedFunc = (groupsQty) => {
        
    for (i = 0; i < groupsQty.value; i++) {

        groupSection.append(createGrpSection(i));
    }
}






//Event Listeners

seedBtn.addEventListener('click', () => {

    seedFunc(grpInput)
    console.log(putNotSeededPlayers(players, grpInput))
});

seedPlayers.addEventListener('click', () => {
    
    takeSeededPlayers(players, grpInput).forEach(element => {
        
        groupSection.append(element.name)

    })
});






























/*
function playersInGrp(playersQty, grpQty) {

    if ((playersQty.length % grpQty.value) === 0) {

        playersCount = playersQty.length / grpQty.value
        grpCounts = playersQty.length / playersCount
    
        console.log((`по ${playersCount} человек будет ${grpCounts} групп`))

    } else { 
        
        playersInOrdinaryGroup = Math.round(playersQty.length / grpQty.value);
        playersInLastGroup = playersQty.length - ((playersInOrdinaryGroup * grpQty.value) - playersInOrdinaryGroup);
                
        return [playersInOrdinaryGroup, playersInLastGroup]
        
        (`по ${grpQty.value} человек будет ${grpCounts} групп, в последней группе будет ${playersCount} человек`)
    }
}

function grpSeed()

*/


/*

const playersTemplate = document.querySelector('.players').content
const plSheet = document.querySelector('.players-sheet')
function sortByPoints(arr) {
    arr.sort((a, b) => a.points < b.points ? 1 : -1);
  }

btn.addEventListener('click',() => {
    let i = 1
    const playersArray = Array.from(players)
    sortByPoints(playersArray)
    
    
    playersArray.forEach(el => {
        const playerElement = playersTemplate.querySelector('.player').cloneNode(true)
    
        playerElement.querySelector('.number').textContent = i
        playerElement.querySelector('.name').textContent = el.name
        playerElement.querySelector('.city').textContent = el.city
        playerElement.querySelector('.points').textContent = el.points
        
        i += 1
        plSheet.append(playerElement)
    });
})

*/