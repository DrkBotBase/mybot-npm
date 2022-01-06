const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");

async function work_type(type, Language, prefix) {
  var sdn = 'RUN git clone https://github.com/DrkBotBase/MyBot_V1 /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Dispositivo no permitido, usar solo el BOT original!!");
    }
  })
  if (!type || !Language) { throw new Error ('Error Worktype!!') }
  var data = ''
  if (type == 'private') {
    if (Language == 'ES') {
      data = "🤖 *DrkBot funciona en modo privado*\n\n_No probar los comandos aca. Este es tu espacio de LOG._\n_Puedes probar los comandos en cualquier chat._\n\n" + `*DrkBot esta funcionando en modo private. Use el comando* _${prefix}setvar WORK_TYPE:public_ *para cambiarlo a modo publico.*\n\n*Gracias por usar DrkBot 💌*`
    } else {
      data = "*DrkBot Working as Private! 🤖*\n\n_Please do not try plugins here. This is your LOG number._\n_You can try commands to any chat :)_\n\n" + `*DrkBot working as private. To change it, use* _${prefix}setvar WORK_TYPE:public_\n\n*Thanks for using DrkBot 💌*`
    }
  } else if (type == 'public') {
    if (Language == 'ES') {
       data = "🤖 *DrkBot funciona en modo publico*\n\n_No probar los comandos aca. Este es tu espacio de LOG._\n_Puedes probar los comandos en cualquier chat._\n\n" + `*DrkBot esta funcionando en modo public. Use el comando* _${prefix}setvar WORK_TYPE:private_ *para cambiarlo a modo privado.*\n\n*Gracias por usar DrkBot 💌*`
    } else {
      data = "*DrkBot Working as Public! 🤖*\n\n_Please do not try plugins here. This is your LOG number._\n_You can try commands to any chat :)_\n\n" + `*DrkBot working as public. To change it, use* _${prefix}setvar WORK_TYPE:private_\n\n*Thanks for using DrkBot 💌*`
    }
  } else {
    if (Language == 'ES') {
      data = `No se encontró la clave *WORK_TYPE* que ingresó!\nEscriba ${prefix}setvar WORK_TYPE:private o ${prefix}setvar WORK_TYPE:public`
    } else {
      data = `The *WORK_TYPE* Key You Entered Was Not Found!\nPlease Type ${prefix}setvar WORK_TYPE:private Or ${prefix}setvar WORK_TYPE:public`
    }
  }
  return data;
}

module.exports = work_type