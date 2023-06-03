import HTMLReactParser from "html-react-parser"
import currencyFormatter from "currency-formatter"

export const convertHtmlToReact = (data) => {
  if (data && typeof data === "string") return HTMLReactParser(data)
  return data
}

export const variablesMapper = (obj) =>
  Object.keys(obj)
    ?.filter((item) => obj[item])
    ?.map((item) => `${item}=${obj[item]}`)
    ?.join("&")

export const FormatCurrency = (num) =>
  currencyFormatter.format(num, { code: "IDR", locale: "id-ID" })
