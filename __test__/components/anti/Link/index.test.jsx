import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Link } from "@components/base/Link"

describe("Link component", () => {
  test("it renders correctly with default props", () => {
    const { container } = render(<Link>Home</Link>)
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom href", () => {
    const { container } = render(<Link href="/about">About</Link>)
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom target", () => {
    const { container } = render(
      <Link href="https://google.com" target="_blank">
        Google
      </Link>
    )
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom className", () => {
    const { container } = render(
      <Link href="/" className="custom-class">
        Home
      </Link>
    )
    expect(container).toMatchSnapshot()
  })

  test("it renders correctly with custom props", () => {
    const { container } = render(
      <Link href="/" data-testid="link">
        Home
      </Link>
    )
    expect(container).toMatchSnapshot()
  })
})
