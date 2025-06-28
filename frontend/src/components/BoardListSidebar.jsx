
import React from 'react'

//toggle between boards 

const BoardListSidebar = () => {
  return (
    <div className="board-list-sidebar">
      <h2>Boards</h2>
      <ul>
        <li><a href="/boards/1">Board 1</a></li>
        <li><a href="/boards/2">Board 2</a></li>
        <li><a href="/boards/3">Board 3</a></li>
      </ul>
      <button className="add-board-btn" >Add New Board</button>
    </div>
  )
}

export default BoardListSidebar