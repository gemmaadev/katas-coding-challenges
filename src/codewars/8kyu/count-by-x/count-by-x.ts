export function countBy(x: number, n: number): number[] {
  
  let array: number[] = [];
  
  for (let i = 1; i <= n; i++){
   array.push(x * i);
  }
  return array;
}