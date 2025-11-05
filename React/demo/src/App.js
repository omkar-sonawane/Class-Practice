
import './App.css';

function App() {
  return (
    <div className='container'>

      <form className='form'>

        <div className='field-container item-container'>
          <label>Username</label>
          <input/>
        </div>

        <div className='field-container item-container'>
          <label>Password</label>
          <input type='password'/>
        </div>

        <div className='btn-container item-container'>
          <button type='button'>Submit</button>
        </div>

      </form>
      
    </div>
  );
}

export default App;
