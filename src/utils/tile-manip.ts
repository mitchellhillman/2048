const combineStack = (stack: number[]) => {
    return stack
        .filter(val => val)
        .reduce<number[]>((acc, curr) => {        
            const pIndex = acc.length - 1
            const pVal = acc[pIndex]
            if(curr === pVal) {
                acc.splice(pIndex, 1, curr + pVal)
            } else {
                acc.push(curr)
            }
            return acc
        }, [])
}

export const tileDiff = (arr1: number[], arr2: number[]) => {
    return arr1.map((val, index) => {
        return val !== arr2[index]
    })
}

export const slideStackLeft = (stack: number[]) => {
    const combined = combineStack(stack)
    const zeros = Array(4 - combined.length).fill(0)
    return combined.concat(zeros)
}

export const slideStackRight = (stack: number[]) => {
    const combined = combineStack(stack)
    const zeros = Array(4 - combined.length).fill(0)
    return zeros.concat(combined)
}

const modifyStacks = (array:Array<number[]>, modifier: Function) => {
    let stacked = []
    for (let step = 0; step < array.length; step++) {        
        const modified = modifier(array[step])
        stacked.push(modified)
    }
    return stacked 
}

const flattenColumns = (columns:Array<number[]>) => {
    const flattened = []
    for (let outstep = 0; outstep < columns.length; outstep++) {        
        for (let instep = 0; instep < columns.length; instep++) { 
            flattened.push(columns[instep][outstep])            
        }
    }
    return flattened
}

const splitIntoColumns = (tiles: number[], size:number) => {
    let columns = []

    for (let outstep = 0; outstep < size; outstep++) {        
        
        let column = []
        for (let instep = 0; instep < size; instep++) { 
            column.push(tiles[(4 * instep) + outstep ])
        }
        
        columns.push(column)
    }
    return columns
}

const splitIntoRows = (tiles: number[], size: number) => {
    let rows = []

    for (let outstep = 0; outstep < size; outstep++) {        
        let row = []
        for (let instep = 0; instep < size; instep++) { 
            row.push(tiles[instep +(4 * outstep)])
        }

        rows.push(row)
    }
    return rows
}

export const genNewTile =  (tiles: number[]) => {

    const selectRandomFromArray = (array: number[]) => {
        return array[Math.floor(Math.random() * array.length)]
    }

    const emptyTileIndexes:number[] = tiles.reduce<number[]>((acc, curr, index) => {
        if(curr === 0) {
            acc.push(index)
        }
        return acc
    }, [])
    const tileToGen = selectRandomFromArray(emptyTileIndexes)
    
    let newTiles = [];
    for (let step = 0; step < 16; step++) {        
        if(tiles[step] > 0 || step !== tileToGen) {
            newTiles.push(tiles[step])
        } 
        else {
            const starterTiles = [2,4]
            newTiles.push(selectRandomFromArray([2,4]))
        }
    }
    return newTiles
}

export const slideTilesUp = (tiles: number[]) => {
    const columns = splitIntoColumns(tiles, 4)
    const shifted = modifyStacks(columns, slideStackLeft)
    const flattened = flattenColumns(shifted)
    const newTilesAdded = genNewTile(flattened)
    return newTilesAdded
}

export const slideTilesDown = (tiles: number[]) => {
    const columns = splitIntoColumns(tiles, 4)
    const shifted = modifyStacks(columns, slideStackRight)
    const flattened = flattenColumns(shifted)
    const newTilesAdded = genNewTile(flattened)
    return newTilesAdded
}

export const slideTilesLeft = (tiles: number[]) => {
    const columns = splitIntoRows(tiles, 4)
    const shifted = modifyStacks(columns, slideStackLeft)
    const flattened = shifted.flat()
    const newTilesAdded = genNewTile(flattened)
    return newTilesAdded
}

export const slideTilesRight = (tiles: number[]) => {
    const columns = splitIntoRows(tiles, 4)
    const shifted = modifyStacks(columns, slideStackRight)
    const flattened = shifted.flat()
    const newTilesAdded = genNewTile(flattened)
    return newTilesAdded
}