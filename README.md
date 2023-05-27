
# Appointment Management System Documentation
WORKING LINK -- https://jn-appointment-manager.netlify.app/

## Table of Contents
1. Introduction
2. Installation and Setup
3. Usage
4. Components
5. File Structure
6. Conclusion

## 1. Introduction
The Appointment Management System is a web application built using React that allows users to manage appointments. Users can add new appointments, search for appointments, delete the appointments and sort them based on different criteria.

## 2. Installation and Setup
To set up and run the project locally, follow these steps:
1. Ensure that you have Node.js and npm (Node Package Manager) installed on your machine.
2. Clone the project repository from [GitHub](https://github.com/your-repo) or extract the provided code.
3. Open a terminal or command prompt and navigate to the project's root directory.
4. Run the following command to install the project dependencies:
   ```
   npm install
   ```
5. Once the installation is complete, start the development server using the following command:
   ```
   npm start
   ```
6. The application will be accessible in your web browser at `http://localhost:3000`.

## 3. Usage
Upon running the application, you will see the Appointment Management System interface. It consists of the following main components:

### 3.1. Add Appointment
The "Add Appointment" component allows you to create new appointments. To add an appointment, click on the "Add Appointment" button. A form will appear where you can enter the patient's name, appointment date, time, and additional notes. After filling in the details, click the "Submit" button to add the appointment. The newly added appointment will appear in the list.

### 3.2. Search
The "Search" component enables you to search for specific appointments based on the patient's name or appointment notes. To search for an appointment, enter the search query in the search input field. The list of appointments will automatically update to display the matching results. You can also sort the appointments by patient name or appointment date. Clicking the "Sort By" button provides options to select the sorting criteria (patient name or appointment date) and the sorting order (ascending or descending).

### 3.3. Appointment List
The "Appointment List" component displays the list of appointments. Each appointment item shows the patient's name, appointment date, time, and additional notes. To delete an appointment, click on the trash icon button associated with the appointment.

## 4. Components
The project consists of the following components:

### 4.1. App
- This is the main component that acts as the entry point of the application.
- It manages the state of the appointment data, search query, sorting criteria, and sorting order.
- It fetches appointment data from the `data.json` file using the `fetchData` function.
- It renders the other components: `AddAppointment`, `Search`, and `AppointmentList`.
- It passes necessary props to the child components.

### 4.2. AddAppointment
- This component provides a form to add new appointments.
- It manages the form state using the `formData` and `toogleForm` variables.
- It triggers the `onSendAppointment` callback with the new appointment information when the form is submitted.

### 4.3. Search
- This component handles the search functionality and sorting options.
- It manages the state of the search query and toggling of the dropdown menu.
- It triggers the `onQueryChange`, `onSortByChange`, and `onOrderByChange` callbacks based on user interactions.
- It renders the dropdown menu using the `DropDown` component.

### 4.4. DropDown
- This

 component represents the dropdown menu for selecting sorting criteria and order.
- It manages the state of the selected sorting criteria and order.
- It triggers the `onSortByChange` and `onOrderByChange` callbacks when a menu item is clicked.

### 4.5. AppointmentList
- This component displays the list of appointments.
- It receives the appointment data as props and maps over it to render individual appointment items.
- It triggers the `onDeleteAppointment` callback when the trash icon button is clicked.

## 5. File Structure
The project's file structure is organized as follows:

```
- src/
  - components/
    - AddAppointment.js
    - Search.js
    - DropDown.js
    - AppointmentList.js
  - style/
    - App.scss
    - AddAppointment.scss
    - Search.scss
    - AppointmentList.scss
  - App.js
  - index.js
  - data.json
```

- The `src/components` directory contains the individual component files.
- The `src/style` directory contains the corresponding SCSS stylesheets for each component.
- The `App.js` file is the main component that renders other components and manages the application state.
- The `index.js` file is the entry point of the application that renders the `App` component.
- The `data.json` file contains the initial appointment data in JSON format.

## 6. Conclusion
The Appointment Management System provides a user-friendly interface for managing appointments. Users can add new appointments, search for specific appointments, and sort them based on different criteria. The React components in the project work together to achieve these functionalities effectively.

Please note that this documentation provides a general overview of the project based on the provided code. If you need more detailed documentation or specific instructions, feel free to provide additional information or ask specific questions.
