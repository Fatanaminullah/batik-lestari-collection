import {
  SectionCardList,
  SectionCarousel,
  SectionNews,
} from "@components/sections"
import React from "react"

export function SectionMapping({ data }) {
  return (
    <>
      {data?.map((item, i) => {
        switch (item.name) {
          case "carousel":
            return <SectionCarousel {...item.property} key={i} />
          case "cardlist":
            return <SectionCardList {...item.property} key={i} />
          case "news":
            return <SectionNews {...item.property} key={i} />
          default:
            return <div key={i} />
        }
      })}
    </>
  )
}
