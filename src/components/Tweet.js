import React, { Component } from 'react';
import {tweets} from './tweets.json'
class Tweet extends Component {
    constructor(){

        super();
        this.state =
        {
          tweets
        }
    }

    render() {

        const todos=this.state.tweets.map((tarea,indice)=>
        { return (
       
            <div className="card">
                <div className="card-header">
                    {tarea.first_name} {tarea.last_name}-{tarea.nick}-{tarea.date}
                    <span className="float-right"><button className="btn btn-light">Favs:{tarea.favs}</button> <button className="btn btn-light">Retweets:{tarea.retweets}</button></span>
                </div>
                <span><img src={tarea.avatar} alt="nada" className="float-left"></img><p className="text-left">{tarea.content}</p></span>
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

export default Tweet;