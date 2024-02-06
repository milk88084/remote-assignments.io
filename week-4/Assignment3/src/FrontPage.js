import React, { useState } from "react";
import "./Reset.css";
import "./App.css";
import { clickToW, clickToH } from "./Click.js";

export default function FrontPage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showGoodTime, setShowGoodTime] = useState(false);
  const [callAction, setCallAction] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    if (window.innerWidth <= 800) {
      setShowMenu(true);
    }
  };

  const handleHideXClick = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <p>Website Title/Logo</p>
        </div>
        <div className="nav">
          <ul className="item" onClick={handleMenuClick}>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
          </ul>
        </div>
      </header>

      <section className="welcomeAndHave">
        <h1
          id="clickItem1"
          onClick={() => clickToW(setShowWelcome, setShowGoodTime)}
          style={{ display: showWelcome ? "flex" : "none" }}
        >
          Welcome Message
        </h1>
        <h1
          id="clickItem2"
          onClick={() => clickToH(setShowWelcome, setShowGoodTime)}
          style={{ display: showGoodTime ? "flex" : "none" }}
        >
          Have a Good Time!
        </h1>
      </section>

      <section>
        <ul className="contentNo1">
          <li className="content1">Content Box1</li>
          <li className="content1">Content Box2</li>
        </ul>

        <ul className="contentNo2">
          <li className="content2">Content Box3</li>
          <li className="content2">Content Box4</li>
        </ul>
      </section>

      {callAction && (
        <button
          onClick={() => {
            setCallAction(false);
          }}
        >
          Call to Action
        </button>
      )}
      {!callAction && (
        <button
          onClick={() => {
            setCallAction(true);
          }}
        >
          Hide to Action
        </button>
      )}
      {!callAction && (
        <section>
          <ul className="contentNo1">
            <li className="content1">Content Box1</li>
            <li className="content1">Content Box2</li>
          </ul>

          <ul className="contentNo2">
            <li className="content2">Content Box3</li>
            <li className="content2">Content Box4</li>
          </ul>
        </section>
      )}

      <section
        id="clickMenuIcon"
        style={{ display: showMenu ? "block" : "none" }}
      >
        <div className="hiddenMenu">
          <div id="hideUl">
            <ul className="menuItems">
              <li>Item1</li>
              <li>Item2</li>
              <li>Item3</li>
              <li>Item4</li>
            </ul>
          </div>
          <div id="hideX" onClick={handleHideXClick}>
            <span>X</span>
          </div>
        </div>
      </section>
    </div>
  );
}
