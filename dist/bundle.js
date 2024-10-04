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

eval("const apiKey = \"dff57f39-d4f1-4f0f-b008-c8d21e110918\"; //assigning API key to a variable \n\nconsole.log(`API KEY: ${apiKey}`); //logging API key just for testing \n\nconst fetchTeams = async () => {\n    const url = \"https://api.balldontlie.io/v1/teams/\"; // API endpoint\n\n    try {\n        const response = await fetch(url, {\n            headers: {\n                'Authorization': apiKey \n            }\n        });\n\n    //logging the HTTP response status code\n    console.log('Response Status:', response.status);\n    //logging the status tex\n    console.log('Response Status Text:', response.statusText);\n    //check if the response is ok\n    \n    if(!response.ok){\n        throw new Error('Error');\n    }\n    const data = await response.json();\n    //access the data from the JSON\n    const teams = data.data;\n    //loop through array of teams \n    const teamList = document.getElementById('team-list');\n    teams.forEach(team => {\n       //display the team names \n        console.log(`Team Name: ${team.full_name}`);\n        const newItem = document.createElement('li');\n        newItem.innerText = team.full_name;\n        teamList.appendChild(newItem);\n    });\n} catch(error) {\n    console.error('Error', error);\n}\n};\n\nwindow.fetchTeams = fetchTeams;\n\n\n//# sourceURL=webpack://basketballapi-project/./app.js?");

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