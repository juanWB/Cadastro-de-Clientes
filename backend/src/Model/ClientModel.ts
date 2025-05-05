import { DbConnection } from "../DbConfig/DbConfig";
import { TClient } from "../Schema/ClientSchema";


export const createClient = async(client: TClient) => {
    const query = 'INSERT INTO clientes (cnpj, nome, nome_fantasia, cep, logradouro, bairro, cidade, uf, complemento, email, telefone)' + 
                  'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const result = await DbConnection.query(query, [client.cnpj, client.nome, client.nome_fantasia,
                                            client.cep, client.logradouro, client.bairro, client.cidade,
                                            client.uf, client.complemento, client.email, client.telefone]);
    return result;
}


