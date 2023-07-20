Handlebars.registerHelper('properCase', function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

class Renderer {
    constructor() {
        this.userSource = $("#user-template").html();
        this.userTemplate = Handlebars.compile(this.userSource);

        this.friendsSource = $("#friends-template").html();
        this.friendsTemplate = Handlebars.compile(this.friendsSource);

        this.quoteSource = $("#quote-template").html();
        this.quoteTemplate = Handlebars.compile(this.quoteSource);

        this.pokemonSource = $("#pokemon-template").html();
        this.pokemonTemplate = Handlebars.compile(this.pokemonSource);

        this.meatSource = $("#meat-template").html();
        this.meatTemplate = Handlebars.compile(this.meatSource);
        this.savedUsersDropdownSource = $('#users-template').html();
        this.savedUsersDropdownTemplate = Handlebars.compile(this.savedUsersDropdownSource);


    }

    renderUser(user) {
        let newHTML = this.userTemplate(user);
        $('.user-container').empty().append(newHTML);
    }

    renderFriends(friends) {
        let newHTML = this.friendsTemplate({friends});
        $('.friends-container').empty().append(newHTML);
    }

    renderQuote(quote) {
        let newHTML = this.quoteTemplate({quote});
        $('.quote-container').empty().append(newHTML);
    }

    renderPokemon(pokemon) {
        let newHTML = this.pokemonTemplate(pokemon);
        $('.pokemon-container').empty().append(newHTML);
    }

    renderMeat(meat) {
        let newHTML = this.meatTemplate({meat});
        $('.meat-container').empty().append(newHTML);
    }

    renderAll(data) {
        this.renderUser(data.mainUser);
        this.renderFriends(data.friends);
        this.renderQuote(data.quote.quote);
        this.renderPokemon(data.pokemon);
        this.renderMeat(data.meat[0]);
    }
    updateSavedUsersDropdown(userKeys) {
        let newHTML = this.savedUsersDropdownTemplate({ users: userKeys });
        $('#saved-users').empty().append(newHTML);
    }
}
