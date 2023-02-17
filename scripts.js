const franchise_name_code = new Map();
franchise_name_code.set("ARI","Arizona Cardinals");		            
franchise_name_code.set("ATL","Atlanta Falcons");		            
franchise_name_code.set("BAL","Baltimore Ravens");		            
franchise_name_code.set("BUF","Buffalo Bills");		            
franchise_name_code.set("CAR","Carolina Panthers");		            
franchise_name_code.set("CHI","Chicago Bears");		            
franchise_name_code.set("CIN","Cincinnati Bengals");		            
franchise_name_code.set("CLE","Cleveland Browns");		            
franchise_name_code.set("DAL","Dallas Cowboys");		            
franchise_name_code.set("DEN","Denver Broncos");		            
franchise_name_code.set("DET","Detroit Lions");		            
franchise_name_code.set("GB","Green Bay Packers");	            
franchise_name_code.set("HOU","Houston Texans");		            
franchise_name_code.set("IND","Indianapolis Colts");		            
franchise_name_code.set("JAX","Jacksonville Jaguars");		            
franchise_name_code.set("KC","Kansas City Chiefs");	            
franchise_name_code.set("LV","Las Vegas Raiders");	            
franchise_name_code.set("LAC","Los Angeles Chargers");		            
franchise_name_code.set("LA","Los Angeles Rams");	            
franchise_name_code.set("MIA","Miami Dolphins");		            
franchise_name_code.set("MIN","Minnesota Vikings");		            
franchise_name_code.set("NE","New England Patriots");	            
franchise_name_code.set("NO","New Orleans Saints");	            
franchise_name_code.set("NYG","New York Giants");		            
franchise_name_code.set("NYJ","New York Jets");		            
franchise_name_code.set("PHI","Philadelphia Eagles");		            
franchise_name_code.set("PIT","Pittsburgh Steelers");		            
franchise_name_code.set("SF","San Francisco 49ers");	            
franchise_name_code.set("SEA","Seattle Seahawks");		            
franchise_name_code.set("TB","Tampa Bay Buccaneers");	            
franchise_name_code.set("TEN","Tennessee Titans");		            
franchise_name_code.set("WAS","Washington Commanders");

const url ='https://static.www.nfl.com/t_person_squared_mobile/f_auto/league/api/clubs/logos/';

let resultStorage = /**@type {any}*/ (document.querySelector("#result-storage"));


/**
 * @type {HTMLButtonElement}
 */
const homeBtn = /**@type {any}*/ (document.querySelector("#homeField"));
homeBtn.addEventListener("click", () => {
    resultStorage.innerHTML = "";
    resultStorage.innerHTML = `<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_1l9gpfir.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>    <div class="actions">    `
    resultStorage.innerHTML += '<p>Player 1 got: <span id="player1"></span><br>Player 2 got: <span id="player2"></span></p>';
    click();

});

/**
 * @type {HTMLButtonElement}
 */
 const teamBtn= /**@type {any}*/ (document.querySelector("#team"));
 teamBtn.addEventListener("click", () => {
    let team = getRandomKey(franchise_name_code);
    console.log(team);
    resultStorage.innerHTML = "";
    resultStorage.innerHTML += `<p>Your Team is ${team}: <span id="team">${franchise_name_code.get(team)}</span></p><br><img alt=${team} src=${url+team}></img>
`;


 });

 /**
 * @type {HTMLButtonElement}
 */
const teamsBtn = /**@type {any}*/ (document.querySelector("#teams"));
teamsBtn.addEventListener("click", () => {
    let team = getRandomKey(franchise_name_code);
    console.log(team);

    let team2 = getRandomKey(franchise_name_code);
    console.log(team2);

    resultStorage.innerHTML = "";
    resultStorage.innerHTML += `<span id="team">${franchise_name_code.get(team)}</span><br><img alt=${team} src=${url+team}></img>
    <span id="team2">${franchise_name_code.get(team2)}</span><br><img alt=${team2} src=${url+team2}></img>`
});

/**
 * @type {HTMLButtonElement}
 */
 const everythingBtn = /**@type {any}*/ (document.querySelector("#everything"));
 everythingBtn.addEventListener("click", () => {
    resultStorage.innerHTML = "";

    resultStorage.innerHTML += `<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_1l9gpfir.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>    <div class="actions">    `

    resultStorage.innerHTML += '<p>Player 1 got: <span id="player1"></span><br>Player 2 got: <span id="player2"></span></p>';
    click();

    let team = getRandomKey(franchise_name_code);
    console.log(team);

    let team2 = getRandomKey(franchise_name_code);
    console.log(team2);

    resultStorage.innerHTML += `<span id="team">${franchise_name_code.get(team)}</span><br><img alt=${team} src=${url+team}></img>
    <span id="team2">${franchise_name_code.get(team2)}</span><br><img alt=${team2} src=${url+team2}></img>`
 });

 /**
 * @type {HTMLButtonElement}
 */
  const pickNBtn = /**@type {any}*/ (document.querySelector("#pickN"));
  pickNBtn.addEventListener("click", () => {
    const nChoices = getNRandom(5);
    const player1Teams = nChoices[0];
    const player2Teams = nChoices[1];
    console.log(player1Teams)
    console.log(player2Teams)

  });

let heads = 0;
let tails = 0;
function click() {  
    let x = (Math.floor(Math.random() * 2) == 0);
    if(x){
    	flip("heads");
    }else{
        flip("tails");
    }
};
function flip(coin) {
    if(coin === "heads"){
        document.getElementById("player1").innerHTML = "heads";
        document.getElementById("player2").innerHTML = "tails";
    }
    else{
        document.getElementById("player1").innerHTML = "tails";
        document.getElementById("player2").innerHTML = "heads";
    }
};

// returns random key from Set or Map
function getRandomKey(collection) {
    let keys = Array.from(collection.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}

//returns n random teams
function getNRandom(n) {
    let player1Teams = [];
    let player2Teams = [];

    for(let i = 0; i < n;i++) {
        player1Teams.push(getRandomKey(franchise_name_code));
        player2Teams.push(getRandomKey(franchise_name_code));
    }

    return [player1Teams,player2Teams];

}