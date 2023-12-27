import {slideStackLeft, slideStackRight, tileDiff} from './tile-manip'

describe('slideStackLeft', () => {
    it('has tile on the left', () => {
        const result = slideStackLeft([4,0,2,0]);
        const expected = [4,2,0,0]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has tile on the left', () => {
        const result = slideStackLeft([4,0,0,2]);
        const expected = [4,2,0,0]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has no tiles', () => {
        const result = slideStackLeft([0,0,0,0]);
        const expected = [0,0,0,0]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has full row', () => {
        const result = slideStackLeft([4,2,4,2]);
        const expected = [4,2,4,2]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has gap in middle', () => {
        const result = slideStackLeft([4,0,0,2]);
        const expected = [4,2,0,0]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has 2 matching tiles', () => {
        const result = slideStackLeft([4,4,0,2]);
        const expected = [8,2,0,0]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has 2 pairs of matching tiles', () => {
        const result = slideStackLeft([4,4,16,16]);
        const expected = [8,32,0,0]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has 3 matching tiles', () => {
        const result = slideStackLeft([4,4,4,2]);
        const expected = [8,4,2,0]
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
    })
    it('has 4 matching tiles', () => {
        const result = slideStackLeft([2,2,2,2]);
        const expected = [4,4,0,0]
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
    })
})

describe('slideStackRight', () => {
    it('has tile on the left', () => {
        const result = slideStackRight([4,0,2,0]);
        const expected = [0,0,4,2]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has tile on the left', () => {
        const result = slideStackRight([4,0,0,2]);
        const expected = [0,0,4,2]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has no tiles', () => {
        const result = slideStackRight([0,0,0,0]);
        const expected = [0,0,0,0]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has full row', () => {
        const result = slideStackRight([4,2,4,2]);
        const expected = [4,2,4,2]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has gap in middle', () => {
        const result = slideStackRight([4,0,0,2]);
        const expected = [0,0,4,2]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has 2 matching tiles', () => {
        const result = slideStackRight([4,4,0,2]);
        const expected = [0,0,8,2]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has 2 pairs of matching tiles', () => {
        const result = slideStackRight([4,4,16,16]);
        const expected = [0,0,8,32]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
    it('has 3 matching tiles', () => {
        const result = slideStackRight([4,4,4,2]);
        const expected = [0,8,4,2]
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
    })
    it('has 4 matching tiles', () => {
        const result = slideStackRight([2,2,2,2]);
        const expected = [0,0,4,4]
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
    })
})

describe('tileDiff', () => {
    it('should return array booleans (true means diff found)', () => {
        const result = tileDiff([1,2,3], [1,2,300])
        const expected = [false, false, true]
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })
})