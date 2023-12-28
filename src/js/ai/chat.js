import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: "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",
	dangerouslyAllowBrowser: true,
});

const messages = [];

const messageInput = document.getElementById("message-input");
const sendButton = document.querySelector("#send-button");
const chatContainer = document.querySelector("#ai-responses");

function sendMessage() {
	const userMessage =
		"Imagine you're a companion, a friend to talk to and answer all the user's prompts the way you act: " +
		messageInput.value;
	if (!userMessage.trim()) return;

	messages.push({ role: "user", content: userMessage.split(": ")[1] });
	messageInput.value = "";

	updateChat();
	getBotResponse(userMessage);
}

async function getBotResponse(userMessage) {
	try {
		const response = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages: [{ role: "user", content: userMessage }],
			max_tokens: 900,
			temperature: 0.7,
		});

		messages.push({ role: "bot", content: response.choices[0].message.content });

		updateChat();
	} catch (err) {
		console.error(err);
	}
}

function createChatBubble(message) {
	return `<div class="chat-bubble message ${message.role}">${message.content}</div>`;
}

function updateChat() {
	const chatMessages = messages.map(createChatBubble).join("");
	chatContainer.innerHTML = chatMessages;
}

sendButton.addEventListener("click", sendMessage);
