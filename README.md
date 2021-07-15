# Health Hub

A complete overhaul of a clients site. They want a moodier look with updated pictures and services. I have learned alot more since I did this site a year ago so I will apply more modern techniques.

## Table of contents

- [Overview](#overview)
  - [The Goal](#the-goal)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Documentation](#documentation)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The goal

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Find what they need quickly without much cognitive load
- Experience a clean and simple layout
- Use a dark mode switch
- Log in and manage account
- Donate via stripe
- Follow a cooking path that keeps track of their progress

### Screenshot

![screenshot of website](./assets/readme.png)

## My Code Structure

### General

1. Client is frontend, server is back-end
2. Assets are images and icons
3. Each file type has a folder.

### Style

1. The global file controls the css variables and components.
2. The components folder has commonly used parts used globally.
3. All animations are in a folder.
4. Each page has a style folder that houses all of it's parts.
5. I use section.some_name as a root that all my naming conventions use.
6. Used 2 screen sizes. 768px and 1536px. Sections have max-width of 22000px.
7. Mobile first.

### Scripts

1. I use a single index.js file in each html page.
2. I import modules into index.js file.

### Pages

1. I use sections to break up the html document.
2. Each section is named based off of appearance.
3. I import the global.css, page_name.css, and index.js into each page.

### Built with

- Semantic HTML5 markup
- CSS modern properties
- Flexbox & Grid
- Mobile-first workflow

## Documentation

## Author

- Website - [Jon K.](https://jonkarrer.com)
- LinkedIN - [Jon Karrer](https://www.linkedin.com/in/jon-karrer-6b8a18186/)
- CodePen - [@jonkarrer](https://codepen.io/jonkarrer)

## Acknowledgments

Working directly with the owner
