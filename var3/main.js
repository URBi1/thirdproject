$(function() {
    const apiManager = new APIManager();
    const renderer = new Renderer();
    const dataManager = new DataManager();
    const savedUsers = dataManager.getUsers();
    renderer.updateSavedUsersDropdown(Object.keys(savedUsers));

    $('#generate-user').click(async function() {
        try {
            const data = await apiManager.gatherAllData();
            renderer.renderAll(data);
        } catch (error) {
            console.error('Error:', error);
        }
    });

    $('#save-user').click(function() {
        const data = apiManager.getData();
        const key = dataManager.saveUser(data);
        const users = dataManager.getUsers();
        renderer.updateSavedUsersDropdown(Object.keys(users));
    });
    
    $('#load-user').click(function() {
        const key = $('#saved-users').val();
        const data = dataManager.loadData(key);
        renderer.renderAll(data);
    });
});
