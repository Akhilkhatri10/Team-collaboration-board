
import React from 'react'

//show tasks grouped by status

const BoardDetailPage = () => {
  return (
    <div className="board-detail-page">
      <h1>Board Detail Page</h1>

      <div className="board-tasks">
        <div className="task-column todo">
          <h2>To Do</h2>
          {/* List of tasks in To Do status */}
        </div>

        <div className="task-column in-progress">
          <h2>In Progress</h2>
          {/* List of tasks in In Progress status */}
        </div>

        <div className="task-column done">
          <h2>Done</h2>
          {/* List of tasks in Done status */}
        </div>
      </div>
    </div>
  )
}

export default BoardDetailPage