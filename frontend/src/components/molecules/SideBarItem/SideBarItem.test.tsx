/**
 * @jest-environment jsdom
 */

import { render, screen, cleanup } from "@testing-library/react";
import SideBarItem,{SideBarItemProps} from "./SideBarItem";

afterEach(cleanup);

const data: SideBarItemProps = {
    img:"https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/7d41e340-f4ed-4dab-a859-d4cd943a67f4.svg",
    name:"Dashboard",
    id:"1"
};

describe("SideBarItem Item Testing", () => {
  it("Checking The title", () => {
    render(<SideBarItem {...data} />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
