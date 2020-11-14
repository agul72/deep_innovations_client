## Description

This application shows a web page with a list of songs displayed by a youtube player.
 - Once all the songs are loaded, the first song will start playing automatically
 - Each song displays a quotes list, clicking on quote will play its part of the song
 - Search box filters songs list according to user search input

## Instalation
[Nodejs with NPM](https://nodejs.org/en/)

### How to install and run application locally
```bash
$ npm install -g @angular/cli
$ npm i
$ npm start (will run app locally and open main page in your browser)
```

# Instructions

In the following test you will be required to solve various problems utilizing various technologies.
Please make sure to spend your time wisely on each question (answer bonus section only if you have finished the questions fully), in case you are stuck it is recommended to move on to the next question.
 - Please remember that even if you don't have any prior experience with the following concepts, try to solve them in the best possible manner.
 - Remember that it is important for us to see what you have accomplished and the approach you have taken for finding the solution. 
 - You may change/improve the existing code as you wish
 - Webpage doesn't have to look pretty, you can avoid css frameworks, avoid floats and use flexbox at will
 - Structure and coding style will have more weight

 - When you're done, please upload both projects to git and send us a link and instructions on how to run it

##### 1. Create your own REST API server that will retrieve the list of songs and use it in youtube-quotes application instead of the current API
 - Server communication can be done with localhost
 - Songs list can be straight hard-coded JSON object
 - Feel free to use any other backend database system if you choose to

##### 2. Create search endpoint in your server
 - Song search is currently made on the webpage. We want you to perform the search in your server instead, then display the results on the webpage.

##### 3. When user performs a search, return a list of recommended songs according to the search input
 - Recommended songs should be returned in addition to the search results
 - You chose how to classify recommended songs according to search
 - You may add as many songs as you wish to the song list in order to have more songs to recommend
 - **Do not change the existing structure of a song object**
 - When server response returns, you may simply print the list of recommended songs to the console, or display them on the webpage. If you chose to display them, you can chose where they will be shown on the page. As Mentioned before, don't bother to make it look pretty

##### Bonus: Create a Docker Image for the server