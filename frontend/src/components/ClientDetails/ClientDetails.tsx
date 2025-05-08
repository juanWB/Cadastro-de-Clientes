import { 
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Paper,
    Typography,
    Stack,
    Divider
  } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';
  import EditIcon from '@mui/icons-material/Edit';
  import type { TClient } from "../../types/ClientType";
  import { formatCep, formatCnpj, formatTelefone } from '../../service/FormatFields';  

  interface IClientDetailsProps {
      client: TClient,
      onClose?: () => void,
      onEdit?: () => void
     
  }

 
  export const ClientDetails = ({ client, onClose, onEdit }: IClientDetailsProps) => {
    
      return (
          <Dialog
              open={true}
              onClose={onClose}
              maxWidth="md"
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
                      Detalhes do Cliente
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
                      elevation={0}
                      sx={{ 
                          p: 3,
                          borderRadius: 3,
                          border: '1px solid rgba(0, 0, 0, 0.12)',
                          marginTop: 2

                      }}
                  >
                      <Stack spacing={2} divider={<Divider flexItem />}>
                          <DetailItem label="CNPJ" value={formatCnpj(client.cnpj)} />
                          <DetailItem label="Nome" value={client.nome} />
                          <DetailItem label="Nome Fantasia" value={client.nome_fantasia} />
                          <DetailItem label="CEP" value={formatCep(client.cep)} />
                          <DetailItem label="Logradouro" value={client.logradouro} />
                          <DetailItem label="Bairro" value={client.bairro} />
                          <DetailItem label="Cidade" value={client.cidade} />
                          <DetailItem label="UF" value={client.uf} />
                          <DetailItem label="Complemento" value={client.complemento} />
                          <DetailItem label="Email" value={client.email} />
                          <DetailItem label="Telefone" value={formatTelefone(client.telefone)} />
                      </Stack>
  
                      <Box sx={{ 
                          display: 'flex',
                          justifyContent: 'flex-end',
                          mt: 4
                      }}>
                          <Button
                              variant="contained"
                              onClick={onEdit}
                              startIcon={<EditIcon />}
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
                              Editar Cliente
                          </Button>
                      </Box>
                  </Paper>
              </DialogContent>
          </Dialog>
      );
  };
  
  const DetailItem = ({ label, value }: { label: string; value: string }) => (
      <Box sx={{ display: 'flex' }}>
          <Typography 
              variant="subtitle1" 
              sx={{ 
                  fontWeight: 600,
                  color: 'primary.main',
                  minWidth: 150,
                  fontFamily: '"Poppins", sans-serif'
              }}
          >
              {label}:
          </Typography>
          <Typography 
              variant="body1"
              sx={{ 
                  fontFamily: '"Poppins", sans-serif',
                  color: 'text.primary'
              }}
          >
              {value || 'Não informado'}
          </Typography>
      </Box>
  );