import './App.css';
import Button from './Components/Features/Button';
import Form from './Components/Features/Form';
import {UserCard,Header,Footer} from './UsersComponents';

function App() {
  const usersArray = [
    {fName:'Dod',lName:'Shelo',age:15},
    {fName:'Po',lName:'Teto',age:35},
    {fName:'Ca',lName:'Rot',age:55},
    {fName:'joe',lName:'Mama',age:6},
    {fName:'Niko',lName:'Dogo',age:13},
  ]
  const SendIt =()=> usersArray.map((user,index) =>{
    return (<div key={index}><UserCard fName={user.fName} lName={user.lName} age={user.age} /></div>)
  })
  const appText = 'i was clicked'
  function print(){
    console.log(appText);
  }
 
  function printTime(){
    let date = new Date();
    console.log(date);
  }
  const FinalTouch =()=>{
    return(<div style={{ marginTop:'50px',display:'flex',flexFlow:'flexWrap',justifyContent:'space-around'}}>
      
      <Header headerTitle='My Title'/>
      <SendIt />
      <Button text='CLICK ME' clickEvent={print} textToPrint={appText}/>
      <Form clickEvent={printTime} inputTitle='input somthing' placeHolder='placeholder text' butonText ='text on the button'/>
      <Footer footerTitle='My Footer' />
    </div>)
  }

  return (
    <div className="App">
   <FinalTouch/>
    </div>
  );
}

export default App;
