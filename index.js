//BITWISE OPERATORS
// HUMANCODE ->  MACHINE CODE


// w -> 00000100 -> WRITE
// R -> 00000010 -> READ
// E -> 00000001 -> EXECUTE



const readpermission = 4;
const writepermission = 2;
const executepermission = 1;

let mypermission = 0;

mypermission = mypermission | readpermission |writepermission;

let message = (mypermission & readpermission) ? 'yes': 'no';

console.log(message);