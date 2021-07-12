# work-day-scheduler
## Project Description
  Created  a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
  The landing page looks like below

 ![landing Page image](/Assets/images/landingPage.png)

## Technologies Used
  HTML
  JavaScript
  Moment.js
  Jquery
  Bootstrap

## Functionality used to achieve the acceptance criteria
 
 This is a daily planner to create a schedule.
1.  The current date is displayed at the top of the webpage
  This is acheived by using moment.js.
 Then the current date is formated like 'date month year'.
2.  Then the webpage displays timeblocks from 8 A.M to 5 P.M.
  This is done by creating a div container for each timeblock.

 3.  Each timeblock is color coded to indicate    whether it is in the past, present, or future.
   1. This is acheived by getting the current hour from moment using 'moment().hour();' and a conditional check is done to see the hour is lesser or equal or greater than the timeblocks displayed in the webpage.
  2. Past hour is indicated by gray color, present by green and future by red.
4. An event can be entered by clicking on the timeblock and the event can be saved in local storage by clicking on the save button.
  1.This  is done by getting the value of the textarea and accessing the id of its parent and stroing it in localstorage.
5. When the page is refreshed the saved events persist.
    This is done by saving the event in localstoraage and get the individual timeblock id and the coresponding event and displaying it in the timeblock textarea.

## Installation
On GitHub, navigate to the main page of the repository.
  To clone the repository using HTTPS, under "Clone with HTTPS", click . To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click clipboard image . To clone a repository using GitHub CLI, click Use GitHub CLI, then click clipboard image .

  open Git Bash
  
  Change the current working directory to the location where you want the cloned directory.
  
  Type git clone, and then paste the SSH  you copied earlier.

$ git clone git@github.com:sangeethaNR/work-day-scheduler.git
Press Enter to create your local clone.

$ git clone git@github.com:sangeethaNR/work-day-scheduler.git
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.

 You installed the project to your local!!!
 
  Link to the deployed application https://github.com/sangeethaNR/work-day-scheduler
  
  Landing Page  https://sangeethanr.github.io/work-day-scheduler/

  
  ## Credits
  github.com
  google.com
  w3Schools.com
  Scratch.mit.edu
