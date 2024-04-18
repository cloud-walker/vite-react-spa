export const App = ({onClick}: {onClick?: () => void}) => {
  return (
    <>
      <h1 className="underline">hello</h1>
      <button onClick={onClick}>click me</button>
    </>
  )
}
