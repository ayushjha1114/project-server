export default function validateEmail(mail) {
    let re = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(successive)\.tech$/;
    if (re.test(mail)) {
        return true;
    } else {
        return false;
    }
}
