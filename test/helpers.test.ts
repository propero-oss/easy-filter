import { ge, gt, lt } from "src/helper";

describe("helpers", () => {
  describe("comparison-filters", () => {
    it("should correctly create gt filter objects", () => {
      expect(gt("field", "value")).toEqual({ op: "gt", field: "field", value: "value" });
    });

    it("should correctly create lt filter objects", () => {
      expect(lt("field", "value")).toEqual({ op: "lt", field: "field", value: "value" });
    });

    it("should correctly create ge filter objects", () => {
      expect(ge("field", "value")).toEqual({ op: "ge", field: "field", value: "value" });
    });
  });
});
