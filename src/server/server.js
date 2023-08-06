const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const productRouter = require('/Routes/productRouter');

app.use('/api/product', productRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
