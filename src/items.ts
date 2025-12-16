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
    title: "<i>Kalyi Jag</i> is formed with members Gusztáv Varga, József Balogh, Ágnes Künstler, and Béla Balogh.",
    date: "1978",
  },
  {
    id: "1979",
    title: "<i>Kalyi Jag</i> win the \"Young Masters of Folk Art\" award.",
    date: "1979",
  },
  {
    id: "1987",
    title: "Gypsy Folk Songs From Hungary",
    date: "1987",
    albumInfo: {
      label: "Hungaroton",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/gypsy-folk-songs-from-hungary`,
      },
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
      },
    }
  },
  {
    id: "1990",
    title: "Karingszo Me Phirav - Gypsy Folk Songs From Hungary - Amerre Én Járok",
    altTitle: "Karingszo Me Phirav - Gypsy Folk Songs From<br>Hungary - Amerre Én Járok",
    date: "1990",
    albumInfo: {
      label: "Hungaroton",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/karingszo-me-phirav-gypsy-folk-songs-from-hungary-amerre-én-járok`,
      },
    }
  },
  {
    id: "1992",
    title: "O Suno - The Dream - Az Álom",
    date: "1992",
    albumInfo: {
      label: "Hungaroton",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/o-suno-the-dream-az-álom`,
      },
    }
  },
  {
    id: "1998",
    title: "Cigányszerelem = Romano Kamipo = Gipsy Love",
    date: "1998",
    albumInfo: {
      label: "Kalyi G+A",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/cigányszerelem-romano-kamipo-gipsy-love`,
      },
    }
  },
  {
    id: "2002",
    title: "Köszöntünk Titeket • Naisaras Tumen • Greating For You",
    date: "2002",
    albumInfo: {
      label: "Kalyi G+A",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/köszöntünk-titeket-naisaras-tumen-greating-for-you`,
      },
    }
  },
  {
    id: "2004",
    title: "Tjirej Le Gilja = Minden Dalom A Tiéd = All My Songs Are Yours",
    date: "2004",
    albumInfo: {
      label: "RTL Zeneklub",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/tjirej-le-gilja-minden-dalom-a-tiéd-all-my-songs-are-yours`,
      },
    }
  },
];