const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/apiDoc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(3000, () => {
    console.log('3000포트로 서버가 켜졌습니다.')
    
});