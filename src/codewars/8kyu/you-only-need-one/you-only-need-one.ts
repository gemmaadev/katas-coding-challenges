export const check = (a: (number | string)[], x: number | string): boolean => {
  return a.includes(x);
};

// export const check = (a: (number | string)[], x: number | string): boolean => {
//   let found: boolean = false;

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === x) {
//       found = true;
//     }

//     if (found) {
//       return true;
//     }
//   }
//   return false;
// };
