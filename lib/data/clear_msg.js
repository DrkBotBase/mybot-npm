const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");

async function clearm(Language, NumberCL) {
  var sdn = 'RUN git clone https://github.com/DrkBotBase/MyBot_V1 /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Dispositivo no permitido, usar solo el BOT original!!");
    }
  })
  var data = {
    Action: '',
    Finish: '',
    Number: '',
    Owner: 'ian'
  }
  if (Language == 'ES') {
    data.Action = '```Eliminando todos los mensajes de este chat...```'
    data.Finish = '*✅️ Mensajes de esté chat eliminados con éxito!*'
    data.Number = NumberCL
  } else {
    data.Action = '```Clearing all the messages from this chat...```'
    data.Finish = '*✅️ Successfully cleared all the messages from this chat!*'
    data.Number = NumberCL
  }
  return data;
}

module.exports = clearm