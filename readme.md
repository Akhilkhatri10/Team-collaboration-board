
#  Team-collaboration-board

A simple Team-collaboration-board inspired by Trello, built with the MERN stack. Supports creating, updating, and deleting tasks inside project boards.

---

##  Backend Setup Instructions

1. **Clone the Repository**  
   ```bash
   git clone <repo-url>
   cd TrelloClone/backend
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Create Environment Variables**  
   Create a `.env` file in the `backend` directory and add:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/
   PORT=3000
   ```

   Replace `<username>` and `<password>` with your actual MongoDB Atlas credentials.

4. **Start the Backend Server**  
   ```bash
   npm start
   ```

---

##  Frontend Setup Instructions

1. **Navigate to the Frontend Folder**  
   ```bash
   cd TrelloClone/frontend
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Start the Frontend Dev Server**  
   ```bash
   npm run dev
   ```

4. **Open the App**  
   Visit `http://localhost:5173` in your browser.

---

##  Features

-  **Board Management** – Create project boards (e.g., Marketing, Development).
-  **Task CRUD** – Create, edit, update, and delete tasks.
-  **Task Grouping** – Tasks are grouped by status: To Do, In Progress, Done.
-  **Task Assignment** – Assign tasks to users (manually by name or ID).
-  **Due Dates & Priority** – Add deadlines and set task priorities.
-  **Dynamic Routing** – Each board has its own route and dynamic task fetching.
-  **Modular Components** – Reusable React components for tasks and boards.
-  **Environment Config** – Uses `.env` for database and port setup.
-  **Error Handling** – Basic backend validation and error responses.

---

##  Technologies Used

###  Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

###  Frontend:
- React.js
- Vite
- HTML/CSS (Internal Styling)
- Axios

###  Database:
- MongoDB Atlas

---

## 📝 Notes

- Make sure **MongoDB Atlas** access is configured for your IP.
- Port `3000` is used for backend, and Vite defaults to `5173` for frontend.
- No authentication is implemented in this version; it's a basic setup for task management. 
