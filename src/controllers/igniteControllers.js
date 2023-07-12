const fs = require('fs')
const path = require('path')

const productsFilePath = path.join(__dirname,'../data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const productController = {
    detail: (req,res)=> {
        let idProduct = req.params.id;
        let productoBuscado ;

        for (let o of products){
            if (o.id == idProduct){
                productoBuscado=o
                break
  
            }
        }
        
            res.render('producto', {producto:productoBuscado})
      
    }
}