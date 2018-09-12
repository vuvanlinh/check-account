function isAccount(str) {
    regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) {
        return true;
    }else return false;
}
let accounts = [
    '123abc_',
    '_abc123',
    '123456',
    'abcdefg',
];
let notAccounts=[
    '.@',
'12345',
'1234_',
'abcde',
];
for (account of accounts) {
    document.write(account + ' : ' + isAccount(account)+ '<br>');
}
for (notAccount of notAccounts) {
    document.write(notAccount + ' : ' + isAccount(notAccount)+ '<br>')
}