import z from "zod";

export const ClientSchema = z.object({
    id: z.coerce.number().optional(),
    cnpj: z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, "CNPJ inválido").transform(val => val.replace(/\D/g, '')).refine(val => val.length === 14, "CNPJ deve ter 14 dígitos."),
    nome: z.string().min(3, "O campo Nome precisa ter no mínimo 3 caracteres."),
    nome_fantasia: z.string().min(3, "O campo Nome Fantasia precisa ter no mínimo 3 caracteres."),
    cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido").transform(val => val.replace(/\D/g, '')).refine(val => val.length === 8, "CEP deve ter 8 dígitos."),
    logradouro: z.string().min(3, "O campo Logradouro precisa ter no mínimo 3 caracteres."),
    bairro: z.string().min(3, "O campo Bairro precisa ter no mínimo 3 caracteres."),
    cidade: z.string().min(3, "O campo Cidade precisa ter no mínimo 3 caracteres."),
    uf: z.string().length(2, "O campo UF precisa 2 caracteres."),
    complemento: z.string().max(100, "O campo Complemento precisa ter no máximo 100 caracteres.").optional(),
    email: z.string().email("O campo Email precisa de um email válido."),
    telefone: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Telefone inválido").transform(val => val.replace(/\D/g, '')).refine(val => val.length >= 10 && val.length <= 11, "Telefone deve ter 10 ou 11 dígitos"),
})

export type TClient = z.infer<typeof ClientSchema>;