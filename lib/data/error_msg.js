const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");

async function err_msg(Language) {
  var sdn = 'RUN git clone https://github.com/DrkBotBase/MyBot_V1 /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Dispositivo no permitido, usar solo el BOT original!!");
    }
  })
  var data = ''
  if (Language == 'ES') { 
    data = '*-- REPORTE DE ERROR [DrkBot] --* \n*DrkBot ha tenido un error!*\n_Este registro de errores puede contener su número o el número de una contraparte. ¡Por favor, tenga cuidado con eso!_\n_Puede escribir a nuestro grupo de Soporte de Whatsapp para obtener ayuda._\n_Este mensaje debería haber ido a su número (mensajes guardados)._\n_Cualquier error, reportarlo al grupo de soporte: https://chat.whatsapp.com/IeRNuoNY1IQJS8JE02duW8\n\n*Error Ocurrido:* ```' + '{real_error}' + '```'
  } else {
    data = '*-- ERROR REPORT [DrkBot] --* \n*DrkBot an error has occurred!*\n_This error log may include your number or the number of an opponent. Please be careful with it!_\n_You can write to our Telegram group for help._\n_Aslo you can join our support group:_ https://chat.whatsapp.com/IeRNuoNY1IQJS8JE02duW8\n_This message should have gone to your number (saved messages)._\n\n*Error:* ```' + '{real_error}' + '```'
  }
  return data;
}

module.exports = err_msg