function validatePassword(pw) {

    return /[a-z]/       .test(pw) &&
           /[0-9]/       .test(pw) &&
           /[^A-Za-z0-9]/.test(pw) &&
           pw.length > 8 && pw.length < 20;

}

export default validatePassword;

