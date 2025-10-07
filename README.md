# React Web Navigator

A multi-page personal portfolio and web navigator application built using React.js. This project leverages React Router v6 for dynamic routing and fetches live data from the GitHub API to populate profile information.

[**Live Demo**](https://debasishsasmal.github.io/React-Web-Navigator/) 

---

## Tech Stack

- **Framework:** React.js
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Language:** JavaScript (ES6)

---

## Screenshot

<img width="1277" height="879" alt="image" src="https://github.com/user-attachments/assets/0ffeb4c4-f787-4cfa-8dc7-c03788dc1034" />

---

## Features

- **Multi-Page Navigation:** A seamless user experience with client-side routing, eliminating page reloads.
- **Dynamic Routing:** Utilizes URL parameters to dynamically fetch and display data for different users.
- **Live API Data:** Fetches real-time user data directly from the GitHub API to keep the profile information current.
- **Personalized Content:** The project has been customized to feature your personal details, serving as a dynamic portfolio.
- **Responsive Design:** A clean UI that adapts to all screen sizes.

---

## Core Concepts & Libraries Used

This project demonstrates proficiency with key React ecosystem libraries and concepts:

- **React Router:** Implemented `createBrowserRouter`, `RouterProvider`, `<Outlet>`, `<Link>`, and `useParams` for a complete multi-page application structure.
- **`useEffect` & `useState`:** Used together to fetch data from the GitHub API upon component mount and manage the application's state.
- **API Fetching:** Asynchronous `fetch` calls to an external API to get and display live data.

---

## Getting Started / How to Run Locally

To get a local copy up and running, follow these simple steps.

1.  Clone the repository:
    ```sh
    git clone [https://github.com/debasishsasmal/React-Web-Navigator.git](https://github.com/debasishsasmal/React-Web-Navigator.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd React-Web-Navigator
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Run the application:
    ```sh
    npm run dev
    ```
