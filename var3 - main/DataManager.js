class DataManager {
     saveUser(data) {
        const users = this.getUsers();
        const key = 'user' + (Object.keys(users).length + 1);
        users[key] = data;
        const usersString = JSON.stringify(users);
        localStorage.setItem('users', usersString);
        return key;
    }

    
    loadData(key) {
        const usersString = localStorage.getItem('users');
        const users = JSON.parse(usersString);
        return users[key];
    }

    getUsers() {
        const usersString = localStorage.getItem('users');
        return JSON.parse(usersString) || {};
    }
}