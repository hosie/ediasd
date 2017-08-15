import * as React from "react";
import * as ReactDOM from "react-dom";
import Card from "../card/card.jsx";
import css from "./home.scss";
import CardService from '../../services/card-service.js';
import Header from "../header/header.jsx";
import ActionBar from '../action-bar/action-bar.jsx';
import {Link} from 'react-router-dom';

const Home = (props) => (
  <div className="ediasd-home">
    <Header>
      <ActionBar>
        <Link to="/add">
          <div className="header__button ibm-icon ibm-add-new">
          </div>
        </Link>
      </ActionBar>
    </Header>

    {
      props.cards.map( card => {
        return (
          <Card key={card.id} cardInfo={card}></Card>
        )
      })
    }

  </div>
);

export default Home;
