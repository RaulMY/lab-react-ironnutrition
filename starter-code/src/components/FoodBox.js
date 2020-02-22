import React, { Component } from 'react'

class FoodBox extends Component {

  constructor(props){
    super(props)
  }

  state = {
    food: this.props.food
  }
  
  handleChange = (e) => {
    let { value } = e.target; 
    let food = Object.assign({}, this.state.food, {quantity: value})
    this.setState({food})
  }

  sendFood = () => {
    if (this.state.food.quantity > 0) {
      this.props.addFood(this.state.food)
    }
  }

  render() {
    const food = this.state.food
    return (
      <div className="box">
        <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
          <img src={food.image} alt={"This is an image of " + food.name}/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
          <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
          </p>
          </div>
        </div>
        <div className="media-right">
            <div className="field has-addons">
            <div className="control">
                <input
                className="input"
                type="number" 
                onChange={this.handleChange}
                value={food.quantity}
                />
            </div>
            <div className="control">
                <button className="button is-info" onClick={this.sendFood}>
                +
                </button>
            </div>
            </div>
        </div>
        </article>
    </div>)
  }
}

export default FoodBox;