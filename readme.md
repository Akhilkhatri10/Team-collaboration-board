
Setup instructions(backend and frontend)

# Backend Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone
    cd TrelloClone/backend
    ```
2. **Install Dependencies**:
    ```bash
    npm install
    ```
3. **Create a `.env` File**:
   - Create a file named `.env` in the `backend` directory.
    - Add the following content to the `.env` file:
      ```
      MONGO_URI=mongodb+srv://<username>:<password>@cluster0.gjvkwny.mongodb.net/
      PORT=3000
      ```
4. **Start the Server**:
    ```bash
    npm start
    ```
# Frontend Setup Instructions
1. **Navigate to the Frontend Directory**:
    ```bash
    cd TrelloClone/frontend
    ``` 
2. **Install Dependencies**:
    ```bash
    npm install
    ```
3. **Start the Frontend**:
    ```bash
    npm start
    ```
4. **Access the Application**:
    - Open your web browser and go to `http://localhost:3000`.
# Additional Notes
- Ensure that you have Node.js and npm installed on your machine.
- Make sure to replace `<username>` and `<password>` in the `.env` file with your actual MongoDB credentials.
- The backend server runs on port 3000 by default, but you can change it in the `.env` file.
- The frontend will automatically connect to the backend server running on the same port.

Feature List
- **Task Management**: Create, edit, and delete tasks.
- **Task Modal**: A modal form for creating new tasks.
- **Edit/Delete Task**: A form for editing or deleting existing tasks.
- **Responsive Design**: The application is designed to be responsive and user-friendly.
- **Environment Variables**: Uses a `.env` file for configuration.

# Technologies Used
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, HTML, CSS
- **Database**: MongoDB Atlas   
- **Environment Management**: dotenv for managing environment variables