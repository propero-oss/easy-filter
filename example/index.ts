import { eq, like, ne, or } from "src/helper";
import { FilterParser } from "src/parser";
import { Filter } from "src/types";

const parser = new FilterParser();
const logParsed = (str: string) => console.log("[PARSE]", str, "=>", parser.parse(str));
const logSerialized = (filter: Filter) => console.log("[SERIALIZE]", filter, "=>", parser.serialize(filter));

logParsed("and(eq(firstName,Mike),ne(lastName,Peterson))");
logSerialized(or(eq("firstName", "Mike"), ne("lastName", "Peterson"), like("firstName", "(,)A%", true)));
