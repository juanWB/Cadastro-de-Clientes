import { useEffect, useState } from "react"
import type { TClient } from "../types/ClientType"
import { api } from "../api/AxiosConfig";


export const ClientList = () => {
    const [clients, setClients] = useState<TClient[] | null >(null);

    const fetchClients = async() => {
        const response =  await api.get('/');

        setClients(response.data.clients);
    }

    useEffect(() => {
        fetchClients();
    },)


    return (
        <div>
            <header>
                <h1>Lista de clientes</h1>
                <button type="button">Novo cliente</button>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>CNPJ</th>
                        <th>Nome</th>
                        <th>Nome fantasia</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {(Array.isArray(clients) && clients.length > 0) ? (
                      clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.cnpj}</td>
                            <td>{client.nome}</td>
                            <td>{client.nome_fantasia}</td>
                            <td>{client.email}</td>
                        </tr>
                    )) 
                  ) : (
                        <p>Não há clientes cadastrados</p>
                    )}
                </tbody>
            </table>
        </div>
    )
}