import app from "./app.js";
import { database } from "./database/db.js";
import { Episode } from "./models/episode.Model.js";
import { PORT } from "./config.js";

app.listen(PORT, async () => {
  console.log(`La app esta escuchando en el puerto: ${PORT}`);

  const newEpisode = new Episode(
    1,
    1,
    "The Girl Who Overcame Time... and the Boy Who Was Just Overcome",
    "Kagome Higurashi has been told many stories by her grandfather, such as the one about the Shikon no Tama (The Jewel of Four Souls) and never believed them until her fifteenth birthday, when she is pulled down a dry well at her shrine by a centipede demon. She emerges from the well to discover she's not in Tokyo any more, but instead, she's in Feudal Japan.Kagome discovers a weird boy with dog ears pinned to a tree in a forest and is captured by strange villagers. The high priestess of the village, Kaede, realizes that Kagome looks just like her sister who died 50 years ago.",
    "16-10-2000",
    "https://upload.wikimedia.org/wikipedia/en/5/54/Inuyasha_%28season_1%29.png",
    "https://youtu.be/KwCfHVGamn8"
  );

  const newEpisode2 = new Episode(
    1,
    2,
    "Seekers of the Sacred Jewel",
    "After being released from the Sacred Tree of Ages by Kagome Higurashi, on her fifteenth birthday, Inuyasha plans to steal the Shikon Jewel, using its powers to become a full-fledged dog yōkai. Kaede casts the spiritual Beads of Subjugation onto Inuyasha, giving Kagome the power to comically control him with a single spoken word. Inuyasha and Kagome later chase a crow demon that steals and absorbs the Shikon Jewel. Kagome is able to shoot the crow with a bow and arrow, which consequently shatters the Shikon Jewel into dozens of fragments that fall throughout the lands of feudal Japan.",
    "23-10-2000",
    "https://upload.wikimedia.org/wikipedia/en/5/54/Inuyasha_%28season_1%29.png",
    "https://youtu.be/KwCfHVGamn8"
  );

  const newEpisode3 = new Episode(
    1,
    3,
    "Down the Rabbit Hole and Back Again",
    "With the Shikon Jewel shattered, each fragment has the ability to further develop and drastically enhance the abilities of a yōkai and grant any wish. Inuyasha fumes at the thought of having to collect the scattered pieces of the Shikon Jewel, making his own wish of becoming a complete dog-demon an impossibility. Kagome soon falls into the Bone Eater's Well, after being raided by Yura of the Hair, who steals a fragment of the Shikon Jewel from Kagome. Meanwhile, Inuyasha must face the human marionettes controlled by Yura, but he flees due to elderly Kaede's brutal injury.",
    "30-10-2000",
    "https://upload.wikimedia.org/wikipedia/en/5/54/Inuyasha_%28season_1%29.png",
    "https://youtu.be/KwCfHVGamn8"
  );
});
