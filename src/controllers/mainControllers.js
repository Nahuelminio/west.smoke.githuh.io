const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../../ignite.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let controladorMain = {
  home: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.render("home", { productos: products });
    
  },
  elfbar: (req,res) =>{
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.render("elfbar", { productos: products });

  },
   oxbar: (req,res) =>{
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.render("oxbar", { productos: products });

  }
};

module.exports = controladorMain;
