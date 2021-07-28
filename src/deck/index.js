import React, { useState, useEffect } from 'react';

const suites = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'K', 'Q', 'A'];

const baseDeck = [];

suites.forEach((suite) => {
    values.forEach((value) => {
        baseDeck.push({ suite, value });
    });
});

export default class Deck {
    constructor(cards = null) {
        if (!cards) {
            this.cards = [...baseDeck];

            this.shuffle();
        } else {
            this.cards = cards;
        }
    }

    // Fisher-Yates shuffle https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = this.cards[i]
            this.cards[i] = this.cards[j]
            this.cards[j] = temp
        }
    }

    draw() {
        return this.cards.shift();
    }

    add(card) {
        return this.cards.push(card);
    }

    static isGreaterThan(card1, card2) {
        return values.indexOf(card1.value) >= values.indexOf(card2.value);
    }
}