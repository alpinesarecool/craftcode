export function max(input: number[]) {
  if (input.length===0) return undefined
  
  let max_number = input[0] 
  for (let i =1; i<input.length; i++) {
    if(input[i]>max_number){
      max_number = input[i]
    }
  }
  return max_number
}
