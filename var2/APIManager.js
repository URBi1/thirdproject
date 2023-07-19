class APIManager {
    constructor() {
        this.data = {};
    }

    getNRandomUsers(N) {
        return $.ajax({
            url: `https://randomuser.me/api/?results=${N}`,
            dataType: 'json',
        }).fail(function (error) {
            console.error('Error while looking for data for randomuser', error);
        });
    }

    getRandomKanyeQuote() {
        return $.ajax({
            url: `https://api.kanye.rest`,
            dataType: 'json',
        }).fail(function (error) {
            console.error('Error in Kanye quote', error);
        });
    }

    getRandomPokemon() {
        let randomID = Math.floor(Math.random() * 898) + 1;
        return $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${randomID}`,
            dataType: 'json',
        }).fail(function (error) {
            console.error('Error in Pokemon data ', error);
        });
    }

    getRandomMeatText() {
        return $.ajax({
            url: `https://baconipsum.com/api/?type=meat-and-filler`,
            dataType: 'json',
        }).fail(function (error) {
            console.error('Error in meat ', error);
        });
    }

    async gatherAllData() {
        const userPromise = this.getNRandomUsers(7);
        const promiseArray = [
            userPromise,
            this.getRandomKanyeQuote(),
            this.getRandomPokemon(),
            this.getRandomMeatText()
        ];
    
        const [users, quote, pokemon, meat] = await Promise.all(promiseArray);
    
        this.data.mainUser = users.results[0];
        this.data.friends = users.results.slice(1);
        this.data.quote = quote;
        this.data.pokemon = pokemon;
        this.data.meat = meat;
    
        return this.data;
    }
}
