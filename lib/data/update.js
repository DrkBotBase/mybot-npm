const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function update(Language, prefix) {
  var sdn = 'RUN git clone https://github.com/DrkBotBase/MyBot_V1 /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Dispositivo no permitido, usar solo el BOT original!!");
    }
  })
  var data = ''
  if (Language == 'ES') {
      data = `Para actualizar DrkBot use *${prefix}update now*\n\n`
  } else {
      data = `To Update DrkBot use *${prefix}update now*\n\n`
  }
  return data;
}

module.exports = update