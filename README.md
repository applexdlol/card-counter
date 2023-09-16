# Card Counter

Card counting is a technique used by blackjack players to gain a statistical edge over the casino. By keeping track of which cards have been dealt, players can make informed decisions on their bets and actions. This repository contains a tool designed to aid in this technique. **It's important to emphasize that this tool is intended for educational purposes only.**

## Table of Contents
- [Features](#features)
- [How It Works](#how-it-works)
- [Installation and Usage](#installation-and-usage)
- [Disclaimer](#disclaimer)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Card Entry:** Easy input methods for the player's hand, dealer's hand, and the number of decks.
- **True Count Calculation:** The tool calculates the 'true count' based on a running count methodology and adjusts it for the number of decks remaining.
- **Advice System:** Provides advice on how to proceed in the game based on the current count.
- **Responsive Design:** The interface is designed to be user-friendly and is responsive across various devices.

## How It Works
The card counting system used in this tool is based on a running count methodology. As cards are dealt:

- Cards 2 through 7 increase the count by +1.
- 10s, face cards, and Aces decrease the count by -1.
- 8s and 9s have no effect on the count.

To get the 'true count', we adjust the running count based on the number of decks remaining. The 'true count' assists players in making statistically optimal decisions during gameplay. However, while counting can improve odds, it does not guarantee a win.

## Installation and Usage
1. Clone the repository: 
   ```
   git clone https://github.com/applexdlol/card-counter.git
   ```
2. Navigate to the project folder and open the `index.html` file in a web browser.
3. Follow the on-screen instructions to input the cards and get the true count.

## Disclaimer
This tool is designed for educational purposes and to demonstrate the underlying principles of card counting. While card counting can increase a player's odds, it's not a guaranteed winning strategy. Additionally, many casinos forbid card counting, and using such techniques may lead to being banned or faced with other penalties. Always be aware of and respect local regulations and guidelines.

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues](https://github.com/applexdlol/card-counter/issues) page.

## License
This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

---

You can customize the content further to better fit your project.
