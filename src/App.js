
import Welcome from './Components/Welcome';
import Greet from './Components/Greet';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import './App.css'
import ClassCliked from './Components/ClassCliked';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import RefsDemo from './Components/RefsDemo';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickedCounterTwo from './Components/ClickedCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import Counered from './Components/Counered';


function App() {
  return (
    <div className="App">
      <Counered render = {(count , increment)=> 
      <ClickedCounterTwo>count = {count} increment = {increment}</ClickedCounterTwo>}>
      </Counered>

      <Counered render = {(count , increment)=> 
      <HoverCounterTwo>count = {count} increment = {increment}</HoverCounterTwo>}>
      </Counered>
      {/* <User render = { (isLoggedIn) => isLoggedIn ? 'tyagi' : 'guest' }/> */}
      {/* <ClickedCounterTwo/>
      <HoverCounterTwo/> */}
      {/* <WithCounter/> */}
{/* <ClickCounter name = 'tyagi'/>
<HoverCounter name = 'aditya'/> */}
      {/* <RefsDemo/>
      <StyleSheet primary ={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <FunctionClick />
      <ClassCliked/>
      <EventBind/> */}
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
      {/* <Welcome name = 'dtb'  heroname = 'maut ka saudagar'/>
      <Welcome name = 'prabhu' heroname = 'ullu'/> */}
      {/* <Greet name = 'shhanu' heroname ='sakuni' /> */}
      
    </div>
  );
}

export default App;
