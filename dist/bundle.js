/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("const apiKey = \"dff57f39-d4f1-4f0f-b008-c8d21e110918\"; //assigning API key to a variable \n\nconsole.log(`API KEY: ${apiKey}`); //logging API key just for testing \n\n//asynce function \nconst fetchTeams = async () => {\n    const url = \"https://api.balldontlie.io/v1/teams/\"; // API endpoint\n\n    //starting the try\n    try {\n        const response = await fetch(url, {\n            headers: {\n                'Authorization': apiKey \n            }\n        });\n\n    //logging the HTTP response status code\n    console.log('Response Status:', response.status);\n\n    //logging the status tex\n    console.log('Response Status Text:', response.statusText);\n\n    //check if the response is ok\n    if(!response.ok){\n        throw new Error('Error');\n    }\n    \n    //assigning the response JSON file to a variable \n    const data = await response.json();\n\n    //access the data from the JSON\n    const teams = data.data;\n    \n    //variable to handle HTML list \n    const teamList = document.getElementById('team-list');\n\n    teamList.innerHTML = '';\n\n    const firstThirtyTeams = teams.slice(0 ,30);\n\n    //loop through array of teams \n    firstThirtyTeams.forEach(team => {\n       //display the team names \n        console.log(`Team Name: ${team.full_name}`);\n\n        //make a new list eleamnet \n        const newItem = document.createElement('li');\n        //assign team name to new list eleaments \n        newItem.innerText = team.full_name;\n        //add new item to list \n        teamList.appendChild(newItem);\n    });\n} catch(error) {\n    console.error('Error', error); //in case of error, log error \n}\n};\n\n//function to get team info\nconst getTeam = async () => {\n    //preventing the page from resetting\n    event.preventDefault();\n\n    //getting value from form and assigning to variable\n    const teamID = document.getElementById('teamIDNumber').value;\n\n    //assigning uri to a variable\n    const url = `https://api.balldontlie.io/v1/teams/${teamID}`\n\n    //what we're going to try \n    try{\n\n        //fetching the info and storing in variable\n        const response = await fetch(url, {\n            headers: {\n                'Authorization': apiKey \n            }\n        });\n\n        //check for error first\n        if(!response.ok){\n            throw new Error('Error');\n        }\n\n        //storing JSON in variable \n        const data = await response.json();\n\n        //storing data from JSON into a variable\n        const team = data.data;\n        //storing HTML element in a variable \n        const teamInfo =  document.getElementById('team-info'); \n\n        //filling the HTML element with data from JSON \n        teamInfo.innerText = `Team Name: ${team.full_name}, City: ${team.city}, ${team.abbreviation}, Division: ${team.division}`\n\n    } catch(error) { //if any errors with catch them here\n        console.error('Error', error); //in case of error, log error \n    }\n}\n\n//make getTeam globally accessible\nwindow.getTeam = getTeam;\n// Make fetchTeams globally accessible\nwindow.fetchTeams = fetchTeams;\n\n//# sourceURL=webpack://basketballapi-project/./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"]();
/******/ 	
/******/ })()
;