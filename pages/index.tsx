import React from "react"
import { QuestionForm } from "../components/Form"

const Home = () => {
  const fakeSubmit = async (values: any) => {
    console.log(values)
    return null
  }

  return (
    <div className="example">
      <h1>Alchemy Webform Builder</h1>
      <QuestionForm submit={fakeSubmit} />
    </div>
  )
}

export default Home
