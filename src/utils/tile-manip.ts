export const shiftStackLeft = (stack: number[]) => {
    const values = stack.filter(value => value)

    const added = values.reduce<number[]>((acc, curr, index) => {
        const prev = values[index - 1]
        const next = values[index + 1]        
        if(curr === next) {
            acc.push(curr + next)            
        } else if(curr !==prev) {
            acc.push(curr)
        }
        return acc
    }, [])
    
    const zeros = Array(4 - added.length).fill(0)
    return added.concat(zeros)
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

export const shiftTilesLeft = (tiles: number[]) => {
    const columns = splitIntoRows(tiles, 4)
    const shifted = modifyGroup(columns, shiftStackLeft)
    const flattened = shifted.flat()
    const newTilesAdded = genNewTiles(flattened)
    return newTilesAdded
}