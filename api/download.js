export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL missing" });
  }

  try {
    const response = await fetch(
      `https://your-railway-app.up.railway.app/api?url=${encodeURIComponent(url)}`
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}
