const express = require('express');
const router = express.Router();
var getConnection = require('../conexion')

//Consultar auto por id
router.get('/auto/getById/:id', (req, res) => {
    getConnection(function(err, conn) {
        if (err) {
            return res.sendStatus(400);
        } else {
            const { id } = req.params;
            conn.query('SELECT * FROM auto WHERE id = ?',
                [id], function(err, rows) {
                    if (err) {
                        conn.release();
                        return res.json().status(400).send('No se puede conectar a la base de datos');
                    } else {
                        res.send(rows);
                        conn.release();
                    }
                });
        }
    });
});



//Consulta los autos con estado activo
router.get('/autoActivo', (req, res) => {
    getConnection(function(err, conn) {
        if (err) {
            console.log("No se puede conectar a la Base de Datos")
        } else {
            conn.query('SELECT * FROM auto WHERE estado ="activo" ', function(err, rows){
                if (err) {
                    conn.release();
                    console.log(err);
                } else {
                    res.send(rows);
                    conn.release();
                }

            });
        }
    });
});

//Consulta los autos con estado activo
router.get('/autoInactivo', (req, res) => {
    getConnection(function(err, conn) {
        if (err) {
            console.log("No se puede conectar a la Base de Datos")
        } else {
            conn.query('SELECT * FROM auto WHERE estado ="dado de baja" ', function(err, rows){
                if (err) {
                    conn.release();
                    console.log(err);
                } else {
                    res.send(rows);
                    conn.release();
                }

            });
        }
    });
});

// Actualizar un auto por ID
router.put('/actualizarAuto/:id', (req, res) => {
    const { id } = req.params;

    const data = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        potencia_motor: req.body.potencia_motor,
        categoria: req.body.categoria,
        precio_venta: req.body.precio_venta,
        unidades_en_stock: req.body.unidades_en_stock,
        stock_minimo: req.body.stock_minimo,
        estado: req.body.estado,
        anio_fabricacion: req.body.anio_fabricacion
    };

    const query = `UPDATE auto SET marca = ?, modelo = ?, potencia_motor = ?, categoria = ?,
            precio_venta = ?, unidades_en_stock = ?, stock_minimo = ?, estado = ?, anio_fabricacion = ? WHERE id = ?`;

    getConnection(function(err, conn) {
        if (err) {
            console.log("No se puede conectar a la Base de Datos");
            res.status(500).json({ error: 'Error de conexión a la base de datos' });
        } else {
            conn.query(query, [
                data.marca,
                data.modelo,
                data.potencia_motor,
                data.categoria,
                data.precio_venta,
                data.unidades_en_stock,
                data.stock_minimo,
                data.estado,
                data.anio_fabricacion,
                id
            ], function(err, result) {
                if (err) {
                    conn.release();
                    console.log(err);
                    res.status(500).json({ error: 'Error al actualizar el auto' });
                } else {
                    if (result.affectedRows > 0) {
                        res.json({ status: 'Auto actualizado exitosamente' });
                    } else {
                        res.status(404).json({ error: 'Auto no encontrado' });
                    }
                    conn.release();
                }
            });
        }
    });
});

module.exports = router;
