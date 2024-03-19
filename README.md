# Global 66 Pokedex App

This project implements a Pokedex app using the [PokeAPI](https://pokeapi.co/). The app is built using technologies such as Vue.js, Axios, Pinia, Jest and Vue Router. It consists of a welcome page, a list of all Pokémon that can be filtered by name, and also lets you add Pokémon to your favorites list. The app also has a modal that can be opened for each Pokémon, where you can see more information about the Pokémon, such as name, weight, height, and types.

## Live Demo

You can try out the application at [https://global66-pokemon-one.vercel.app/](https://global66-pokemon-one.vercel.app/).

## Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites

- Node.js and npm installed (Download and install from [Node.js website](https://nodejs.org/))

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/simonalvarado/global66_pokemon.git
    ```
2. Navigate to the project directory:

   ```bash
   cd global66_pokemon
   ```
3. Install the project dependencies:

   ```bash
   npm install
   ```
### Usage

1. Start the development server:

   ```bash
   npm run serve
   ```
    The application will be accessible at http://localhost:8080.

2. Open your browser and go to http://localhost:8080 to access the app.

## Structure

The project is structured as follows:

### Welcome page

The welcome page is the first page that the user sees when accessing the app. It contains a welcome message and a button to go to the Pokémon list.

![Welcome page](/example_images/welcome.png)

### Pokémon list

The Pokémon list page contains a search bar to filter Pokémon by name and a list of all Pokémon. Each Pokémon has a button to add it to the favorites list, if the Pokemon is clicked it opens a modal with more information about the Pokémon.

![Pokemon list](/example_images/list.png)

### Pokémon favorites list

The Pokémon favorites list page contains a list of all Pokémon that have been added to the favorites list. Each Pokémon has a button to remove it from the favorites list, if the Pokemon is clicked it opens a modal with more information about the Pokémon.

![Pokemon favorites list](/example_images/favorites-list.png)

### Pokémon modal

The Pokémon modal contains more information about the Pokémon, such as name, weight, height, and types.

![Pokemon modal](/example_images/modal.png)

### Share button

The share button allows the user to share the Pokémon with other users. When the button is clicked, it copies to the clipboard the Pokémon's name with its attributes separated by commas.

![Share button](/example_images/share-button.png)

## Credits

- [PokeAPI](https://pokeapi.co/)
- [Vue.js](https://vuejs.org/)
- [Axios](https://axios-http.com/)
- [Pinia](https://pinia.esm.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Jest](https://jestjs.io/)

## Contributing

Contributions are welcome! If you find any bugs or have any suggestions, please create an issue or a pull request.

## Contact

For any questions or comments, please contact me at my email: simonjesusalvarado@gmail.com