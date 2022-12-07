import * as yup from "yup";

export const schema = yup.object().shape({
    content: yup.string().matches(/^(|.{2,})$/, "Task must have at least 2 characters")
})

export const updateArrayObject = (items, itemId, objPropName, newObj) => {
    return items.map(i => i[objPropName] !== itemId ? {...i, ...newObj} : i)
}

