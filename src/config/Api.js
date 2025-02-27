import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  }from"@google/generative-ai";
  const Apikey="AIzaSyBbjb3J83hm3MXO5GRkwzb2W5-YcAN8nuQ";
  // const apiKey = process.env.Apikey;
  const genAI = new GoogleGenerativeAI(Apikey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  }
  
 export default run;
