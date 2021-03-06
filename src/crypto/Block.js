import SHA256 from "crypto-js/sha256";
import chalk from "chalk";
export default class Block {
  constructor(index, timestamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash= this.calculateHash();
    this.nonce = 0;
  }

  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce ).toString();
  }

  mineBlock(difficulty){
    while (this.hash.substring(0 , difficulty) !== Array(difficulty+1).join("0")){
      console.log(chalk.blue("mining at block "+ this.index + " counting: " + this.nonce));
      this.nonce++;
      this.hash= this.calculateHash();
    }
  }
}

