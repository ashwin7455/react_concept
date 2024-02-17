
import Welcome from './Components/Welcome';
import Greet from './Components/Greet';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Hello name = 'shhanu' heroname ='sakuni'>
        <p>this is a children prop</p>
      </Hello>
      <Hello name = 'dtb'  heroname = 'maut ka saudagar'>
        <button> click me</button>
      </Hello>
      <Hello name = 'prabhu' heroname = 'ullu' >
        <button> mujhe dabao </button>
      </Hello>
      <Welcome name = 'billu' heroname ='sakuni'/> */}
      <Welcome name = 'dtb'  heroname = 'maut ka saudagar'/>
      <Welcome name = 'prabhu' heroname = 'ullu'/>
      <Greet name = 'shhanu' heroname ='sakuni' />
      
    </div>  
  );
}

export default App;
