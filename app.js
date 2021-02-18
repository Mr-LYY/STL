
//Input data

let totalKidsQty = document.querySelector('#kids-qty');
let totalGroupQty = document.querySelector('#group-qty');
let kidsGoPlayoff = document.querySelector('#kids-exit');
let courtsQty = document.querySelector('#courts-qty');
let groupAvarageTime = document.querySelector('#group-avarage-time');
let playoffAvarageTime = document.querySelector('#playoff-avarage-time');
let addAvarageTime = document.querySelector('#add-avarage-time');

let resultShow = document.querySelector('.calc__result');
const xPlayersqty = document.querySelector('#X-players-qty');
const xQty = document.querySelector('#X-qty')

//Result Blocks

let totalAllStagesMachesQty
let totalAllStagesMachesTime
let totalAllStagesMachesTimeForCourt
let AllStagesForCourtHours
let AllStagesForCourtMinutes

let resultTotalAllStagesTime = document.querySelector('#resultTotalAllStagesTime');
let resultTotalAllStagesTimeForCourt = document.querySelector('#resultTotalAllStagesTimeForCourt');
let resultTotalAllStagesTimeForCourtHours = document.querySelector('#resultTotalAllStagesTimeForCourtHours');

let resultTotalGroupMatches = document.querySelector('#resultTotalGroupMatches');
let resultTotalPlayoffMatches = document.querySelector('#resultTotalPlayoffMatches');
let resultTotalAddMatches = document.querySelector('#resultTotalAddMatches');
let resultTotalAllStagesMatches = document.querySelector('#resultTotalAllStagesMatches');

let resultTotalGroupAllTime = document.querySelector('#resultTotalGroupAllTime');
let resultTotalGroupAllMatchesHours = document.querySelector('#resultTotalGroupAllMatchesHours');
let resultTotalGroupTimeForCourt = document.querySelector('#resultTotalGroupTimeForCourt');
let resultTotalGroupTimeForCourtHours = document.querySelector('#resultTotalGroupTimeForCourtHours');

let resultTotalPlayoffAllTime = document.querySelector('#resultTotalPlayoffAllTime');
let resultTotalPlayoffAllTimeHours = document.querySelector('#resultTotalPlayoffAllTimeHours');
let resultTotalPlayoffTimeForCourt = document.querySelector('#resultTotalPlayoffTimeForCourt');
let resultTotalPlayoffTimeForCourtHours = document.querySelector('#resultTotalPlayoffTimeForCourtHours');

let resultTotalAdditionalTourTime = document.querySelector('#resultTotalAdditionalTourTime');
let resultTotalAdditionalTourHours = document.querySelector('#resultTotalAdditionalTourHours');
let resultTotalAdditionalTourForCourt = document.querySelector('#resultTotalAdditionalTourForCourt');
let resultTotalAddTourForCourtTimeHours = document.querySelector('#resultTotalAddTourForCourtTimeHours');

const randResult = document.querySelector('.randomizer__result');
const randResultText = document.querySelector('.randomizer__result_text');

//Group Round

let remainingKids
let grpKidsQty
let allMatchesInOneGroup
let totalMatchesAllGroups


//Play Off

let totalMatchesPlayoff
let playoffFirstRound


//Additional Tournament

let addTournamentFirstRound
let totalMatchesAddTournament


//Matches Time

let totalGroupTime
let groupTimeForCourt
let totalGroupTimeHours
let remainingGroupMinutes
let groupTimeForCourtHours
let remainingGroupMinutesForCourt

let totalPlayoffTime
let playoffTimeForCourt
let totalPlayoffTimeHours
let remainingPlayoffMinutes
let playoffTimeForCourtHours
let remainingPlayoffMinutesForCourt

let totalAddTime
let addTimeForCourt
let totalAddTimeHours
let remainingAddMinutes
let addTimeForCourtHours
let remainingAddMinutesForCourt


//Buttons & Forms

let calcBtn = document.querySelector('.calc__btn')
let calcForm = document.querySelector('.calc__form');
let reset = document.querySelector('#reset');
const randBtn = document.querySelector('.randomizer__btn')


