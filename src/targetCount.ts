export function targetCount(target: any, elements: any[]){
  if (elements.length===0) return undefined
  let count: number = 0 
  for( const ele of elements){
    if (ele === target){
      count = count +1
    }
    if (Array.isArray(target)){
      if(Array.isArray(ele)){
        let arr_count: number = 0
        if(target.length === ele.length){
          for (let i=0; i<target.length; i++){
            if(target[i] === ele[i]){
              arr_count= arr_count+1
            }
          }
          if (arr_count == target.length){
            count=count+1
          }
        }
      }
    }
  }
  return count
}
