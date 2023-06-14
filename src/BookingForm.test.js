import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByDisplayValue("Make Your reservation");
    console.log(headingElement); //?
    expect(headingElement).toBeInTheDocument();
});