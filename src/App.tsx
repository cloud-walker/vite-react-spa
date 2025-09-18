export function App({onClick}: {onClick?: () => void}) {
	return (
		<>
			<h1 className="underline">hello</h1>
			<button type="button" onClick={onClick}>
				click me
			</button>
		</>
	)
}
