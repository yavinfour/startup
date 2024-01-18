# Travel America

This application will effectively allow people to centralize all their travel planning into one general area. They will be able to click on the interactive map and find information about places they might want to visit as well as save their favorites.

## Specification Deliverable

### Elevator pitch
  Planning a trip can be completely overwhelming, there is so much information out there and it's spread out over the whole internet. What if all of that information was compiled into one user-friendly source? Imagine being able to look at the map, find a place close to home (or far away if that's what you're looking for) and with one simple click you can see the interesting sites and activities that are available there. Rather than searching through pages and pages of information to find an interesting place to visit, you can simply click on the interactive map and find your new adventure. 

### Design

This is how it would look to interact with the map.

![Screenshot of my mockup that shows the map and what the main page of the site should look like](https://github.com/yavinfour/startup/blob/main/Screenshot%202024-01-17%20183914.png)

And in the back, the client would connect to the server which would pull information out of the database.

![Screenshot of the backend, how the server and client are connected](https://github.com/yavinfour/startup/blob/main/20240117_194649.jpg)

### Key features
Secure login over HTTPS
Interactive map
Displays information about selected areas
Ability to favorite places you want to visit
Information is updated dynamically by the developer

I am going to use the required technologies in the following ways.

#### HTML - There will be an HTML page with a map that people can interact with, and a second page for login
#### CSS - This will be the map, it will be interactive and made of css elements
#### JavaScript - Allows the user to login and displays information for the place that they selected
#### Service - Has endpoints to
  ~ login
  ~ retrieve favorites
  ~ add favorites
#### DB/Login - Stores user information and that table links to a table that stores favorite city information. There is also a database to store information about the various locations
#### WebSocket - Potentially the user is notified when new information is added to one of their favorite locations or when a new location becomes available to select
#### React - Application ported to use the React web framework.
## HTML deliverable

### HTML pages - 
### Links - 
### Text - 
### Images - 
### DB/Login - 
### WebSocket - 
## CSS deliverable

### Header, footer, and main content body
### Navigation elements - 
### Responsive to window resizing - 
### Application elements - 
### Application text content - 
### Application images - 
## JavaScript deliverable

### login - 
### database - 
### WebSocket - 
### application logic - 
## Service deliverable

### Node.js/Express HTTP service - 
### Static middleware for frontend - 
### Calls to third party endpoints - 
### Backend service endpoints - 
### Frontend calls service endpoints - 
## DB/Login deliverable

### MongoDB Atlas database created - 
### Stores data in MongoDB - 
### User registration - 
### existing user - 
### Use MongoDB to store credentials - 
### Restricts functionality - 
## WebSocket deliverable

### Backend listens for WebSocket connection - 
### Frontend makes WebSocket connection - 
### Data sent over WebSocket connection - 
### WebSocket data displayed - 
## React deliverable

### Bundled and transpiled - 
### Components - 
### Router - 
### Hooks - 
### About
### An example start up project

Resources
 Readme
License
 MIT license
 Activity
 Custom properties
Stars
 2 stars
Watchers
 1 watching
Forks
 25 forks
Report repository
Releases
No releases published
Packages
No packages published
Languages
JavaScript
51.1%
 
Vue
40.3%
 
Shell
6.3%
 
HTML
2.3%
Footer
