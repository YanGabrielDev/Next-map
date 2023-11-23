import Map from ".";
import { render, screen } from "@testing-library/react"

describe("<Map />", () => {
  it('should render without any marker', () => {
    render(<Map/>)
    screen.logTestingPlaygroundURL()
  })
  // it("should render with the marker in context place", () => {

  // })
})
