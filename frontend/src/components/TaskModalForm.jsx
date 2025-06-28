import React from 'react'

const TaskModalForm = () => {
    return (
        <div>
            <h2>Create New Task</h2>
            <form action="/tasks" method="POST">
                <div className="form-group">
                    <label htmlFor="taskTitle">Task Title</label>
                    <input type="text" id="taskTitle" name="taskTitle" required />
                </div>

                <div className="form-group">
                    <label htmlFor="taskDescription">Description</label>
                    <textarea id="taskDescription" name="taskDescription" required></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="taskStatus">Status</label>
                    <select id="taskStatus" name="taskStatus">
                        <option value="todo">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="taskPriority">Priority</label>
                    <select id="taskPriority" name="taskPriority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="taskAssignedTo">Assigned To</label>
                    <input type="text" id="taskAssignedTo" name="taskAssignedTo" />
                </div>

                <div className="form-group">
                    <label htmlFor="taskDueDate">Due Date</label>
                    <input type="date" id="taskDueDate" name="taskDueDate" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="taskBoard">Board</label>
                    <select id="taskBoard" name="taskBoard">
                        <option value="board1">Board 1</option>
                        <option value="board2">Board 2</option>
                        <option value="board3">Board 3</option>
                    </select>
                </div>
                <button type="submit">Create Task</button>
            </form>
        </div>
    )
}

export default TaskModalForm