import "@testing-library/jest-dom";

import { describe,it,expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../../Components/Cart/Cart";

import ProductPage from "./ProductPage";


describe("Product page component", () => {
  it("Should contain a h4 with an intro", () => {

    render(
      <BrowserRouter>
        <CartProvider>
          <ProductPage products={[]} />
        </CartProvider>
      </BrowserRouter>
    );

    const julintro = screen.getByTestId("h4");
    console.log(julintro);

    expect(julintro).toBeInTheDocument();
    expect(julintro).toHaveTextContent(
      /welcome to our christmas shop!/i
    ); 
   
  });
});