//randomizer

function random(min,max,l) {
    randResult.classList.add('randomizer__result_active')

    let arr = [],m = [],n = 0;
    if (max - min < l-1) return;
    for (var i=0; i<=(max-min); i++)m[i] = i + min;
    for (var i=0; i<l; i++) {n = Math.floor(Math.random()*(m.length)); arr[i]=m.splice(n,1);};
    return arr
}




//Tabs
const tabNavs = document.querySelectorAll('.tab__button');
const tabPanes = document.querySelectorAll('.tab-content');

for (let i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(evt){
    evt.preventDefault();
    const activeTabAttr = evt.target.getAttribute("data-tab");

    for (let j = 0; j < tabNavs.length; j++) {
      const contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("tab__button_active");
        tabPanes[j].classList.add("tab-content_active"); 
      } else {
        tabNavs[j].classList.remove("tab__button_active");
        tabPanes[j].classList.remove("tab-content_active");
      }
    };
  });
}


function matchesCalc() {

    
    resultShow.classList.add('calc__result_active');
    calcBtn.classList.add('calc__btn_hide');
    

    //Групповой этап

    grpKidsQty = parseInt(totalKidsQty.value / totalGroupQty.value)
    remainingKids = totalKidsQty.value % totalGroupQty.value

    allMatchesInOneGroup = (grpKidsQty * (grpKidsQty - 1)) / 2
    
    if (remainingKids != 0) {
        lastallMatchesInOneGroup = remainingKids * grpKidsQty
        totalMatchesAllGroups = lastallMatchesInOneGroup + (allMatchesInOneGroup * totalGroupQty.value)
    } else {

        totalMatchesAllGroups = allMatchesInOneGroup * totalGroupQty.value
    }
    
    //result = totalMatchesAllGroups


    /*if (remainingKids != 0) {
        totalMatchesAllGroups = (allMatchesInOneGroup * (totalGroupQty.value - 1))  + lastallMatchesInOneGroup
    } else {
        totalMatchesAllGroups = allMatchesInOneGroup * totalGroupQty.value
    }

        /*if ((remainingKids <= 2) && (remainingKids != 0)) {
            console.log('f*ck you')
        } else console.log('nice job man!')*/

    //Этап Play-off
    
    playoffFirstRound = kidsGoPlayoff.value * totalGroupQty.value

    if (playoffFirstRound <= 4) {
        totalMatchesPlayoff = Math.floor(playoffFirstRound / 2) + Math.pow(2, 1);
    } else if (playoffFirstRound <= 8) {
        totalMatchesPlayoff = Math.floor(playoffFirstRound / 2) + Math.pow(2, 2);
    } else if (playoffFirstRound <= 16) {
        totalMatchesPlayoff = Math.floor(playoffFirstRound / 2) + Math.pow(2, 3);
    } else if (playoffFirstRound <= 32) {
        totalMatchesPlayoff = Math.floor(playoffFirstRound / 2) + Math.pow(2, 4);
    } else if (playoffFirstRound <= 64) {
        totalMatchesPlayoff = Math.floor(playoffFirstRound / 2) + Math.pow(2, 5);
    } else if (playoffFirstRound <= 128) {
        totalMatchesPlayoff = Math.floor(playoffFirstRound / 2) + Math.pow(2, 6);
    } else if (playoffFirstRound <= 256) {
        totalMatchesPlayoff = Math.floor(playoffFirstRound / 2) + Math.pow(2, 7);
    } else if (playoffFirstRound <= 512) {
        totalMatchesPlayoff = Math.floor(playoffFirstRound / 2) + Math.pow(2, 8);
    } else {
        alert('too many matches, calm down')
    }

    //result = totalMatchesPlayoff


    //additionalTournament

    addTournamentFirstRound = totalKidsQty.value - playoffFirstRound

    if (addTournamentFirstRound <= 4) {
        totalMatchesAddTournament = (Math.floor(addTournamentFirstRound / 2) + Math.pow(2, 1)) - 1;
    } else if (addTournamentFirstRound <= 8) {
        totalMatchesAddTournament = (Math.floor(addTournamentFirstRound / 2) + Math.pow(2, 2)) - 1;
    } else if (addTournamentFirstRound <= 16) {
        totalMatchesAddTournament = (Math.floor(addTournamentFirstRound / 2) + Math.pow(2, 3)) - 1;
    } else if (addTournamentFirstRound <= 32) {
        totalMatchesAddTournament = (Math.floor(addTournamentFirstRound / 2) + Math.pow(2, 4)) - 1;
    } else if (addTournamentFirstRound <= 64) {
        totalMatchesAddTournament = (Math.floor(addTournamentFirstRound / 2) + Math.pow(2, 5)) - 1;
    } else if (addTournamentFirstRound <= 128) {
        totalMatchesAddTournament = (Math.floor(addTournamentFirstRound / 2) + Math.pow(2, 6)) - 1;
    } else if (addTournamentFirstRound <= 256) {
        totalMatchesAddTournament = (Math.floor(addTournamentFirstRound / 2) + Math.pow(2, 7)) - 1;
    } else if (addTournamentFirstRound <= 512) {
        totalMatchesAddTournament = (Math.floor(addTournamentFirstRound / 2) + Math.pow(2, 8)) - 1;
    } else {
        alert('too many matches, calm down')
    }

    
    //result = totalMatchesAddTournament





    
    // MachesTime

    totalGroupTime = groupAvarageTime.value * totalMatchesAllGroups
    groupTimeForCourt = parseInt(totalGroupTime / courtsQty.value)
    totalGroupTimeHours = parseInt(totalGroupTime / 60)
    remainingGroupMinutes = totalGroupTime % 60
    groupTimeForCourtHours = parseInt(groupTimeForCourt / 60)
    remainingGroupMinutesForCourt = groupTimeForCourt % 60

    totalPlayoffTime = playoffAvarageTime.value * totalMatchesPlayoff
    playoffTimeForCourt = parseInt(totalPlayoffTime / courtsQty.value)
    totalPlayoffTimeHours = parseInt(totalPlayoffTime / 60)
    remainingPlayoffMinutes = totalPlayoffTime % 60
    playoffTimeForCourtHours = parseInt(playoffTimeForCourt / 60)
    remainingPlayoffMinutesForCourt = playoffTimeForCourt % 60

    totalAddTime = addAvarageTime.value * totalMatchesAddTournament
    addTimeForCourt = parseInt(totalAddTime / courtsQty.value)
    totalAddTimeHours = parseInt(totalAddTime / 60)
    remainingAddMinutes = totalAddTime % 60
    addTimeForCourtHours = parseInt(addTimeForCourt / 60)
    remainingAddMinutesForCourt = addTimeForCourt % 60

    totalAllStagesTime = totalGroupTime + totalPlayoffTime + totalAddTime
    totalAllStagesTimeForCourt = parseInt(totalAllStagesTime / courtsQty.value)
    totalAllStagesTimeHours = parseInt(totalAllStagesTime / 60)
    remainingAllStagesMinutes = totalAllStagesTime % 60
    totalAllStagesTimeForCourtHours = parseInt(totalAllStagesTimeForCourt / 60)
    remainingAllStagesMinutesForCourt = totalAllStagesTimeForCourt % 60
    

    //result = all Time Needed



    //Show results
    totalAllStagesMachesQty = totalMatchesAllGroups + totalMatchesPlayoff + totalMatchesAddTournament

    resultTotalGroupMatches.insertAdjacentHTML('afterbegin', totalMatchesAllGroups + ' шт.');
    resultTotalPlayoffMatches.insertAdjacentHTML('afterbegin', totalMatchesPlayoff + ' шт.');
    resultTotalAddMatches.insertAdjacentHTML('afterbegin', totalMatchesAddTournament + ' шт.');
    resultTotalAllStagesMatches.insertAdjacentHTML('afterbegin', totalAllStagesMachesQty + ' шт.');

    //Time results
    //console.log(totalGroupTimeHours)
    
    resultTotalGroupAllTime.insertAdjacentHTML('afterbegin', totalGroupTime + ' мин.');
    resultTotalGroupAllMatchesHours.insertAdjacentHTML('afterbegin', totalGroupTimeHours + ' ч. ');
    resultTotalGroupAllMatchesHours.insertAdjacentHTML('beforeend', remainingGroupMinutes + ' мин.');
    resultTotalGroupTimeForCourt.insertAdjacentHTML('afterbegin', groupTimeForCourt + ' мин.');
    resultTotalGroupTimeForCourtHours.insertAdjacentHTML('afterbegin', groupTimeForCourtHours + ' ч. ');
    resultTotalGroupTimeForCourtHours.insertAdjacentHTML('beforeend', remainingGroupMinutesForCourt + ' мин.');

    resultTotalPlayoffAllTime.insertAdjacentHTML('afterbegin', totalPlayoffTime + ' мин.');
    resultTotalPlayoffAllTimeHours.insertAdjacentHTML('afterbegin', totalPlayoffTimeHours + ' ч. ');
    resultTotalPlayoffAllTimeHours.insertAdjacentHTML('beforeend', remainingPlayoffMinutes + ' мин.');
    resultTotalPlayoffTimeForCourt.insertAdjacentHTML('afterbegin', playoffTimeForCourt + ' мин.');
    resultTotalPlayoffTimeForCourtHours.insertAdjacentHTML('afterbegin', playoffTimeForCourtHours + ' ч. ');
    resultTotalPlayoffTimeForCourtHours.insertAdjacentHTML('beforeend', remainingPlayoffMinutesForCourt + ' мин.');

    resultTotalAdditionalTourTime.insertAdjacentHTML('afterbegin', totalAddTime + ' мин.');
    resultTotalAdditionalTourHours.insertAdjacentHTML('afterbegin', totalAddTimeHours + ' ч. ');
    resultTotalAdditionalTourHours.insertAdjacentHTML('beforeend', remainingAddMinutes + ' мин.');
    resultTotalAdditionalTourForCourt.insertAdjacentHTML('afterbegin', addTimeForCourt + ' мин.');
    resultTotalAddTourForCourtTimeHours.insertAdjacentHTML('afterbegin', addTimeForCourtHours + ' ч. ');
    resultTotalAddTourForCourtTimeHours.insertAdjacentHTML('beforeend', remainingAddMinutesForCourt + ' мин.');


    totalAllStagesMachesTime = totalGroupTime + totalPlayoffTime + totalAddTime;
    resultTotalAllStagesTime.insertAdjacentHTML('afterbegin', totalAllStagesMachesTime + ' мин.');

    totalAllStagesMachesTimeForCourt = groupTimeForCourt + playoffTimeForCourt + addTimeForCourt;
    resultTotalAllStagesTimeForCourt.insertAdjacentHTML('afterbegin', totalAllStagesMachesTimeForCourt + ' мин.');

    AllStagesForCourtHours = parseInt(totalAllStagesMachesTimeForCourt / 60);
    resultTotalAllStagesTimeForCourtHours.insertAdjacentHTML('afterbegin', AllStagesForCourtHours + ' ч. ');
    AllStagesForCourtMinutes = parseInt(totalAllStagesMachesTimeForCourt % 60);
    resultTotalAllStagesTimeForCourtHours.insertAdjacentHTML('beforeend', AllStagesForCourtMinutes + ' мин.');


}

function resetFun() {

    location.reload()
}




randBtn.addEventListener('click', () => {

    randBtn.classList.add('randomizer__btn_hide')

    if (xPlayersqty.value < xQty.value) {
        randResult.classList.add('randomizer__result_active')
        randResultText.textContent = `Ну как же так?) Игроков меньше, чем Х, не дело)`
    } else {
        
    let arr = random(1,xPlayersqty.value,xQty.value);
    randResultText.textContent = `Х присваивается следующим игрокам: ${arr}`
    }
})
calcBtn.addEventListener('click', matchesCalc);
reset.addEventListener('click', resetFun);

document.querySelector('#randReset').addEventListener('click', resetFun);
