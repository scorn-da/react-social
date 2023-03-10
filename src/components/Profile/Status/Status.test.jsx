import React from "react";
import { create } from "react-test-renderer";
import Status from "src/components/Profile/Status/Status";

describe("Profile status component", () => {
  test("The status from props should be in the state", () => {
    const component = create(<Status status="Try to subscribe" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Try to subscribe");
  });

  test("The span element should be created", () => {
    const component = create(<Status status="Try to subscribe" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("The input element shouldn't be created", () => {
    const component = create(<Status status="Try to subscribe" />);
    const root = component.root;
    expect(() => {
      const input = root.findByType("input");
    }).toThrow();
  });

  test("The span content should contain the initial phrase", () => {
    const component = create(<Status status="Try to subscribe" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("Try to subscribe");
  });

  test("The input should be displayed instead the span", () => {
    const component = create(<Status status="Try to subscribe" />);
    const root = component.root;
    const div = root.findByType("div");
    div.props.onClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("Try to subscribe");
  });

  test("A callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<Status status="Try to subscribe" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
