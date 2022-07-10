//TODO: get total count
  export function getTotalCount (arr){
    let total = 0;
    arr.forEach( el => {
        const count = el.count;
        total += count
    });
    return total;
}