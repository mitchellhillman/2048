export const shiftStackLeft = (stack: number[]) => {
    const combined = stack
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
    
    const zeros = Array(4 - combined.length).fill(0)
    return combined.concat(zeros)
}

export const shiftStackRight = (stack: number[]) => {
    const combined = stack
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
    
    const zeros = Array(4 - combined.length).fill(0)
    return zeros.concat(combined)
}

const modifyGroup = (array:Array<number[]>, modifier: Function) => {
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

export const genNewTiles =  (tiles: number[]) => {

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

export const shiftTilesUp = (tiles: number[]) => {
    const columns = splitIntoColumns(tiles, 4)
    const shifted = modifyGroup(columns, shiftStackLeft)
    const flattened = flattenColumns(shifted)
    const newTilesAdded = genNewTiles(flattened)
    return newTilesAdded
}

export const shiftTilesDown = (tiles: number[]) => {
    const columns = splitIntoColumns(tiles, 4)
    const shifted = modifyGroup(columns, shiftStackRight)
    const flattened = flattenColumns(shifted)
    const newTilesAdded = genNewTiles(flattened)
    return newTilesAdded
}

export const shiftTilesLeft = (tiles: number[]) => {
    const columns = splitIntoRows(tiles, 4)
    const shifted = modifyGroup(columns, shiftStackLeft)
    const flattened = shifted.flat()
    const newTilesAdded = genNewTiles(flattened)
    return newTilesAdded
}

export const shiftTilesRight = (tiles: number[]) => {
    const columns = splitIntoRows(tiles, 4)
    const shifted = modifyGroup(columns, shiftStackRight)
    const flattened = shifted.flat()
    const newTilesAdded = genNewTiles(flattened)
    return newTilesAdded
}