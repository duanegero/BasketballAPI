const apiKey = process.env.API_KEY; //assigning API key to a variable 

console.log(`API KEY: ${apiKey}`); //logging API key just for testing 

//asynce function 
const fetchTeams = async () => {
    const url = "https://api.balldontlie.io/v1/teams/"; // API endpoint

    //starting the try
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

    teamList.innerHTML = '';

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

//make getTeam globally accessible
window.getTeam = getTeam;
// Make fetchTeams globally accessible
window.fetchTeams = fetchTeams;