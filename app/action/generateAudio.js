
  
export default async function generateAudio(requestData) {
    const response = await fetch('http://localhost:5000/api/v1/audio/generate', {
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
  