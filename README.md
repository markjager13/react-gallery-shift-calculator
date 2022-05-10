# Gallery Shift Calculator 

### Project Introduction
Gallery Shift Calculator is an application I created while working at the Library of Congress as a visitor services specialist (non-tech role). At the time I was learning JavaScript and saw an opportunity to build something that would improve a routine office task. The app generates a shift schedule and statistics form based on the number of employees available. 

Originally, I had built this app using plain HTML, CSS, and JavaScript. More recently, I rebuilt the app using React in order to solidify my understanding of React concepts. 

[Live Demo](https://galleryshiftcalculator.netlify.app/)

### How I worked on this project
* I broke this project down into sections (Input Form, Shift Logic, Modal Results). 
* With each section, I considered how I could translate the plain JavaScript into React components. 
* I also explored new ways to expand my knowledge of the React ecosystem (use of react-hook-form & react portals to solve common issues).

### How to navigate this project
* Input validation using react-hook-form: [Example Code](https://github.com/markjager13/react-gallery-shift-calculator/blob/5eca25b000542d125c62fcb1a20a6e10cf6e7d51/src/components/Form/InputForm.js#L14)
* Use of react portals to render a modal: [Example code](https://github.com/markjager13/react-gallery-shift-calculator/blob/5eca25b000542d125c62fcb1a20a6e10cf6e7d51/src/components/Modal/ReactPortal.js#L5)
* Use of ES6 map method to help parse time inputs: [Example code](https://github.com/markjager13/react-gallery-shift-calculator/blob/5eca25b000542d125c62fcb1a20a6e10cf6e7d51/src/components/Form/utils/parseDateTime.js#L6)

### Why I built the project his way
* My colleagues required text inputs instead of a date/time picker. This required me to translate the text inputs into date objects prior to performing any calculations.
* The results formats were styled in a way that would reproduce actual forms/schedules used in the office. 
* My plan is to become a front end developer that is well versed in react. This project was conceived as a way to help deepen my understanding of the concepts that I was learning at the time. 

### If I had more time I would change the following
* Testing is an essential part of production applications. In the future would like to add integration tests using the React Testing Library as an alternative to manual tests.

### Installation
* Clone the repo
* In your terminal, type `git clone URL`
* cd into the directory that was just created
* Type `npm install` to install all dependencies
* Type `npm start` to run the app locally
