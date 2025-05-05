import z from "zod";

export const ClienSchema = z.object({
    id: z.coerce.number().optional(),
    cnpj: z.string().length(14, "O campo CNPJ precisa ter 14 caracteres."),
    nome: z.string().min(3, "O campo Nome precisa ter no mínimo 3 caracteres."),
    nome_fantasia: z.string().min(3, "O campo Nome Fantasia precisa ter no mínimo 3 caracteres."),
    cep: z.string().length(9, "O campo CEP precisa ter 9 caracteres."),
    logradouro: z.string().min(3, "O campo Logradouro precisa ter no mínimo 3 caracteres."),
    bairro: z.string().min(3, "O campo Bairro precisa ter no mínimo 3 caracteres."),
    cidade: z.string().min(3, "O campo Cidade precisa ter no mínimo 3 caracteres."),
    uf: z.string().length(2, "O campo UF precisa 2 caracteres."),
    complemento: z.string().max(100, "O campo Complemento precisa ter no máximo 100 caracteres.").optional(),
    email: z.string().email("O campo Email precisa de um email válido."),
    telefone: z.string().max(15, "O campo Telefone precisa ter no máximo 15 caracteres."),
})

export type TClient = z.infer<typeof ClienSchema>;