import { render } from "@testing-library/react"
import { Button } from "../../../../src/components/base/Button"

describe("Button component", () => {
  test("it renders correctly with default props", () => {
    const { container } = render(<Button>Default</Button>)
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom variant", () => {
    const { container } = render(<Button variant="secondary">Secondary</Button>)
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom iconLeft", () => {
    const { container } = render(
      <Button variant="secondary" iconLeft="fas fa-user">
        User
      </Button>
    )
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom iconRight", () => {
    const { container } = render(
      <Button variant="secondary" iconRight="fas fa-user">
        User
      </Button>
    )
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom link", () => {
    const { container } = render(
      <Button link="https://google.com">Google</Button>
    )
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom target", () => {
    const { container } = render(
      <Button link="https://google.com" target="_blank">
        Google
      </Button>
    )
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom size", () => {
    const { container } = render(<Button size="lg">Large</Button>)
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom className", () => {
    const { container } = render(
      <Button className="custom-class">Custom</Button>
    )
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom onClick", () => {
    const onClick = jest.fn()
    const { container } = render(<Button onClick={onClick}>Click</Button>)
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom type", () => {
    const { container } = render(<Button type="submit">Submit</Button>)
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom id", () => {
    const { container } = render(<Button id="custom-id">Custom ID</Button>)
    expect(container).toMatchSnapshot()
  })
})
