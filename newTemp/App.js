import React ,{Component} from 'react' ;
import ToDo from './todo';
import ApiCal from './apiCal'
import UserApi from './selectApi'
import {BrowserRouter} from "react-router-dom"
import { AppContext } from './context';
class App extends Component {
  constructor(){
    super();
    this.state = {  }
  }
  
  render() { 
    
    return ( 
      <>
      <AppContext.Provider value={{value:29}}>

   
      <ToDo/>
      </AppContext.Provider>
      
      <UserApi/>
      <ApiCal url="https://jsonplaceholder.typicode.com/posts"/>
       
      </>);
  }
}
 
export default App;
