const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
const fs = require('fs/promises')
// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const dataFile = './external.js'
const utf8 = 'utf-8'

const promiseOutput = async (args) => {

  try {
    let result= [];
    const ixxResult = await promiseTheaterIXX(fs.readFile(dataFile, utf8))
    const vgcResult = await promiseTheaterVGC(fs.readFile(dataFile, utf8))
    result.push(ixxResult)
    result.push(vgcResult)

    if (args === 'marah') {
      const ixxCountResult = result[0].filter((a) => a.hasil == 'marah')
      const vgcCountResult = result[1].filter((a) => a.hasil == 'marah')
      return ixxCountResult.length + vgcCountResult.length
    }
    else {
      const ixxCountResult = result[0].filter((a) => a.hasil == 'tidak marah')
      const vgcCountResult = result[1].filter((a) => a.hasil == 'tidak marah')
      return ixxCountResult.length + vgcCountResult.length
    }
  }
  catch(err){
    return err
  }
}

module.exports = {
  promiseOutput,
};
