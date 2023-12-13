const maskString = (emailList) => {
  let oututVar = "";
  if (!emailList) {
    throw new TypeError("Unexpected input type.");
  }

  if (!Array.isArray(emailList)) {
    oututVar =
      emailList.toString().search(/@/) === -1
        ? emailList
        : getMaskedEmail(emailList);
  } else {
    oututVar = emailList.map((emailId) => {
      return emailId.search(/@/) === -1 ? emailId : getMaskedEmail(emailId);
    });
  }

  return oututVar;
};

const getMaskedEmail = (inputString) => {
  let maskWith = "*";
  inputString = inputString.trim();
  if (inputString.length > 0) {
    // Find the index of @
    const atIndex = inputString.search(/@/);
    // Get the string length till @
    const emailName = inputString.substring(0, atIndex);
    const emailDomain = inputString.substring(atIndex, inputString.length);
    // Get the index for starting masking - masking 80% of email name part
    let maskStart =
      emailName.length > 5 ? Math.ceil((emailName.length * 20) / 100) + 1 : 0;
    // Mask the string
    let maskedEMail = `${emailName.substring(0, maskStart)}${maskWith.repeat(
      emailName.substring(maskStart, emailName.length).length
    )}${emailDomain}`;
    return maskedEMail;
  } else {
    oututVar = inputString;
  }
};

module.exports = maskString;
