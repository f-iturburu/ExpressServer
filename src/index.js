import app from "./app.js";
import { database } from "./database/db.js";
import { Episode } from "./models/episode.Model.js";
import { Movie } from "./models/movie.Model.js";
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
  const newMovie1 = new Movie(
    "Inuyasha the Movie: Affections Touching Across Time",
    "Half-demon Inuyasha's late dog-demon father Toga defeated a powerful Chinese moth yōkai, named Hyōga two centuries ago, but a Shikon Jewel fragment has freed his son, Menōmaru, who seeks to avenge his father's death and free the tremendously infinite power and strength of his father sealed away with him.",
    "15-09-2001",
    "https://upload.wikimedia.org/wikipedia/en/e/e9/Inuyasha_the_Movie_poster.png?20180110064040",
    "https://www.youtube.com/watch?v=WR7pdpoeZ8k&ab_channel=majalth"
  );
  const newMovie2 = new Movie(
    "Inuyasha the Movie: The Castle Beyond the Looking Glass",
     "Half-demon Inuyasha, schoolgirl Kagome, monk Miroku, demon slayer Sango, and fox demon Shippo battle and defeat their archenemy Naraku. As a result, Miroku's Wind Tunnel that Naraku cursed his family with disappears from his hand, while elsewhere, Sango's brother Kohaku is freed from Naraku's grasp as a human puppet. With Naraku apparently defeated, Inuyasha, Kagome, and Shippo part ways with Miroku and Sango to continue searching for the shards of the Shikon Jewel. Miroku returns to his master, Mushin, and Sango returns to her village and finds the amnesiac Kohaku there. Mushin presents Miroku with a task that is to be given to the surviving descendant of his family who defeats Naraku: to destroy a yōkai who threatens to cast the world into eternal night.",
     "21-09-2002",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/InuYasha_movie_2.jpg/220px-InuYasha_movie_2.jpg",
    "https://www.youtube.com/watch?v=1bjXLsHIjyo&ab_channel=AnimeExtraSpecialBonusFeatures"
  );
  const newMovie3 = new Movie(
    "Inuyasha the Movie: Swords of an Honorable Ruler",
     "Two centuries ago, the great dog-demon Tōga denies his elder son Sesshomaru's request for ownership of two of his swords, Tessaiga and So'unga. Afterwards, Tōga heads to a mansion guarded by an army of samurai where his human wife, Lady Izayoi, is giving birth. The army's leader, Takemaru of Setsuna, who is in love with Izayoi, attempts to kill her by stabbing her and setting the mansion ablaze. Tōga defeats the army and cuts off one of Takemaru's arms to enter the mansion, and uses his third sword, Tenseiga, to revive Izayoi. Tōga allows her to flee the burning mansion with their newborn, whom he names Inuyasha, then fights Takemaru. At a safe distance, Izayoi witness the mansion collapses on both men and Toga's spirit wishes her to live a long life with Inuyasha.",
     "20-09-2003",
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/InuYasha_movie_3.jpg/220px-InuYasha_movie_3.jpg",
    "https://youtu.be/UODpV0v_1eQ"
  );
});
