import { plainToClass } from "class-transformer"
import { SpreadSheetManager } from "../lib/googleapis"
import { mapObject } from "../lib/utils"
import Book from "../models/Book"

export default {
    "getAll": async function(): Promise<Book[]>{
        const data = await SpreadSheetManager.getValuesFromSheet('Books')
        const headers = data.values?.shift()
        if(headers && data.values)
            return mapObject(headers,data.values).map((object) => {
                return plainToClass(Book,object)
            })
        return []
    }
}