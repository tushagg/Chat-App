
# ✨ Real-time MERN Chat Application

A full-stack, real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js), Socket.IO, and Tailwind CSS.

## Features

*   **User Authentication:** Secure user sign-up and login with JWT (JSON Web Tokens).
*   **Real-time Messaging:** Instant message delivery and updates using Socket.IO.
*   **Online Status:** See which users are currently online.
*   **Image Attachments:** Attach and send images, which are uploaded to Cloudinary.
*   **Global State Management:** Efficient state handling on the frontend with Zustand.
*   **Responsive Design:** A clean and modern UI built with Tailwind CSS and daisyUI that works on all screen sizes.
*   **Error Handling:** Robust error handling on both the server and client.

## Tech Stack

*   **Backend:** Node.js, Express.js, MongoDB, Socket.IO, Mongoose
*   **Frontend:** React.js, Zustand, Tailwind CSS, daisyUI
*   **File Storage:** Cloudinary

## Environment Variables

The backend requires a `.env` file with the following variables. Create this file in the `/backend` directory.

```
# MongoDB Connection String
# Replace with your local or cloud MongoDB URI
MONGODB_URI=mongodb://localhost:27017/chat-app

# Port for the backend server
PORT=5001

# JWT Secret for signing authentication tokens
# Use a long, random string for security
JWT_SECRET="your_super_secret_key"

# Cloudinary Credentials for image uploads
# Get these from your Cloudinary dashboard
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

