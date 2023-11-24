import Map from ".";
import { render, screen } from "@testing-library/react"

describe("<Map />", () => {
  it('should render without any marker', () => {
    render(<Map/>)
    screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', { name: /leaflet/i })).toBeInTheDocument()
  })
  it("should render with the marker in context place", () => {
   const place = {
    id: '1',
    name: 'Belo Horizonte',
    slug: 'belo horizonte',
    location: {
      latitude: 0,
      longitude: 0
    }
   }
    render(<Map places={[place]}/>)

    expect(screen.getByTitle(/belo horizonte/i)).toBeInTheDocument()
  })
})
