const axios = require('axios');

exports.getProductByBarcode = async (req, res) => {
    try {
        const barcode = req.params.barcode;
        const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
};