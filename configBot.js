// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
    .create(
        'Meu BotZap', //Nome da sessão
        (base64Qr, asciiQR) => {
            console.log(asciiQR); // Optional to log the QR in the terminal
            console.log("\n", typeof(asciiQR), "\n")
            var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
                response = {};

            if (matches.length !== 3) {
                return new Error('Invalid input string');
            }
            response.type = matches[1];
            response.data = new Buffer.from(matches[2], 'base64');

            var imageBuffer = response;
            require('fs').writeFile(
                'out.png', // img para usar fora do terminal
                imageBuffer['data'],
                'binary',
                function(err) {
                    if (err != null) {
                        console.log(err);
                    }
                }
            );
        },
        undefined, { logQR: false }
    )
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);

    });

// Salvar os dados que estão vindo no message.body pra dar o relatório final da consulta marcada.

let text = `🤖Olá sou um Robô🤖, sou programado para...\n
Digite SIM ou NÃO
`
let qualDia = `Qual dia da semana você deseja realizar a sua consulta?\n
1 = 📅 Segunda-Feira 
2 = 📅 Terça-Feira
3 = 📅 Quarta-Feira
4 = 📅 Quinra-Feira
5 = 📅 Sexta-Feira`

let info = `Etamos quase lá!\n\nAgora só falta você escolher a hora da sua consulta 😊`
    // let hora = `
    // A = 07:00 Horas 🕐 B = 07:30 Horas 🕐
    // C = 08:00 Horas 🕐 D = 08:30 Horas 🕐
    // E = 09:00 Horas 🕐 F = 09:30 Horas 🕐
    // G = 10:00 Horas 🕐 H = 10:30 Horas 🕐
    // I = 11:00 Horas 🕐 J = 13:00 Horas 🕐
    // K = 13:30 Horas 🕐 L = 14:00 Horas 🕐
    // M = 14:30 Horas 🕐 N = 15:00 Horas 🕐
    // O = 15:30 Horas 🕐 P = 16:00 Horas 🕐
    // Q = 16:30 Horas 🕐 R = 17:00 Horas 🕐
    // `

function start(client) {
    client.onMessage((message) => {

        switch (message.body.toUpperCase()) {

            case 'SIM':
                client.sendText(message.from, `${qualDia}`)
                break

            case 'NÃO':
                client.sendText(message.from, `Até mais!`)
                break

            case '1':
                client.sendText(message.from, `\n${info}\n${hora}`)
                break

            case '2':
                client.sendText(message.from, `\n${info} \n${hora}`)
                break

            case '3':
                client.sendText(message.from, `\n${info} \n${hora}`)
                break

            case '4':
                client.sendText(message.from, `\n${info} \n${hora}`)
                break

            case '5':
                client.sendText(message.from, `\n${info}\n${hora}`)
                break

                // case 'A':
                //     client.sendText(message.from, `Sua consulta está marcada para as 07:00 horas`)
                //     break

                // case 'B':
                //     client.sendText(message.from, `Sua consulta está marcada para as 07:30 horas`)
                //     break

                // case 'C':
                //     client.sendText(message.from, `Sua consulta está marcada para as 08:00 horas`)
                //     break

                // case 'D':
                //     client.sendText(message.from, `Sua consulta está marcada para as 08:30 horas`)
                //     break

                // case 'E':
                //     client.sendText(message.from, `Sua consulta está marcada para as 09:00 horas`)
                //     break

                // case 'F':
                //     client.sendText(message.from, `Sua consulta está marcada para as 09:30 horas`)
                //     break

                // case 'G':
                //     client.sendText(message.from, `Sua consulta está marcada para as 10:00 horas`)
                //     break

                // case 'H':
                //     client.sendText(message.from, `Sua consulta está marcada para as 10:30 horas`)
                //     break

                // case 'I':
                //     client.sendText(message.from, `Sua consulta está marcada para as 11:00 horas`)
                //     break

                // case 'J':
                //     client.sendText(message.from, `Sua consulta está marcada para as 13:00 horas`)
                //     break
                // case 'K':
                //     client.sendText(message.from, `Sua consulta está marcada para as 13:30 horas`)
                //     break

                // case 'L':
                //     client.sendText(message.from, `Sua consulta está marcada para as 14:00 horas`)
                //     break

                // case 'M':
                //     client.sendText(message.from, `Sua consulta está marcada para as 14:30 horas`)
                //     break
                // case 'N':
                //     client.sendText(message.from, `Sua consulta está marcada para as 15:00 horas`)
                //     break

                // case 'O':
                //     client.sendText(message.from, `Sua consulta está marcada para as 15:30 horas`)
                //     break

                // case 'P':
                //     client.sendText(message.from, `Sua consulta está marcada para as 16:00 horas`)
                //     break

                // case 'Q':
                //     client.sendText(message.from, `Sua consulta está marcada para as 16:30 horas`)
                //     break

                // case 'R':
                //     client.sendText(message.from, `Sua consulta está marcada para as 17:00 horas`)
                //     break
            default: // Default será usado quando não entra em nem uma condição acima!!
                client.sendText(message.from, `${text}`)

                .then((result) => {
                        console.log('Result: ', result); //return object success	
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error	
                    });

                break
        }

    });
}