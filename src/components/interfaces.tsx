
export interface UserData {
    user_FotoRec: any;
    user_RGTras: any;
    user_RGFrente: any;
    user_status: string;
    user_verifycel: string;
    user_verifyemail: string;
    user_CPF: string;
    user_RG: string;
    user_nome: string;
    user_email?: string;
    user_senha?: string;
    user_nascimento: string;
    user_endCEP?: string;
    user_endUF?: string;
    user_endbairro?: string;
    user_endrua?: string;
    user_endnum?: string;
    user_endcomplemento?: string;
    user_endcidade?: string;
    user_tipo?: string;
    list_CPF_list_id?: string; // O '?' indica que a propriedade é opcional
    user_cel: string;
    user_idcli?: string;
}

export interface CardData {
    card_id: number;
    card_validade: string;
    card_saldo: string;
    card_tipo: string;
    card_status: string;
    card_UltimoUso: null | string;
    card_UltimoOnibus: null | string;
    request_card_req_id: number;
}

export interface DocumentData {
    title: string;
    status: string;
    hint: string;
    icon: React.ReactNode; // O tipo específico do ícone pode variar dependendo da biblioteca de ícones que você está usando
}

