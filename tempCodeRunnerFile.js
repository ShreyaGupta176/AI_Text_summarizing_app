app.post('/generateImg', async (req, res) => {
  try {
    const imageBuffer = await generateImg();
  });