import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import SearchBar from './components/SearchBar';

class App extends Component {

  state = {
    formVisible: false,
    listOfFoods: foods,
    filteredFoods: foods,
    keyWord: "",
    todaysFoods: []
  }

  toggleForm = () => {
    this.setState({formVisible: !this.state.formVisible})
  }

  createFood = newFood => {
    this.setState({
      listOfFoods: [...this.state.listOfFoods, newFood], formVisible: false
    }, this.updateFoods)
  }

  updateKeyWord = keyWord => {
    this.setState({keyWord}, this.updateFoods)
  }

  updateFoods = () => {
    const filteredFoods = this.state.listOfFoods.filter(food=>{
      console.log(this.state.keyWord);
      return food.name.toLowerCase().includes(this.state.keyWord.toLowerCase())
    })

    this.setState({filteredFoods});
  }

  addFood = food => {
    let existed = false;
    let newTotalFoods = this.state.todaysFoods.map(oldFood => {
      if (oldFood.name == food.name) {
        oldFood.quantity = +oldFood.quantity + +food.quantity
        existed = true;
      }
      return oldFood
    })

    this.setState({
      todaysFoods: existed ? newTotalFoods : [...newTotalFoods, food]
    })
  }

  deleteItem = i => {
    this.state.todaysFoods.splice(i, 1);
    this.setState({});
  }

  render() {
    return (
      <div className="App">
        <SearchBar updateFoods={this.updateKeyWord}/>
        <div>
          <button onClick={this.toggleForm}>{this.state.formVisible ? 'Close mi form' : 'I want to add a new food'}</button>
          {
            this.state.formVisible && <FoodForm createFood={this.createFood}/>
          }
        </div>
        <br/>
        <div className="columns">
          <div className="column">
            {
              this.state.filteredFoods.map(food=><FoodBox key={food.name} food={food} addFood={this.addFood}/>)
            }
          </div>
          <div className="column">
            <h3>Today's foods</h3>
            {
              this.state.todaysFoods.map((food, i)=>{
              return <div><p 
                key={food.name + "-today"} >
                  {food.quantity} {food.name} {food.quantity*food.calories} cal
                </p>
                <span onClick={()=>this.deleteItem(i)}>X</span>
                </div>
              })
            }
            <p>Total: {this.state.todaysFoods.reduce((acu, curr)=>{
              return acu + curr.quantity * curr.calories
            }, 0)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
