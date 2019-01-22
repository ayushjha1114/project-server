export default function validateEmail(mail: string): boolean {
    let regex = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(successive)\.tech$/;
    if (regex.test(mail)) {
        return true;
    } else {
        return false;
    }
}
