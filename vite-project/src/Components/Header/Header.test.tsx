import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // 

import Header from "./Header";

describe("Header component", () => {
    it("Should have 3 links", () => {
       render(
        <BrowserRouter>
        <Header />
      </BrowserRouter>
       ) 
        // Hitta alla länkar (a-taggar) på sidan
    const Links = screen.getAllByTestId('link');

    // Kontrollera att exakt 3 länkar finns
    expect(Links).toHaveLength(3);
    });
});