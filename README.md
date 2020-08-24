# Easy Filter



```shell
npm i @propero/easy-filter
# Or with yarn
yarn add @propero/easy-filter
```

## Documentation

###### In progress... maybe... hopefully... within the next decade or so... no guarantees though

## Examples

For further examples check out the [example directory](example).

```typescript
import { FilterParser, and, gt, eq } from "@propero/easy-filter";


const parser = new FilterParser();

const parsed = parser.parse("and(lt(age,18),like(firstName,A%))");
/*
{
  "op": "and",
  "filters": [{
    "op": "lt",
    "field": "age",
    "value": "18"
  },{
    "op": "like",
    "field": "firstName",
    "value": "A%"
  }]
}
*/
const serialized = parser.serialize(and(gt("age", "21"), eq("name", "Peter,()")));
// and(gt(age,21),eq(name,Peter\,\(\)))
```
