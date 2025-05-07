import { useEffect, useState } from "react"
import type { TClient } from "../types/ClientType"
import { api } from "../service/api/AxiosConfig";
import { formatCnpj } from "../service/FormatFields";
import { ClientForm } from "../components/ClientForm/ClientForm";
import { ClientDetails } from "../components/ClientDetails/ClientDetails";
import { 
    Box,
    Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
  } from '@mui/material';
  import AddIcon from '@mui/icons-material/Add';
  import VisibilityIcon from '@mui/icons-material/Visibility';
  import DeleteIcon from '@mui/icons-material/Delete';


export const ClientList = () => {
    const [clients, setClients] = useState<TClient[] | null >(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState<TClient | null>(null);
    const [clientToEdit, setClientToEdit] = useState<TClient | null>(null);

    const fetchClients = async() => {
        try{
            const response =  await api.get('/');

            setClients(response.data.clients);

        }catch(error){
            console.error(error);
        }
    }

    const handleUpdate = (client: TClient) => {
        setIsFormOpen(true);
        setClientToEdit(client);
    }

    const handleView = (client: TClient) => {
        setIsDetailsOpen(true);
        setSelectedClient(client);
    }

    const handleDelete = async (id: number) => {
        try{
            await api.delete(`/${id}`);

            fetchClients();
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        if(!isFormOpen){
            fetchClients();
        }
    },[isFormOpen])

    const handleNewClient = () => {
        setIsFormOpen(true);
        setClientToEdit(null);
    };

    return (
        <Container maxWidth="lg" sx={{
            backgroundColor: 'background.default',
            minHeight: '100vh',
            py: 4,
            fontFamily: '"Poppins", sans-serif',
            borderRadius: 4,
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',

        }}>
            <Paper elevation={8} sx={{ 
                p: 4,
                backgroundColor: 'background.paper',
                borderRadius: 4,
                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
                fontFamily: 'inherit'
            }}>
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 4
                }}>
                    <Typography variant="h4" component="h1" sx={{ 
                        color: 'primary.main',
                        fontWeight: 600,
                        fontFamily: '"Poppins", sans-serif'
                    }}>
                        Lista de Clientes
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={handleNewClient}
                        startIcon={<AddIcon />}
                        color="primary"
                        sx={{
                            borderRadius: 2,
                            fontFamily: '"Poppins", sans-serif',
                            fontWeight: 500,
                            textTransform: 'none',
                            px: 3,
                            py: 1
                        }}
                    >
                        Novo Cliente
                    </Button>
                </Box>

                <TableContainer 
                    component={Paper}
                    sx={{
                        borderRadius: 3,
                        boxShadow: 'none',
                        border: '1px solid rgba(0, 0, 0, 0.12)'
                    }}
                >
                    <Table>
                        <TableHead sx={{ backgroundColor: 'primary.main' }}>
                            <TableRow>
                                {['CNPJ', 'Nome', 'Nome Fantasia', 'Email', 'Ações'].map((header) => (
                                    <TableCell 
                                        key={header}
                                        sx={{ 
                                            color: 'primary.contrastText', 
                                            fontWeight: 'bold',
                                            fontFamily: '"Poppins", sans-serif'
                                        }}
                                    >
                                        {header}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(clients) && clients.length > 0 ? (
                                clients.map((client) => (
                                    <TableRow 
                                        key={client.id} 
                                        hover
                                        sx={{
                                            '&:last-child td': { borderBottom: 0 }
                                        }}
                                    >
                                        <TableCell>{formatCnpj(client.cnpj)}</TableCell>
                                        <TableCell>{client.nome}</TableCell>
                                        <TableCell>{client.nome_fantasia}</TableCell>
                                        <TableCell>{client.email}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                startIcon={<VisibilityIcon />}
                                                onClick={() => handleView(client)}
                                                sx={{ 
                                                    mr: 1,
                                                    borderRadius: 2,
                                                    fontFamily: '"Poppins", sans-serif',
                                                    fontWeight: 500,
                                                    textTransform: 'none'
                                                }}
                                            >
                                                Visualizar
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                startIcon={<DeleteIcon />}
                                                onClick={() => handleDelete(client.id!)}
                                                sx={{
                                                    borderRadius: 2,
                                                    fontFamily: '"Poppins", sans-serif',
                                                    fontWeight: 500,
                                                    textTransform: 'none'
                                                }}
                                            >
                                                Excluir
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                                        <Typography variant="body1" sx={{ fontFamily: '"Poppins", sans-serif' }}>
                                            Não há clientes cadastrados
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <div>
                {isFormOpen && <ClientForm client={clientToEdit!} onClose={() => setIsFormOpen(false)}/>}
                {isDetailsOpen && <ClientDetails client={selectedClient!} onEdit={() => handleUpdate(selectedClient!)} onClose={() => setIsDetailsOpen(false)}/>}
            </div>
        </Container>
    )
}