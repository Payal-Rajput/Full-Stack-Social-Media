import { GoogleGenAI } from "@google/genai";
import config from "../config/config.js";


const ai = new GoogleGenAI({
    apiKey:config.GEMINI_API_KEY,
});

export async function generateCaption(file){
    const base64Image = new Buffer.from(file.buffer).toString('base64');


    const contents = [
      {
        inlineData: {
          mimeType: file.mimetype,
          data: base64Image,
        },
      },
      { text: "Caption this image." },
    ];
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config:{
        systemInstruction:`
        Keep captions short and punchy (under 20 words for social media).
        Use simple, relatable language.
        use hashtag and emojis.

        You have to analyse the image and generate  a caption in simple text format.
        `
      }
    });

    // console.log(response.text);
    return response.text;

}










//  ✅✅generate text from ai 

// import { GoogleGenAI } from "@google/genai";
// import config from "../config/config.js";

// // The client gets the API key from the environment variable `GEMINI_API_KEY`.
// const ai = new GoogleGenAI({});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "what is knapsack problem in 50 words",
//   });
//   console.log(response.text);
// }

// main();

// // run this in terminal ⬇️ for seeing result of the prompt you gave to ai 
// // cd backend
// // node ./src/services/ai.service.js