module.exports.noticias = function (app, req, res) {
    var connection = app.config.dbConnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

    NoticiasDAO.getNoticias(function (error, result) {
        res.render("noticias/noticias", { noticias: result });
    });
}

module.exports.noticia = function (app, req, res) {
    var connection = app.config.dbConnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);
    var id_noticia = req.query;

    NoticiasDAO.getNoticia(id_noticia, function (error, result) {
        res.render("noticias/noticia", { noticia: result });
    });
}