import * as React from "react";
import * as ReactDOM from "react-dom";
import Card from "./card.jsx";
import css from "./home.scss";
import CardService from '../services/card-service.js';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    CardService.getCards()
    .then( cards => {
      this.setState({cards: cards});
    });
  }


  render() {
    return (
      <div className="ediasd-home">
      {
        this.state.cards.map( card => {
          return (
            <Card key={card.id} cardInfo={card}></Card>

          )
        })
      }

      </div>
    )
  }
}
