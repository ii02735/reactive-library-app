type KeyValuePair = { [key:string]: string | number };

export function mapObject(headers:any[],values:any[][]): Object[] {
    return values.map(function(row) {
        return row.reduce(function(result, field, index) {
            if(result)
                result[headers[index]] = field;
            return result;
        }, {});
    });
}