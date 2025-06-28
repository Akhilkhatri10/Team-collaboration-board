import BoardDetailPage from './components/BoardDetailPage'
import BoardListSidebar from './components/BoardListSidebar'
import EditDeleteTask from './components/EditDeleteTask'

function App() {

  return (
    <>
      <div className="app-container">
        <BoardListSidebar />
        <div className="main-content">
          <BoardDetailPage />
          <EditDeleteTask />
        </div>
      </div>
      
    </>
  )
}

export default App
