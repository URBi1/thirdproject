$(function() {
    const apiManager = new APIManager();
    const renderer = new Renderer();
    const dataManager = new DataManager(); // исправленная опечатка

    $('#generate-user').click(async function() {
        try {
            const data = await apiManager.gatherAllData();
            renderer.renderAll(data);
        } catch (error) {
            console.error('Error:', error);
        }
    });

    $('#save-user').click(function() {
        dataManager.saveData('userPage', apiManager.data);
    });
    
    $('#load-user').click(function() {
        const data = dataManager.loadData('userPage');
        renderer.renderAll(data);
    });
});
