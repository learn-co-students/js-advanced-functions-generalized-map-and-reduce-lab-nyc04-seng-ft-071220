// Add your functions here

const map = (sourceArray, callBack) => {
    let newArray = []

    for (let i = 0; i < sourceArray.length; i++) {
        let theElement = sourceArray[i]
        newArray.push(callBack(theElement))
    }

    return newArray
}

function reduce(src, cb, starting) {
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1

    for (; i < src.length; i++) {
        r = cb(src[i], r)
    }

    return r;
}