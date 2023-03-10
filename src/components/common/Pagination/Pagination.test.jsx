import React from "react";
import { create } from "react-test-renderer";
import Pagination from "src/components/common/Pagination/Pagination";

describe("Pagination component tests", () => {
  test("Showed lis should be 11: next button + 10 pages", () => {
    const component = create(<Pagination totalItems={12} pageSize={1} partSize={10} />)
    const root = component.root;
    const lis = root.findAllByType("li");
    expect(lis.length).toBe(11);
  });
});
