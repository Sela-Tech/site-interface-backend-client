const main = require("./app/controllers/main");

module.exports = (app)=>{
    app.route("/")
    .get(main.find)
    .post(main.new)
    .delete(main.deleteBS)

    app.route('/credentials')
    .get(main.get_cred)


}


