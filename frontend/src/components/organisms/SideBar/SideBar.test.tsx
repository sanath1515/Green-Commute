/**
 * @jest-environment jsdom
 */

 import { render, screen, cleanup } from "@testing-library/react";
 import SideBar from "./SideBar"
 
 afterEach(cleanup);
 

 
 describe("SideBar Item Testing", () => {
   it("Checking The title", () => {
     render(<SideBar />);
 
     expect(screen.getByText("Dashboard")).toBeInTheDocument();
   });
 });
 