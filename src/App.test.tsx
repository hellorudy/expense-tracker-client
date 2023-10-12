import { render, screen } from "@testing-library/react";
import App from "./App.tsx";

describe('Simple test', () => {
   it('Render App component', () => {
      render(<App/>)
      expect(screen.getByTestId("test")).toHaveTextContent('Sample Title!')
   })
})
