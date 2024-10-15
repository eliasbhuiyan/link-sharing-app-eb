# React Vite Frontend

This is the frontend for a link-sharing app built using React and Vite. The app allows users to create, update, delete, and reorder links, as well as manage profile information.
## Live Link : https://link-sharing-app-eb.vercel.app/
## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Project](#running-the-project)
   - [Building for Production](#building-for-production)
5. [Environment Variables](#environment-variables)
6. [Deployment](#deployment)

## Project Overview

This project is part of a full-stack link-sharing application where users can manage their personal links. This frontend is built using React and Vite for fast development and efficient bundling.

## Features

- Add, edit, and remove links.
- Drag and drop links to reorder.
- Preview the profile with all the added links.
- Manage user profile details (picture, first name, last name, email).
- Form validation for both links and profile details.
- Responsive layout for mobile and desktop screens.
- Integrated with a Node.js backend API for persistent storage.

# Signup Feature
The Signup feature allows new users to register for an account on the platform.
![signup](https://github.com/user-attachments/assets/4363328e-a3d4-4ad8-829e-8167a2bb6678)

# OTP Verification Feature
The OTP (One-Time Password) feature enhances security by verifying user identity during the signup process. After registering, users will receive a unique verification code via email.
![otp](https://github.com/user-attachments/assets/ecf0575b-ddd6-429d-a1fc-ca6b82ef23d7)

# Login Feature | Continue as Guest Feature
The Login feature allows registered users to securely access their accounts on the platform. Users must provide their registered email and password to log in.
The Continue as Guest option allows users to explore the platform without creating an account.
![signin](https://github.com/user-attachments/assets/4bf3a0a9-48d7-4135-a5be-e7a3e48907b5)

# Customize Link Feature | Link Verification Feature
The Customize Link feature allows users to create, edit, and manage their personalized links. Users can add various links, specify a title, and select categories for better organization.
The Link Verification feature ensures that all submitted links are valid and functional before they are saved.
![addlink](https://github.com/user-attachments/assets/2ec3afca-11bc-4f70-85b0-f4db45a654e8)

# Drag and Drop to Reorder Links Feature
The Drag and Drop to Reorder Links feature allows users to easily rearrange their customized links using a simple and intuitive drag-and-drop interface.
![dnd](https://github.com/user-attachments/assets/209bf87f-c971-4625-bae5-bf8f1c83e6c4)

# Profile Details Feature
The Profile Details feature allows users to manage and personalize their account information, enhancing their overall experience on the platform.
### Key Functionality:

First Name and Last Name: Users can input and update their first and last names to personalize their profiles. This information can be displayed publicly or privately based on user preferences.
Profile Picture: Users can upload a profile picture to visually represent themselves on the platform. The image is stored securely and displayed alongside their account information.
Profile Management:
Editing: Users can easily edit their profile details at any time to keep their information up-to-date.
Validation: The system ensures that the first and last name fields are not left blank, prompting users to provide this information if they attempt to save their profile with missing data.
![profiledetails](https://github.com/user-attachments/assets/033ed4a3-9752-463c-b107-fbda5e99892f)

# Preview Profile Feature
The Preview Profile feature allows users to view their profile as it will appear to others on the platform, providing a clear and accurate representation of their information.
![preview](https://github.com/user-attachments/assets/36050936-72c7-4fae-a9aa-2a3e8bca9b9f)

# Copy Profile Link Feature | Live Profile Feature
The Copy Profile Link feature enables users to easily share their profile with others by providing a simple way to copy their unique profile URL to the clipboard.
### Key Functionality:

One-Click Copy: Users can click a button to instantly copy their profile link, streamlining the sharing process.
Feedback Notification: Upon copying the link, users receive a visual confirmation (such as a toast message) indicating that the link has been successfully copied, ensuring clarity.
Benefits:

Ease of Sharing: Users can quickly share their profiles with friends, family, or colleagues through various platforms (e.g., social media, messaging apps).
Increased Visibility: Facilitating easy sharing promotes greater engagement and interaction within the community.
![copylink](https://github.com/user-attachments/assets/db9837e4-0492-403e-91c0-f75ab62ad210)



## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React-DnD**: A drag-and-drop library for React.
- **React Icons**: Icon library for React.
- **React Toastify**: For notification alerts.
- **Axios**: For making HTTP requests to the backend API.

## Getting Started

Follow these steps to get the frontend up and running locally.

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/link-sharing-app-frontend.git
   cd link-sharing-app-frontend
