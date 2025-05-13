import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN); 
// save your hugging face token as VITE_HF_ACCESS_TOKEN in dot env file

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                {
                    role: "user",
                    content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
                },
            ],
            max_tokens: 1024,
        });
        return response.choices[0].message.content;
    } catch (err) {
        console.error("Chat error:", err.message);
    }
}