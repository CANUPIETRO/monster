
import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: "",
    }
  }

  componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response => response.json()))
    .then((users) => this.setState(()=> {
      return {monsters:users}
    }))
  }
  onSeatchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() =>{
    return { searchField};
  })
  }
  render(){

    
    const {monster, searchField} = this.state;
    const {onSeatchChange} = this;
    const fliteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    

    return (
      <div className="App">
        <input 
          className='search-box' 
          type="search" 
          placeholder='search monster' 
          onChange={onSeatchChange}
        />

        <CardList monsters={fliteredMonsters} />
      </div>
    );
  }
}
export default App;
