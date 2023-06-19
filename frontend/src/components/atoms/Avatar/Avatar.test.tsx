/** * @jest-environment jsdom */
import { render } from "@testing-library/react";
import { Avatars } from "./Avatar";

describe("Avatar test", () => {
  const src =
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg";
  it("should render letter", () => {
    const { container } = render(<Avatars alt="a" />);
    expect(container.firstChild).toBeTruthy();
  });

  it("should render the image", () => {
    const { container } = render(<Avatars src={src} />);
    expect(container.firstChild).toBeTruthy();
  });

  it("should match the snapshot", () => {
    const { container } = render(<Avatars src={src} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
