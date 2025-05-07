import { useEffect, useState } from "react";
import { 
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  Typography,
  Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import type { TClient } from "../../types/ClientType";
import { formatCnpj, formatCep, formatTelefone } from "../../service/FormatFields";
import { api } from "../../service/api/AxiosConfig";

interface IClientFormProps {
    client?: TClient;
    onClose?: () => void;
};

export const ClientForm = ({ client, onClose }: IClientFormProps) => {
    const [formData, setFormData] = useState<TClient>({
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

    useEffect(() => {
        if (client) {
            setFormData(client);
        }
    }, [client]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        let formattedValue = value;
        if (name === 'cnpj') {
            formattedValue = formatCnpj(value);
        } else if (name === 'cep') {
            formattedValue = formatCep(value);
        } else if (name === 'telefone') {
            formattedValue = formatTelefone(value);
        }

        setFormData(prev => ({ ...prev, [name]: formattedValue }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (formData.id && formData.id > 0) {
                await api.put(`/${formData.id}`, formData);
            } else {
                await api.post('/', formData);
            }

            if (onClose) onClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Dialog
            open={true}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
                    fontFamily: '"Poppins", sans-serif'
                }
            }}
        >
            <DialogTitle sx={{ 
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2,
                px: 3
            }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {formData.id ? 'Editar Cliente' : 'Cadastrar Cliente'}
                </Typography>
                <IconButton 
                    onClick={onClose} 
                    sx={{ color: 'primary.contrastText' }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: 4 }}>
                <Paper 
                    component="form"
                    onSubmit={handleSubmit}
                    elevation={0}
                    sx={{ 
                        p: 3,
                        borderRadius: 3,
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        marginTop: 2
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                        <TextField
                            fullWidth
                            label="CNPJ"
                            name="cnpj"
                            value={formData.cnpj}
                            onChange={handleChange}
                            placeholder="XX.XXX.XXX/XXXX-XX"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Nome"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Nome Fantasia"
                            name="nome_fantasia"
                            value={formData.nome_fantasia}
                            onChange={handleChange}
                            placeholder="Nome fantasia"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="CEP"
                            name="cep"
                            value={formData.cep}
                            onChange={handleChange}
                            placeholder="XXXXX-XXX"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Logradouro"
                            name="logradouro"
                            value={formData.logradouro}
                            onChange={handleChange}
                            placeholder="Rua/Avenida"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Bairro"
                            name="bairro"
                            value={formData.bairro}
                            onChange={handleChange}
                            placeholder="Bairro"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Cidade"
                            name="cidade"
                            value={formData.cidade}
                            onChange={handleChange}
                            placeholder="Cidade"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="UF"
                            name="uf"
                            value={formData.uf}
                            onChange={handleChange}
                            placeholder="Estado"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Complemento"
                            name="complemento"
                            value={formData.complemento}
                            onChange={handleChange}
                            placeholder="Complemento"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@exemplo.com"
                            variant="outlined"
                        />

                        <TextField
                            fullWidth
                            label="Telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            placeholder="(XX) XXXXX-XXXX"
                            variant="outlined"
                        />
                    </Box>

                    <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mt: 4
                    }}>
                        <Button
                            variant="contained"
                            type="submit"
                            startIcon={<SaveIcon />}
                            color="primary"
                            sx={{
                                borderRadius: 2,
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: 500,
                                textTransform: 'none',
                                px: 4,
                                py: 1
                            }}
                        >
                            Salvar
                        </Button>
                    </Box>
                </Paper>
            </DialogContent>
        </Dialog>
    );
};