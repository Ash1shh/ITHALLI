import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        max_tokens: 2048,
    }).then(res => res.data.choices[0].text).catch(err => `ChatGPT was unable to find an answer for that! (Error: ${err.message})`)


    return res
}

export default query