# Accordion Project Readme

## Overview

This project provides a simple and customizable accordion interface for Frequently Asked Questions (FAQs). The project is built using HTML, CSS (compiled from SCSS), and JavaScript. The accordion allows users to expand and collapse individual questions to view their respective answers.

## Project Structure

The project consists of three main files:

1. **index.html**

   - This file contains the HTML structure of the accordion, including the questions and answers.

2. **style.scss**

   - This SCSS file defines the styling for the accordion, including the background image, container dimensions, and animation effects.

3. **logic.js**
   - The JavaScript file handles the functionality of the accordion. It uses event listeners to toggle the "active" class, which controls the visibility of the answers. Clicking on a question expands its answer while collapsing others.

## Getting Started

To use the accordion in your project, follow these steps:

1. Include the `style.css` file in your HTML document to apply the styling.

   ```html
   <link rel="stylesheet" href="/styles/style.css" />
   ```

2. Include the `logic.js` file at the end of your HTML body to enable the accordion functionality.

   ```html
   <script src="./logic.js"></script>
   ```

3. Customize the content in the `index.html` file to fit your FAQs. You can add or remove questions and answers as needed.

4. Feel free to modify the styling in the `style.scss` file to match your project's design.

## Styling Customization

The SCSS file provides a structured way to customize the accordion's appearance. You can adjust dimensions, colors, and animations according to your project's requirements. The `active` class is used to apply styles to the active (expanded) state of the accordion items.

## Notes

- The JavaScript logic ensures that only one answer is expanded at a time. Clicking outside the accordion collapses any open answers.
- The project includes a background image for the accordion container. You can replace it with your own background or remove it based on your design preferences.

Feel free to explore and adapt this accordion project to enhance the user experience on your website. If you have any questions or encounter issues, please refer to the documentation or reach out to the project contributors.

Happy coding!
