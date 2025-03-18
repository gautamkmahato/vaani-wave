
  
export default async function generateAudio(requestData) {
    const response = await fetch('https://tts-backend.vercel.app/api/v1/audio/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
        throw new Error("Failed to generate audio");
    }

    const result = await response.json();
  
    return result;
}
  