// Sistema de Verificador de Turno de Reposição
// Dados do Turno
const codigoDoTurno = "M";
const codigoDoTurnoFormatado = codigoDoTurno.toUpperCase();
let mensagemHorario = "";

// Regra de Verificação de Turno
switch (codigoDoTurnoFormatado) {
    case "M":
        mensagemHorario = "Bom dia! Turno da Manhã (8:00 - 14:00).";
        break;

    case "V":
        mensagemHorario = "Boa tarde! Turno Vespertino (14:00 - 20:00).";
        break;

    case "N":
        mensagemHorario = "Boa noite! Turno Noturno (20:00 - 02:00).";
        break;

    default:
        mensagemHorario = "Código de Turno inválido!";
        break;

}

// Exibição da Mensagem de Horário
console.log(mensagemHorario);