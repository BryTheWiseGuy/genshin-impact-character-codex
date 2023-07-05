# Welcome to Genshin.Codex

## Introduction

Welcome to Genshin.Codex. This React web application was created with create-react-app. The current functionality of the project is a codex of all current Genshin Impact characters that includes images, talent information, showcase videos, and basic character information.

## Installation

Genshin.Codex has it's backend deployed on Render (https://genshin-codex.onrender.com) and the frontend has been deployed on Netlify (https://genshin-codex.netlify.app/). Viewing this project on Netlify should not require any additional installation. 

To view the source code for this project, please fork this repository and clone it to your GitHub using your personal SSH key. Users will need to run npm install in their console for dependencies to be functional. This project also utilizes the react-player library to embed videos into the application. You can find additional information and installation instruction for react-player here: https://www.npmjs.com/package/react-player

The react-player library was selected specifically to eliminate bugs caused by utilizing iframes to embed YouTube videos. Due to YouTube's usage of cookie data, embedding YouTube videos via iframes causes bugs in back button and refresh functionality in the browser.

The following link is to my backend repository: https://github.com/BryTheWiseGuy/json-server-template

This backend repository is formatted with two JSON files, a db.json and a seeds.json. The seeds.json file should not be updated unless the changes that need to be made are permanent. Any updates via the New Character Form will be updated in the db.json file. The seeds.json file is used to reset the database to its original content, and therefore should not be edited. If testing out the New Character Form, changes to the database can be seen on the Render backend link. Please be sure to run "npm run seed" in your terminal in the json-server-template repository after submitting a new character to reset the database to it's original contents.

### Running The Site Locally:

In order to run the site locally in development mode, users should start by running the json-server in json-server-template. While inside the directory, enter "json-server --watch db/db.json" into the terminal. You should then see the json server start up on http://localhost:3000

After starting the json server, you are then ready to start the dev build. Open another tab in your terminal, go into the genshin-impact-character-codex directory and run npm start. It may prompt you asking if you want to run the site on another port. Simply press Y and the site should start up. At this point you should be good to begin further development locally. Once you are finished, you can press CTRL + C inside the terminal to discontinue the json-server as well as the dev build run.

### Note on Deployed Site:

Because this project has been deployed on the free version of Render, it may take 10-15 seconds for the Render server to start up. Anyone viewing this project may need to refresh a couple of times in order for the website to fully populate.

## Usage and Visuals

Check out my showcase video below on YouTube! This video gives a detailed outline of how a user navigates and can utilize this web application.

[![Genshin.Codex Showcase Video](https://img.youtube.com/vi/fDl1DkPN1X0/0.jpg)](https://www.youtube.com/watch?v=fDl1DkPN1X0)

Screenshots:

![Genshin Impact Screenshot](/src/Screenshots/genshin-codex-ss-1.jpg)
![Genshin Impact Screenshot](/src/Screenshots/genshin-codex-ss-2.jpg)
![Genshin Impact Screenshot](/src/Screenshots/genshin-codex-ss-3.jpg)

In order to properly view this site, users should have their screen resolutions set to 2560 x 1440 - the site was not formatted to run on smaller screen sizes (still learning CSS and how CSS properties work together). If running on a smaller screen size, users will notice some pages like the New Character page does not allow them to scroll past a certain point. This is due to Overflow-y being hidden in the CSS in order to remove white space beneath the images.

In regards to the New Character Submission Form, many of the fields are restricted to URL input only, and the URL has to be copied and pasted into the form field. If the field is not allowing you to type into it, it requires a URL. The description fields are also limited to 250 characters in order to keep pages formatted properly and not cause weird things to happen with the CSS.

## Roadmap

Currently the search bar in this project does not have functionality, and that will be completed in future updates. Plans for this project in the future include details on every zone in the game, enemies, recipes, weapons, artifacts, and quests. These updates will be implemented in stages, and updates to this roadmap section will be made as these stages are completed.

## Support

For support regarding this project, please reach out via email at brythewiseguy@gmail.com

## Contributing

Pull requests are welcome! Please feel free to reach out to me if there are specific features you'd like to see implemented!  
For major changes, please utilize the support email above to discuss what you would like to change.  
All pushes to main branch will be made upon my approval.  
Please make sure to run and update tests as appropriate.

## Acknowledgment

All data and images sourced in this project came from the Genshin Impact game, as well as the official Genshin Impact Fandom Wiki: https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki  
Character showcase videos were sourced from the official Genshin Impact YouTube channel: https://www.youtube.com/@GenshinImpact  
Showcase videos for characters who do not have official showcase videos were sourced from SaM on YouTube: https://www.youtube.com/@SaM0602

## License

MIT License

Copyright (c) 2023 Brian Ashman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.