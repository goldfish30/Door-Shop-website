# Rhino Doors - Door Ordering Website 

## Project Overview
Rhino Doors is a web-based application for ordering custom doors. This project demonstrates fundamental web development skills using HTML, CSS, and JavaScript, showcasing client-side form validation, dynamic UI elements, data visualization, and local storage for maintaining order information.

## Features
- **Interactive Product Selection**: Browse different door models with customizable options
- **Dynamic Product Visualization**: Real-time image updates when selecting different door colors
- **Client-Side Validation**: Form validation for personal information and order details
- **Data Visualization**: Implementation of Google Charts to display sales data
- **Order Processing**: Storing customer orders using browser's localStorage
- **Customer Feedback Integration**: Link to Google Forms for feedback

## Technologies Used
- HTML, CSS, JavaScript
- Google Charts API
- Local Storage API

## Architecture
The application follows a **4-layer architecture**:
1. **Presentation Layer** – Basic UI using HTML, CSS, and JavaScript
2. **Business Logic Layer** – JavaScript functions for managing selections and calculations
3. **Data Access Layer** – JavaScript functions for data handling and manipulation
4. **Database Layer** – Browser's localStorage for client-side data persistence

## Project Structure
```
├── website.html            # Main application page
├── businessLogic.js        # Core functionality and event handlers
├── dataAccess.js           # Data processing and storage logic
├── css.css                 # Styling for the application
├── googleForm.html         # Customer feedback integration
├── images/                 # Directory containing door images in different styles and colors
└── rhino.png               # Company logo
```

## How It Works
1. Users enter personal details and select door specifications (model, width, color, type, quantity)
2. Form validation ensures all required fields are properly completed
3. Order details are stored in browser's localStorage
4. Users can provide additional comments or questions

## Setup Instructions
1. Clone the repository
2. Open `website.html` in a modern web browser
3. No server setup required as this is a client-side application

## Future Enhancements
- Backend integration for persistent storage
- User authentication and payment processing
- Admin dashboard for order management
- Enhanced mobile responsiveness

## Author
I'm a second-year Software Engineering student at Braude College of Engineering. This project was developed to apply web development concepts learned during my studies. It represents my work with front-end technologies and user interface design.
