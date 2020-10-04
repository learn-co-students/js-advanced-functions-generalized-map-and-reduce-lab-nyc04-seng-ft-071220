// Add your functions here
function map(value, callback) {
    let r = []
    for(let i = 0; i < value.length; i++) {
        let element = value[i]
        r.push(callback(element))
    }
    return r
}

function reduce(src, callback, startingPoint){
  let r = (!!startingPoint) ? startingPoint : src[0]
  let i = (!!startingPoint) ? 0 : 1

  for (; i < src.length; i++) {
    r = callback(src[i], r)
  }
  return r
}
