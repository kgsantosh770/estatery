import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";
import { debug } from "console";

describe('Button', () => {
    const onClick = () => 'testing';
    debug();

    it('component renders', () =>{
        render(<Button buttonText="Testing" onClick={onClick}/>)
        const buttonText = screen.getByText("Testing");
        expect(buttonText).toBeInTheDocument;
    })

    it('has fill class when the fill prop is true', ()=>{
        render(<Button buttonText="Testing" onClick={onClick} fill={true}/>)
        const button = screen.getByTestId('btn');
        expect(button).toHaveClass('fill');     
    })

    it('has large class when the variant prop have value large', ()=>{
        render(<Button buttonText="Testing" onClick={onClick} size="large"/>)
        const button = screen.getByTestId('btn');
        expect(button).toHaveClass('large');
    })
})