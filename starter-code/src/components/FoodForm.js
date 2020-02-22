import React, { Component } from 'react'
import MyInput from './MyInput';

class FoodForm extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        name: "",
        calories: 0,
        image: "",
        quantity: 0
    }

    handleChange = (e) => {
        let { name, value } = e.target; 
        this.setState({[name]: value})
    }

    createFood = () => {
        this.props.createFood(this.state)
    }

    render() {
        return (
            <div>
                <MyInput 
                    label="Nombre"
                    type="text"
                    name="name"
                    handleChange={this.handleChange}
                />
                <MyInput 
                    label="Calorías"
                    type="number"
                    name="calories"
                    handleChange={this.handleChange}
                />
                <MyInput 
                    label="Ruta de la imagen"
                    type="text"
                    name="image"
                    handleChange={this.handleChange}
                />
                <MyInput 
                    label="Cantidad inicial"
                    type="number"
                    name="quantity"
                    handleChange={this.handleChange}
                />
                <button onClick={this.createFood}>Crear comida</button>
            </div>
        )
    }
}

export default FoodForm;