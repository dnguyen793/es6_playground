export function add ( x, y ) {
    return x + y;
}

// export function sub ( x, y ) {
//     return x - y;
// }
//
// export function div ( x, y ) {
//     return x / y;
// }
//
// export function multi ( x, y ) {
//     return x * y;
// }

export const sub = (x,y) => {
    return x-y;
}

export const multi = (x,y) => x*y;

export const div = (x,y) => y? x/y:'Can\'t divide by 0';

export default () => {
    console.log("This is the default export for math.js");
}
