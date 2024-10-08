const apiKey = process.env.API_KEY; //assigning API key to a variable 

console.log(`API KEY: ${apiKey}`); //logging API key just for testing 

//asynce function 
const fetchTeams = async () => {
    const url = "https://api.balldontlie.io/v1/teams/"; // API endpoint

    //starting the try and catch
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': apiKey 
            }
        });

    //logging the HTTP response status code
    console.log('Response Status:', response.status);

    //logging the status tex
    console.log('Response Status Text:', response.statusText);

    //check if the response is ok
    if(!response.ok){
        throw new Error('Error');
    }
    
    //assigning the response JSON file to a variable 
    const data = await response.json();

    //access the data from the JSON
    const teams = data.data;
    
    //variable to handle HTML list 
    const teamList = document.getElementById('team-list');

    //setting the variable to and empty string
    teamList.innerHTML = '';

    //only taking the first 30 teams returned 
    const firstThirtyTeams = teams.slice(0 ,30);

    //loop through array of teams 
    firstThirtyTeams.forEach(team => {
       //display the team names 
        console.log(`Team Name: ${team.full_name}`);

        //make a new list eleamnet 
        const newItem = document.createElement('li');
        //assign team name to new list eleaments 
        newItem.innerText = team.full_name;
        //add new item to list 
        teamList.appendChild(newItem);
    });
} catch(error) {
    console.error('Error', error); //in case of error, log error 
}
};

//function to get team info
const getTeam = async () => {
    //preventing the page from resetting
    event.preventDefault();

    //getting value from form and assigning to variable
    const teamID = document.getElementById('teamIDNumber').value;

    //assigning uri to a variable
    const url = `https://api.balldontlie.io/v1/teams/${teamID}`

    //what we're going to try 
    try{

        //fetching the info and storing in variable
        const response = await fetch(url, {
            headers: {
                'Authorization': apiKey 
            }
        });

        //check for error first
        if(!response.ok){
            throw new Error('Error');
        }

        //storing JSON in variable 
        const data = await response.json();

        //storing data from JSON into a variable
        const team = data.data;
        //storing HTML element in a variable 
        const teamInfo =  document.getElementById('team-info'); 

        //filling the HTML element with data from JSON 
        teamInfo.innerText = `Team Name: ${team.full_name}, City: ${team.city}, ${team.abbreviation}, Division: ${team.division}`

    } catch(error) { //if any errors with catch them here
        console.error('Error', error); //in case of error, log error 
    }
}

//async function to get list of players
const getPlayers = async () => {
    //preventing the page from resetting
    event.preventDefault();
    
    //setting up a variable to get use input from form, set it to all lower case
    const playerName = document.getElementById('playerName').value.toLowerCase();

    //assigning the URI to a variable to use later
    const url = `https://api.balldontlie.io/v1/players/?search=${playerName}`;

    //setting a try and catch used to fetch data
    try {
        //fetching the info and storing in variable
        const response = await fetch(url, {
            headers: {
                'Authorization': apiKey 
            }
        });

        //check for error first
        if(!response.ok){
            throw new Error('Error');
        }

        //storing JSON in variable 
        const data = await response.json();

        //setting a variable to handle data from JSON
        const players = data.data;

        //variable to handle HTML list
        const playerList = document.getElementById('player-list');

        //setting the list to empty to begin
        playerList.innerHTML = '';

        //creating a forEach loop to loop through the returned Array
        players.forEach(players => {
        
        //make a new list eleamnet 
        const newItem = document.createElement('li');
        //assign the player names to new list eleaments 
        newItem.innerText = `${players.first_name} ${players.last_name} ID:${players.id}`;
        //add new item to list 
        playerList.appendChild(newItem);
        })

        
    } catch(error) { //if any errors with catch them here
        console.error('Error', error); //in case of error, log error 
    }
}

//setting up a variable to handle the button in script
const showPlayerForm = document.getElementById('get-player-btn');
//setting a variable to handle the new div in the script
const playerContainer = document.getElementById('player-id-div');

//event lister used to display new div when clicked 
showPlayerForm.addEventListener('click', () => {
    
    //if statment to stop the new div from being loaded more than once 
    if(!document.getElementById('player-id-form')){
        //creating a new form
        const playerIdForm = document.createElement('form');
        //giving the new form and id
        playerIdForm.setAttribute('id', 'player-id-form')
        //adding new form to the div
        playerContainer.appendChild(playerIdForm)

        //creating new lable 
        const playerIdLabel = document.createElement('label');
        //giving the labe an id
        playerIdLabel.setAttribute('id', 'player-id-label');
        //adding text to new lable
        playerIdLabel.innerText = 'Enter Player ID ';
        //adding new label to div 
        playerContainer.appendChild(playerIdLabel);

        //creating new input box
        const playerIdInput = document.createElement('input');
        //adding an id to new input
        playerIdInput.setAttribute('id', 'player-id-input');
        //adding a type to new input
        playerIdInput.setAttribute('type', 'number');
        //adding new input box to div
        playerContainer.appendChild(playerIdInput);

        //creating new button
        const playerIdButton = document.createElement('button');
        //adding type to new button
        playerIdButton.setAttribute('type', 'button');
        //adding an id to new button
        playerIdButton.setAttribute('id', 'player-id-button');
        //adding text to the new button
        playerIdButton.innerText = 'Player Info';
        //adding the new button to the new div
        playerContainer.appendChild(playerIdButton);
    
        //creating a new paragraph element to hold player info
        const playerPara = document.createElement('p');
        //adding new p element to the div
        playerContainer.appendChild(playerPara);
        

    //creating a event lister to new button
    playerIdButton.addEventListener('click', async () => {
        //assigning user input to a variable
        const playerID = playerIdInput.value;
    
        //creating a variable to handle the URI
        const url = `https://api.balldontlie.io/v1/players/${playerID}`;
    
        //setting up a try and catch 
        try{
             //fetching the info and storing in variable
             const response = await fetch(url, {
                headers: {
                    'Authorization': apiKey 
                }
            });
             //check for error first
             if(!response.ok){
                throw new Error('Error');
            }
            //storing JSON in variable 
            const data = await response.json();
    
            //logging the data, for testing 
            console.log(data);

            //creating a variable to handle the data from JSON 
            const player = data.data;
            //assigning text to the new p element created 
            playerPara.innerHTML = `College: ${player.college}<br>Country: ${player.country}<br>Height: ${player.height}<br>Team: ${player.team.full_name} ${player.team.abbreviation}`;
        }
        catch(error) { //if any errors with catch them here
            console.error('Error', error); //in case of error, log error 
        }
    }
    )
}
});

//make getTeam globally accessible
window.getTeam = getTeam;
//make fetchTeams globally accessible
window.fetchTeams = fetchTeams;
//make getPlayer globally accessible
window.getPlayers = getPlayers;