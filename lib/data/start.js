const exec = require('child_process').exec;
const os = require("os");

async function start() {
  var sdn = 'RUN git clone https://github.com/DrkBotBase/MyBot_V1 /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Dispositivo no permitido, usar solo el BOT original!!");
    }
  })
}

module.exports = start