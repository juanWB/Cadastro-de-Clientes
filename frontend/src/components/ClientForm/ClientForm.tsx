import { useState } from "react";
import type { TClient } from "../../types/ClientType";
import {formatCnpj, formatCep, formatTelefone} from "../../service/FormatFields";

interface IClientFormProps{
    client?: TClient;
    onClose?: () => void;
};


export const ClientForm = ({client, onClose}: IClientFormProps) => {
    const [formData, setFormData] = useState<TClient>({
        id: 0,
        cnpj: '',
        nome: '',
        nome_fantasia: '',
        cep: '',
        logradouro: '',
        bairro: '',
        cidade: '',
        uf: '',
        complemento: '',
        email: '',
        telefone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        
        let formattedValue = value;
        if(name === 'cnpj'){
            formattedValue = formatCnpj(value);
        } else if(name === 'cep'){
            formattedValue = formatCep(value);
        } else if(name === 'telefone'){
            formattedValue = formatTelefone(value);
        }

        setFormData((prevFormData) => ({...prevFormData, [name]: formattedValue }));
    };


    return(
        <div>
            <header>
                <h1>Cadastro de clientes</h1>
                <button type="button">X</button>
            </header>
            <form>
                <label>
                    <span>CNPJ: </span>
                    <input value={formData?.cnpj} name="cnpj" placeholder="xx.xxx.xxx/xxxx-xx" onChange={handleChange}/>

                </label>
                <label>
                    <span>Nome: </span>
                    <input value={formData?.nome} name="nome" placeholder="Nome do cliente" onChange={handleChange}/>
                </label>
                <label>
                    <span>Nome fantasia: </span>
                    <input value={formData.nome_fantasia} name="nome_fantasia" placeholder="Nome fantasia" onChange={handleChange}/>
                </label>
                <label>
                    <span>Cep: </span>
                    <input value={formData.cep} name="cep" placeholder="xxxxx-xxx" onChange={handleChange}/>
                </label>
                <label>
                    <span>Logradouro: </span>
                    <input value={formData.logradouro} name="logradouro" placeholder="Logradouro" onChange={handleChange} />
                </label>
                <label>
                    <span>Bairro: </span>
                    <input value={formData.bairro} name="bairro" placeholder="Bairro" onChange={handleChange}/>
                </label>
                <label>
                    <span>Cidade: </span>
                    <input value={formData.cidade} name="cidade" placeholder="Cidade" onChange={handleChange}/>
                </label>
                <label>
                    <span>UF: </span>
                    <input value={formData.uf} name="uf" placeholder="UF" onChange={handleChange}/>
                </label>
                <label>
                    <span>Complemento: </span>
                    <input value={formData.complemento} name="complemento" placeholder="Complemento" onChange={handleChange}/>
                </label>
                <label>
                    <span>Email: </span>
                    <input value={formData.email} name="email" placeholder="seuemail@hotmail.com" onChange={handleChange}/>
                </label>
                <label>
                    <span>Telefone: </span>
                    <input value={formData.telefone} name="telefone" placeholder="(xx) xxxx-xxxx" onChange={handleChange}/>
                </label>
                <button type="button">Salvar</button>
            </form>
        </div>
    )
}