export const updateArrayObject = (items, itemId, objPropName, newObj) => {
    return items.map(i => i[objPropName] !== itemId ? {...i, ...newObj} : i)
}