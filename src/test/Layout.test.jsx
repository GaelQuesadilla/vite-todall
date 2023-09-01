import { render, screen } from "@testing-library/react";
import { Layout } from "../Layout";

describe("Layout component", () => {
  beforeEach(() => {
    render(
      <Layout>
        <h1>Hello world</h1>
      </Layout>
    );
  });
  test("Should view children", () => {
    expect(screen.getByText(/Hello world/g)).toBeDefined();
  });
});
