export function removeChar(str: string): string {
  return str.slice(1, -1);
}

// export function removeChar(str: string): string {
//   if (str.length >= 2) {
//     return [...str].slice(1, -1).join("");
//   }
//   return "";
// }
