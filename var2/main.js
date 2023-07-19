$(function() {
    const apiManager = new APIManager();
    const renderer = new Renderer();

    $('button').click(async function() {
        try {
            const data = await apiManager.gatherAllData();
            renderer.renderAll(data);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
