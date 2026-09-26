const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HOLY GHOST PRIME</title>
      <style>
        body {
          margin: 0;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0b0712;
          color: white;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .box {
          width: 85%;
          max-width: 420px;
          padding: 30px;
          border-radius: 20px;
          background: #151020;
          box-shadow: 0 0 25px #7c3aed;
        }

        h1 {
          color: #b56cff;
        }

        p {
          color: #ccc;
        }

        button {
          padding: 13px 25px;
          border: none;
          border-radius: 10px;
          background: #7c3aed;
          color: white;
          font-size: 16px;
        }
      </style>
    </head>

    <body>
      <div class="box">
        <h1>HOLY GHOST PRIME</h1>
        <p>Bienvenue sur le panneau V2</p>
        <button>ACCUEIL</button>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});

