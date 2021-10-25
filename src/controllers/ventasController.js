const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, connection) => {
        connection.query('SELECT * FROM Ventas', (err, ventas) => {
            if (err) {
                res.json(err);
            }
            console.log(ventas)
            res.render('ventas', {
                data: ventas
            })
        })
    })
};

controller.save = (req, res) => {
    const data =req.body;

    req.getConnection((err, connection) => {
        connection.query('INSERT INTO ventas set ?', [data], (err, venta) => {
            res.redirect('/')

        })
    })
};

controller.edit = (req, res) => {
    const {IDVenta} =req.params;
    req.getConnection((err, connection) => {
        connection.query('SELECT * FROM ventas WHERE IDVenta = ?', [IDVenta], (err, venta) =>{
            res.render('ventas_edit', {
                data: venta[0]
            })
        })
    })

};

controller.update = (req, res) => {
    const {IDVenta} =req.params;
    const newVenta = req.body;
    req.getConnection((err, connection) => {
        connection.query('UPDATE ventas set ? WHERE IDVenta = ?',[newVenta, IDVenta], (err, venta) =>{
            res.redirect('/')
        })
    })

}


controller.delete = (req, res) => {
    const {IDVenta} =req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM ventas WHERE IDVenta= ?', [IDVenta] ,(err, venta) => {
            res.redirect('/')
        })
    })

}







module.exports = controller
