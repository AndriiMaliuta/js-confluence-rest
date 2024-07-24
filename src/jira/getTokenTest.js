import { Buffer } from 'node:buffer';

/*
> console.log(Buffer.from("Hello World").toString('base64'));
SGVsbG8gV29ybGQ=
> console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'))
Hello World
 */


const TOKEN2 = Buffer.from("user:pass").toString('base64')
console.log(TOKEN2)