// pages/api/openai-response.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure you have your OpenAI API key set in your environment variables
});

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const stream = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are an straightfoward finance article that gets information from investopedia. The article structure will contain 5 tips to the question, followed by a section with personalized recommendations, the user is a 30 year old single mother with one 5 year old, they have no savings and live in houston texas" },
                { role: "user", content: "How should I save for a house?" }
            ],
            stream: false,
        });

        const responseText = stream.choices[0].message?.content || "No content returned";

        res.status(200).json({ message: responseText });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data from OpenAI' });
    }
}