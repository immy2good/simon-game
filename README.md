# Simon Game

A browser-based implementation of the classic **Simon** memory game, built with vanilla JavaScript, HTML5, and CSS3.

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Running the App](#running-the-app)
* [Accessing the Front End](#accessing-the-front-end)
* [Project Structure](#project-structure)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

## Demo

Try the live version here:

**GitHub Pages:**

```
https://immy2good.github.io/simon-game/
```

## Features

* **Memory Sequence**: Reproduce an ever-growing sequence of button presses.
* **Audio Feedback**: Unique tone plays for each color pad.
* **Visual Feedback**: Buttons light up and animate when activated.
* **Level Counter**: Displays the current round number.
* **Win Condition**: Complete 20 rounds to win the game.
* **Responsive Design**: Works on both desktop and mobile browsers.

## Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/immy2good/simon-game.git
   cd simon-game
   ```
2. No additional dependencies or build steps are required.

## Running the App

* **Open directly in browser:**

  * Double-click `index.html` in the project root.

* **Serve with a simple HTTP server (recommended):**

  ```bash
  # Python 3
  python3 -m http.server 8000

  # Node.js
  npx http-server -p 8000
  ```

  Then navigate to `http://localhost:8000`.

## Accessing the Front End

* **Local:** Use the steps above to launch on `http://localhost:8000` or by opening `index.html` directly.

* **Online:** The game is published via GitHub Pages:

  ```
  https://immy2good.github.io/simon-game/
  ```

## Project Structure

```plaintext
simon-game/
├── sounds/          # Audio files for the four color pads
├── index.html       # Main HTML structure and controls
├── styles.css       # Styling and responsive layout
├── game.js          # Game logic: sequence generation, input handling, UI updates
└── README.md        # This file
```

## Contributing

Contributions are welcome! To suggest improvements or fixes:

1. Fork the repository.
2. Create a branch (`git checkout -b feature/name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to your fork (`git push origin feature/name`).
5. Open a Pull Request.

Please follow the existing code style and include descriptive commit messages.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Developed by Immy (immy2good).

* GitHub: [immy2good](https://github.com/immy2good)
* Email: [imran2good@hotmail.com](mailto:imran2good@hotmail.com)
