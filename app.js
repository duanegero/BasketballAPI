const apiKey = process.env.API_KEY; //assigning API key to a variable 

console.log(`API KEY: ${apiKey}`); //logging API key just for testing 

//asynce function 
const fetchTeams = async () => {
    const url = "https://api.balldontlie.io/v1/teams/"; // API endpoint

    //uing fetch to get info from API, with my api key in header
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

    //loop through array of teams 
    teams.forEach(team => {
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
// Make fetchTeams globally accessible
window.fetchTeams = fetchTeams;
