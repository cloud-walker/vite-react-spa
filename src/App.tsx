import {css} from '../styled-system/css'

export function App({onClick}: {onClick?: () => void}) {
	return (
		<>
			<h1 className={css({textDecoration: 'underline'})}>hello</h1>
			<button type="button" onClick={onClick}>
				click me
			</button>
		</>
	)
}
