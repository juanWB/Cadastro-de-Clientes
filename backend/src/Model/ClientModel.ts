import { DbConnection } from "../DbConfig/DbConfig";
import { TClient } from "../Schema/ClientSchema";


export const createClient = async(client: TClient) => {
    const query = `INSERT INTO clientes (cnpj, nome, nome_fantasia, cep,
                   logradouro, bairro, cidade, uf, complemento, email, telefone)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const result = await DbConnection.query(query, [client.cnpj, client.nome, client.nome_fantasia,
                                            client.cep, client.logradouro, client.bairro, client.cidade,
                                            client.uf, client.complemento, client.email, client.telefone]);
    return result;
}


export const getClients = async() => {
    const query = `SELECT * FROM clientes`;
    const [result] = await DbConnection.query(query);
    return result;
}


export const updateById = async (id: number, client: TClient) => {
    const query = `UPDATE clientes SET nome = ?, nome_fantasia = ?, cep = ?, logradouro = ?, 
                   bairro = ?, cidade = ?, uf = ?, complemento = ?, email = ?, telefone = ?
                   WHERE id = ?` ;
    const [result] = await DbConnection.query(query, [client.nome, client.nome_fantasia,
                                              client.cep, client.logradouro, client.bairro,
                                              client.cidade, client.uf, client.complemento,
                                              client.email, client.telefone, id]);
    return result;
}

export const deleteById = async(id: number) => {
    const query = `DELETE FROM clientes WHERE id = ?`
    const result =  await DbConnection.execute(query, [id]);
    return result;
}