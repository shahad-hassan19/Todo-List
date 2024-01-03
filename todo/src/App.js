import './CSS/App.css';

function App() {
  const addTask = () => {
    console.log("task added");
  }

  return (
    <div className="app">
        <div className="todo-box">
            <h1 className="heading">Todo List</h1>
            <div className="input-group">
              <input type="text" className="input-box" id="input-txt" />
              <button className='btn' htmlFor="input-txt" onClick={addTask}>Add</button>
            </div>
            <div>
            {
              addTask() &&
              <div>
                <p>Task Added</p>
                <button className='btn'>Edit</button>
                <button className='btn'>Delete</button>
              </div>
            }
            </div>
        </div>
    </div>
  );
}

export default App;
