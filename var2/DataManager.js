class DataManager {
    saveData(key, data) {
        const dataString = JSON.stringify(data);
        localStorage.setItem(key, dataString);
    }

    loadData(key) {
        const dataString = localStorage.getItem(key);
        return JSON.parse(dataString);
    }
}
