import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';
import App from "../App"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    let header = screen.queryByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)


    const nameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);

    userEvent.type(nameInput, "Kyle");
    userEvent.type(lastNameInput, "Van Buren");
    userEvent.type(addressInput, "1234 INDY");
    userEvent.type(cityInput, "Indianapolis");
    userEvent.type(stateInput, "Idiana");
    userEvent.type(zipInput, "1245");

    const submitInput = screen.getByRole('button');
    userEvent.click(submitInput);
    const successful = await screen.findByText(/Your Order is Complete/i);
    expect(successful).toBeInTheDocument();
});