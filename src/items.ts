const ALBUM_PAGE_ROUTE = "/album";
export const ALBUM_IMG_PATH = "/assets/albums";

/**
 * note about ids:
 * they're just so the search function jumps to a year.
 * if multiple events occur in the same year, then only the first event in that year has an id
 */

export const items = [
  // TODO: add non-album events too
  {
    id: "1978",
    title: "Kalyi Jag is founded by Ágnes Daróczi and János Bársony in Budapest, Hungary. Preliminary members include: Gusztáv Varga, Jószef Balogh, Ágnes Künstler, and Béla Balogh.",
    date: "1978",
  },
  {
    id: "1979",
    title: "Kalyi Jag is awarded the title \"Young Masters of Folk Art\".",
    date: "1979",
  },
  {
    id: "1984",
    title: "Kalyi Jag has its first international performance at the <i>Collegium Hungaricum</i> in Vienna.",
    date: "1984",
  },
  {
    id: "1985",
    title: "Ágnes Daróczi writes a letter to the Ministry of Culture in Hungary, proposing that Kalyi Jag be permitted to make their first record.",
    date: "1985",
  },
  {
    id: "1987",
    title: "Gypsy Folk Songs From Hungary",
    date: "1987",
    albumInfo: {
      label: "Hungaroton",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/gypsy-folk-songs-from-hungary`,
        info: "https://www.discogs.com/master/562970-Kalyi-Jag-Gypsy-Folk-Songs-From-Hungary",
      },
      desc: "Having been founded in the late 1970s in Budapest, Hungary, Kalyi Jag had to find its footing amidst the country’s communist era. Despite the group’s popularity during these early years, even being awarded the title of “Young Masters of Folk Art”, because of their focus on Hungarian Romani folklore music, that same niche also contributed to some difficulties. At the time in Hungary, speaking – let alone singing – in Romani was stigmatized heavily, being regarded as “droning” by non-Romani and associated with a lack of education. Thus, looking for opportunities to start making records of their work was extremely difficult.<br/><br/>This first album “Gypsy Folk Songs From Hungary” was the result of one of the founding members, Ágnes Daróczi, reaching out to the country’s Ministry of Culture in 1985 and arguing for the importance and staying power of Gypsy folk music. Eventually the ministry agreed, compiling their own list of folk songs for Kalyi Jag to include on the album, allowing the group’s first record to finally be released nine years after the group’s inception."
    }
  },
  {
    id: "1989",
    title: "Lungoj O Drom Angla Mande",
    date: "1989",
    albumInfo: {
      label: "Hungaroton",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/lungoj-o-drom-angla-mangde`,
        info: "https://www.discogs.com/master/840287-Kalyi-Jag-Lungoj-O-Drom-Angla-Mande",
      },
      desc: "By the time of this second album, Kalyi Jag was already experiencing changes. Of the four primary members – Gusztáv Varga, Jószef Balogh, his wife Ágnes Künstler, and Béla Balogh – Béla left the group, being replaced by József Nagy. Additionally, the immense success of their first album, selling 30,000 copies during its first month, signaled much more change in the next couple of years. Kalyi Jag’s growth led to a much greater presence outside of Hungary, with the group often touring internationally. This second album carries on the same work as the 1987 album, with it also being another collection of folk songs. The instrumentation remains true to the Romani folk genre, with heavy use of vocal percussion and oral bass, centered around guitar on main melody."
    }
  },
  // {
  //   id: "1990",
  //   title: "Karingszo Me Phirav - Gypsy Folk Songs From Hungary - Amerre Én Járok",
  //   altTitle: "Karingszo Me Phirav - Gypsy Folk Songs From<br>Hungary - Amerre Én Járok",
  //   date: "1990",
  //   albumInfo: {
  //     label: "Hungaroton",
  //     link: {
  //       page: `${ALBUM_PAGE_ROUTE}/karingszo-me-phirav-gypsy-folk-songs-from-hungary-amerre-én-járok`,
  //       info: "https://www.discogs.com/master/810328-Kalyi-Jag-Karingszo-Me-Phirav-Gypsy-Folk-Songs-From-Hungary-Amerre-%C3%89n-J%C3%A1rok",
  //     },
  //   }
  // },
  {
    id: "1992",
    title: "O Suno - The Dream - Az Álom",
    date: "1992",
    albumInfo: {
      label: "Hungaroton",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/o-suno-the-dream-az-álom`,
        info: "https://www.discogs.com/master/1003473-Kalyi-Jag-O-Suno-The-Dream-Az-%C3%81lom",
      },
      desc: "This time marks an especially big shift for Kalyi Jag. 1993, a year after this album, would mark the beginning of the group’s involvement with <i>Magnetenshow</i>, a German-Austrian stage production focused around showcasing Romani music and dance. It should be noted that during the same year, Tony Gatlif’s Latcho Drom (1993) also came out. Being a documentary following the life of a Romani family, this film played a massive role in shaping people’s perspective of Roma at the time, one of the aspects people picked up on being Romani people’s skill with the arts. Kalyi Jag would be one of many Romani groups invited to perform in the production, choosing to perform not only Romani folk, but also several Romani dance choreographies. The group would go on to be invited to the <i>World Music Festival</i> where they would then win the title of <i>World Music Megastar</i>.<br/><br/>All in all, the early 90s showcased the evolution of Romani perception, with the strong stigmatization of Romani practices (which albeit are still prevalent in this era) evolving into more of a sense of curiosity, if not mysticism; shows like <i>Magnetenshow</i> illustrate how the greater world was taking advantage of this."
    }
  },
  {
    id: "1993",
    title: "Kalyi Jag begins their work with the German-Austrian superproduction <i>Magnetenshow</i>, performing 138 concerts across Austria, Germany, and Switzerland.",
    date: "1993",
  },
  {
    id: "1994",
    title: "Kalyi Jag is awarded the <i>Europe Prize</i> by the European Youth Parliament and One World Group and Music Television.",
    date: "1994",
  },
  {
    id: "1998",
    title: "Cigányszerelem = Romano Kamipo = Gipsy Love",
    date: "1998",
    albumInfo: {
      label: "Kalyi G+A",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/cigányszerelem-romano-kamipo-gipsy-love`,
        info: "https://www.discogs.com/master/1842513-Kalyi-Jag-Cig%C3%A1nyszerelem-Romano-Kamipo-Gipsy-Love",
      },
      desc: "Continuing on with the world’s shift in perspective of Roma and their music, Kalyi Jag reoriented their direction towards the “World Music”/“Ethnomusic” fad of the late 90s and early 2000s. This shift could be felt in the albums released during this time (1998, 2002); the album from this year, “Cigányszerelem = Romano Kamipo = Gipsy Love”, is notable for several reasons. Unlike all the previous albums, this is the first one not under the <i>Hungaroton</i> label. Prior to the fall of communism in Hungary in the early 90s, <i>Hungaroton</i> was the sole record label in all of Hungary, explaining its appearances in all other Kalyi Jag albums up to this point. Additionally, this album is one of the first Kalyi Jag albums with a guest, József Kókai, on clarinet. While much of the original instrumentation remains, the addition of a younger member and guest performers indicates an attempt by Kalyi Jag at meeting the new demands for “World Music” unique to this time."
    }
  },
  {
    id: "2003",
    title: "József Balogh and Ágnes Künstler leave Kalyi Jag to form separate groups <i>Ethnix</i> and <i>EthnoRom</i>. Gusztáv Varga chooses to keep the Kalyi Jag name.",
    date: "2003",
  },
  // {
  //   id: "2002",
  //   title: "Köszöntünk Titeket • Naisaras Tumen • Greating For You",
  //   date: "2002",
  //   albumInfo: {
  //     label: "Kalyi G+A",
  //     link: {
  //       page: `${ALBUM_PAGE_ROUTE}/köszöntünk-titeket-naisaras-tumen-greating-for-you`,
  //       info: "https://www.discogs.com/master/3518611-Kalyi-Jag-K%C3%B6sz%C3%B6nt%C3%BCnk-Titeket-Naisaras-Tumen-Greating-For-You",
  //     },
  //   }
  // },
  {
    id: "2004",
    title: "Tjirej Le Gilja = Minden Dalom A Tiéd = All My Songs Are Yours",
    date: "2004",
    albumInfo: {
      label: "RTL Zeneklub",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/tjirej-le-gilja-minden-dalom-a-tiéd-all-my-songs-are-yours`,
        info: "https://www.discogs.com/master/1559776-Kalyi-Jag-Tjirej-Le-Gilja-Minden-Dalom-A-Ti%C3%A9d-All-My-Songs-Are-Yours",
      },
      desc: "The 2000s marked another shift for Kalyi Jag, as pivotal members József Balogh and Ágnes Künstler left the group in 2003; they would go on to form separate groups <i>Ethnix</i> and then <i>EthnoRom</i>, notably carrying names seemingly directly referencing the “ethnomusic” genre for better visibility. Gustáv Varga would keep the Kalyi Jag name, shifting from the Romani folk that built the group’s career to more towards rock, a genre that served as the initial motivation for Kalyi Jag. This is most evident in the album from this year, \"Tjirej Le Gilja = Minden Dalom A Tiéd = All My Songs Are Yours\", featuring a collection of various Hungarian Christmas songs with an instrumentation that, while maintaining the vocals and jug of Romani folk, also notably features far more guitar and keyboard, both rampant throughout rock."
    }
  },
];