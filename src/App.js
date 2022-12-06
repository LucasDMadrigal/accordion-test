import { useState } from "react"
import "./App.css"

function App() {

  const [selected, setSelected] = useState(null)

  const data = [
    {
      title: "Opcion 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Opcion 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Opcion 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Opcion 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  const toogle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className="App">
      <header className="App-header">
        Aprende React pendejo boludo
        <div className="wrapper">
          <div className="accordion">
            {data.map((option, i) => (
              <div className="item" >
                <div className="title" onClick={() => toogle(i)}>
                  <h2>{option.title}</h2>
                  <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={`content ${selected === i ? 'show' : ''}`}>{option.content}</div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
