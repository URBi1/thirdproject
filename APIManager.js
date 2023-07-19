class APIManager {
    constructor() {
        this.data = {}
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

    async getMainUser(userPromise) {
        try {
            let users = await userPromise;
            this.data.mainUser = users.results[0];
            return this.data.mainUser;
        } catch (error) {
            console.error('Error in getMainUser:', error);
        }
    }
    
    async getFriends(userPromise) {
        try {
            let users = await userPromise;
            this.data.friends = users.results.slice(1);
            return this.data.friends;
        } catch (error) {
            console.error('Error in getFriends:', error);
        }
    }
    
}
