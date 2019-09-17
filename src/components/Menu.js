import React, { Component } from 'react';
import { menu } from './menu.json'
class Menu extends Component {
    constructor(){

        super();
        this.state =
        {
          menu
        }
    }

    
    render() {
        const todos=this.state.menu.map((tarea,indice)=>
        { return (
       
            <div className="card">
                <span><img src={tarea.image} alt="nada" className="float-left"></img><p className="text-left">{tarea.text}</p></span>
            </div>
                   
          
          )
        }
        )
        return (
            <div>
             {todos}
             
            </div>
        );
    }
}

export default Menu;