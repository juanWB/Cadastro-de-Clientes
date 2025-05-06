import { useState } from "react"
import type { TClient } from "../types/ClientType"


export const ClientList = () => {
    const [clients, setClients] = useState<TClient[] | null >(null);
    

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
                    <tr>
                        <td>Jorge</td>
                        <td>Almeida</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}