import React, { useState } from 'react';
import './style.css';
import Deck from '../deck';
import Card from '../card';

const deck = new Deck();

const myDeck = new Deck(deck.cards.slice(0, 26));
const opponentsDeck = new Deck(deck.cards.slice(26, 52));

function App() {
    const [currentCard, setCurrentCard] = useState(null);
    const [opponentsCard, setOpponentsCard] = useState(null);
    const [winner, setWinner] = useState(null);

    const drawCard = () => {
        const myCard = myDeck.draw();
        const opponentsCard = opponentsDeck.draw();

        if (myDeck.cards.length === 0) {
            alert('You lost! Close this message to restart.');
            window.location.reload();
        }

        if (opponentsDeck.cards.length === 0) {
            alert('You won! Close this message to restart.');
            window.location.reload();
        }

        const doIWin = Deck.isGreaterThan(myCard, opponentsCard);

        if (doIWin) {
            setWinner('me');

            myDeck.add(myCard);
            myDeck.add(opponentsCard);
        } else {
            setWinner('opponent');

            opponentsDeck.add(opponentsCard);
            opponentsDeck.add(myCard);
        }

        setCurrentCard(myCard);
        setOpponentsCard(opponentsCard);
    }

    return (
        <div>
            <h2>War!</h2>
            {
                opponentsCard &&
                <>
                    <h3>Opponents card</h3>
                    <Card win={winner === 'opponent'} suite={opponentsCard.suite} value={opponentsCard.value} />
                </>
            }

            <button onClick={drawCard} className="drawButton">
                {winner === null ? 'Start game' : 'Next Round'}
            </button>

            {
                currentCard &&
                <>
                    <h3>My card</h3>
                    <Card win={winner === 'me'} suite={currentCard.suite} value={currentCard.value} />
                </>
            }

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Owner</th>
                            <th>Cards Left</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Opponent</td>
                            <td>{opponentsDeck.cards.length}</td>
                        </tr>
                        <tr>
                            <td>Me</td>
                            <td>{myDeck.cards.length}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
