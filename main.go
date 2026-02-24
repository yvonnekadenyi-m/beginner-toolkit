package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	// Seed the random number generator
	rand.Seed(time.Now().UnixNano())

	// AI-themed messages for graduates
	aiMessages := []string{
		"Your prompts got smarter, now so will the world.",
		"From learners to builders: welcome to the AI future.",
		"Small models today, big impact tomorrow.",
		"Keep learning, keep prompting, keep building.",
		"AI doesn’t replace you, it amplifies you.",
	}

	// Pick a random message
	randomIndex := rand.Intn(len(aiMessages))
	messageOfTheDay := aiMessages[randomIndex]

	// Print output
	fmt.Println("🎓 Welcome, Moringa AI Graduates!")
	fmt.Println("🤖 AI Message of the Day:")
	fmt.Println(messageOfTheDay)
}