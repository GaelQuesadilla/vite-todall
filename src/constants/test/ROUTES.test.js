import { expect } from "chai";
import { ROUTES } from "../ROUTES";

describe("Constant routes", () => {
  test("All constants should have href", () => {
    const keys = Object.keys(ROUTES);
    let routesWhithoutHref = keys.filter(
      (key) => typeof ROUTES[key].href !== typeof String()
    );
    expect(routesWhithoutHref).toStrictEqual([]);
  });
});
