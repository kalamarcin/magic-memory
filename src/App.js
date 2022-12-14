import { useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
	{ src: '/img/helmet-1.png' },
	{ src: '/img/potion-1.png' },
	{ src: '/img/ring-1.png' },
	{ src: '/img/scroll-1.png' },
	{ src: '/img/shield-1.png' },
	{ src: '/img/sword-1.png' },
]

const App = () => {
	const [cards, setCards] = useState([])
	const [turns, setTruns] = useState(0)
	const [choiceOne, setChoiceOne] = useState(null)
	const [choiceTwo, setChoiceTwo] = useState(null)

	// shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map(card => ({ ...card, id: Math.random() }))

		setCards(shuffledCards)
		setTruns(0)
	}
	// handle a choice 

	

	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>
			<div className="card-grid">
				{cards.map(card => (
					<SingleCard key={card.id} card={card} />
				))}
			</div>
		</div>
	)
}

export default App
