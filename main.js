$(function() {
    const manager = new APIManager();
    const renderer = new Renderer();

    $('button').click(async function() {
        try {
            let userPromise = manager.getNRandomUsers(7);
            let user = await manager.getMainUser(userPromise);
            renderer.renderUser(user);

            let friends = await manager.getFriends(userPromise);
            renderer.renderFriends(friends);

            let quoteData = await manager.getRandomKanyeQuote();
            renderer.renderQuote(quoteData.quote);

            let pokemon = await manager.getRandomPokemon();
            renderer.renderPokemon(pokemon);

            let meatData = await manager.getRandomMeatText();
            renderer.renderMeat(meatData[0]);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
