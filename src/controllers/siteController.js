const Product = require("./models/products");
const { multipleMongooseToObject } = require("../util/mongoose");

class siteController {
    // [GET] /
    error(req, res, next) {
        res.render("404");
    }
    index(req, res, next) {
        Product.find({ deletedAt: null })
            .then((products) =>
                res.render("main", {
                    products: multipleMongooseToObject(products),
                })
            )
            .catch(next);
    }
    sortByNameAZ(req, res, next) {
        Product.find({ deletedAt: null })
            .sort({ name: 1 })
            .then((products) =>
                res.render("main", {
                    products: multipleMongooseToObject(products),
                })
            )
            .catch(next);
    }
    sortByNameZA(req, res, next) {
        Product.find({ deletedAt: null })
            .sort({ vn_name: 1 })
            .then((products) =>
                res.render("main", {
                    products: multipleMongooseToObject(products),
                })
            )
            .catch(next);
    }
    sortByYearIncs(req, res, next) {
        Product.find({ deletedAt: null })
            .sort({ ending: -1 })
            .then((products) =>
                res.render("main", {
                    products: multipleMongooseToObject(products),
                })
            )
            .catch(next);
    }
    sortByYearDec(req, res, next) {
        Product.find({ deletedAt: null })
            .sort({ year: -1 })
            .then((products) =>
                res.render("main", {
                    products: multipleMongooseToObject(products),
                })
            )
            .catch(next);
    }

    // [GET] /search
    search(req, res, next) {
        Product.find({ deletedAt: null, name: new RegExp(req.query.q, "i") })
            .then((products) =>
                res.render("main", {
                    products: multipleMongooseToObject(products),
                })
            )
            .catch(next);
    }
}

module.exports = new siteController();
