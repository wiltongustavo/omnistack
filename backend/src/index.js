const express = require('express');
const cors = require('cors'); 
const routes = require('./routes')
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * Rotas/ Recursos
 */

 /**
  * Metodos  HTTP:
  * GET: Buscar uma informação do back-ent
  * POST:Criar uma Informação no back-end
  * PUT: Alterar um ainformação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Parms:Parâmetros noemeados enviados na rota após  "?" (Filtros, Paginação,)
   * Route Params: Parâmetros utilizados para indentificar recursos 
   * Request Body: Corpo Da Requisição, utilizado para criar ou alterar recursos 
   */

   /**
    * SQL: MYSQL, SQLITE, PostgreSQL, Oracle, Microsoft SWL Server
    * NoSQL: MongoDB, CouchDB, ETC
    */

    /**
     * Driver: Select * FROM users
     * Query Builder: table('users').sekect ('*').where()
     */

