import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "testclass",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test Button component", () => {
  it("should render the correct default button", () => {
    render(<Button {...defaultProps}>Test1</Button>);
    const element = screen.getByText("Test1") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("should render the correct component based on different props", () => {
    render(<Button {...testProps}>Test2</Button>);
    const element = screen.getByText("Test2");
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-primary btn-lg testclass");
  });

  it("should render a link when btnType equals link and href is provided", () => {
    render(
      <Button btnType={ButtonType.Link} href="http://goole.com">
        TestLink
      </Button>
    );
    const element = screen.getByText("TestLink");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });

  it("should render disabled button when disabled set to true", () => {
    render(<Button {...disabledProps}>DisabledTest</Button>);
    const element = screen.getByText("DisabledTest") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
