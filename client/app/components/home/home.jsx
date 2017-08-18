import * as React from "react";
import * as ReactDOM from "react-dom";
import Fact from "../fact/fact.jsx";
import css from "./home.scss";
import Header from "../header/header.jsx";
import ActionBar from '../action-bar/action-bar.jsx';
import {Link} from 'react-router-dom';

const Home = (props) => (
  <div className="home">
    <Header>
      <ActionBar>
        {
          props.quizesDue.length > 0 &&
          <Link onClick={props.onAddFact} to="/quiz">
            <div className="header__button ibm-icon ibm-event-announcement">
            </div>
          </Link>
        }
        <Link onClick={props.onAddFact} to="/add">
          <div className="header__button ibm-icon ibm-add-new">
          </div>
        </Link>
      </ActionBar>
    </Header>

    {
      props.facts.map( fact => {
        return (
          <Fact key={fact.id} factInfo={fact}></Fact>
        )
      })
    }

  </div>
);

export default Home;
