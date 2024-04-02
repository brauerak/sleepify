function validateEmail(text) {
    var re = /\S+@\S+\.\S+/;
    return re.test(text);
  }


  export default validateEmail;