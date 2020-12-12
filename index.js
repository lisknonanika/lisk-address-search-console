const { Mnemonic } = require('@liskhq/lisk-passphrase');
const cryptography = require('@liskhq/lisk-cryptography');

const outputHelp = () => {
  console.log("[command]");
  console.log("lisk-address-search-console help");
  console.log("");
  console.log("");
  console.log("lisk-address-search-console [type] [word] [continue]");
  console.log("  type: required");
  console.log("    0 - forward match");
  console.log("    1 - backward match");
  console.log("    2 - partial match");
  console.log("");
  console.log("  word: required");
  console.log("    Enter your favorite word");
  console.log("    *half-width alphanumeric");
  console.log("");
  console.log("  continue: optional");
  console.log("    0 - Stop after found (default)");
  console.log("    1 - Continue even if found");
  console.log("");
  console.log("  e.g. lisk-address-search-console 0 cat 1");
  console.log("");
}

const search = (_type, _word, _isContinue) => {
  if (["0", "1", "2"].indexOf(_type) < 0) {
    console.error("parameter error: [type].");
    console.error("*should be 0 or 1 or 2.");
    return;
  }

  if (/i|l|0|1/.test(_word.toLowerCase())) {
    console.error("parameter error: [_word].");
    console.error("*must not be includ \"i\", \"l\", \"0\", \"1\".");
    return;
  }

  if (!/^[A-Za-z0-9]*$/.test(_word)) {
    console.error("parameter error: [_word].");
    console.error("*should be half-width alphanumeric.");
    return;
  }

  let _cnt = 0;
  const _st = new Date();
  while(true) {
    const passphrase = Mnemonic.generateMnemonic();
    const { address, publicKey } = cryptography.getAddressAndPublicKeyFromPassphrase(passphrase);
    const addressBip32 = cryptography.getBase32AddressFromAddress(address);
    if ((_type==="0" && addressBip32.startsWith(`lsk${_word.toLowerCase()}`)) ||
        (_type==="1" && addressBip32.endsWith(_word.toLowerCase())) ||
        (_type==="2" && addressBip32.indexOf(_word.toLowerCase()) > 0)) {
      
      console.info({
        account: {
          address: addressBip32,
          baddress: cryptography.bufferToHex(address),
          publickey: cryptography.bufferToHex(publicKey),
          passphrase: passphrase,
        }
      });
      if (!_isContinue) break;
    }
    _cnt += 1;
    if (_cnt%10000===0) {
      let _ed = new Date();
      console.log(`-- Search: ${_cnt} (${(_ed-_st)/1000} sec.)`);
    }
  }
}

(() => {
  const args = process.argv;
  if (args.length === 2 || args[2] === "help") {
    outputHelp();
  }
  else if (args.length === 4) {
    search(args[2], args[3], 0);
  }
  else if (args.length > 4) {
    search(args[2], args[3], args[4]);
  }
  return;
})();
