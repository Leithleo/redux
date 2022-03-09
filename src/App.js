
  import React from "react";
  import "./App.css"
  import { connect } from "react-redux";
  import ListTask from "./Components/ListTask/ListTask";
  import Addtask from "./Components/Addtask/Addtask";
  import Header from "./Components/Header/Header";
    
  const App = () => {

    return (
  
      <div>
         <>
          <Header />
          <div className="app">
            <div className="container">
              <div className="row">
                <div className="col-xs-8">
                  <ListTask />
                </div>
                
              </div>
            </div>
          </div>
        </>
      </div>
    )
  }
  
  // export default App
  
  
    
  
  
  const mapStateToProps = (state) => {
    return {
      todos: state.todos,
    };
  };
  
  export default connect(mapStateToProps)(App);
  