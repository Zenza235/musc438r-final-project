const ALBUM_PAGE_ROUTE = "/albums";
const ALBUM_IMG_PATH = "/assets/albums";

const items = [
  // TODO: add non-album events too
  {
    title: "Gypsy Folk Songs From Hungary",
    date: "1987",
    desc: "Album Released",
    albumInfo: {
      label: "Hungaroton",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/gypsy-folk-songs-from-hungary`,
        img: `${ALBUM_IMG_PATH}/1987-front.jpg`,
      },
    }
  },
  {
    title: "Lungoj O Drom Angla Mande",
    date: "1989",
    desc: "Album Released",
    albumInfo: {
      label: "Hungaroton",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/lungoj-o-drom-angla-mangde`,
        img: `${ALBUM_IMG_PATH}/1989-front.jpg`,
      },
    }
  },
  {
    title: "Karingszo Me Phirav - Gypsy Folk Songs From Hungary - Amerre Én Járok",
    date: "1990",
    desc: "Album Released",
    albumInfo: {
      label: "Hungaroton",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/karingszo-me-phirav-gypsy-folk-songs-from-hungary-amerre-én-járok`,
        img: `${ALBUM_IMG_PATH}/1990-front.jpg`,
      },
    }
  },
  {
    title: "O Suno - The Dream - Az Álom",
    date: "1992",
    desc: "Album Released",
    albumInfo: {
      label: "Hungaroton",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/o-suno-the-dream-az-álom`,
        img: `${ALBUM_IMG_PATH}/1992-front.jpg`,
      },
    }
  },
  {
    title: "Cigányszerelem = Romano Kamipo = Gipsy Love",
    date: "1998",
    desc: "Album Released",
    albumInfo: {
      label: "Kalyi G+A",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/cigányszerelem-romano-kamipo-gipsy-love`,
        img: `${ALBUM_IMG_PATH}/1998-front.jpg`,
      },
    }
  },
  {
    title: "Köszöntünk Titeket • Naisaras Tumen • Greating For You",
    date: "2002",
    desc: "Album Released",
    albumInfo: {
      label: "Kalyi G+A",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/köszöntünk-titeket-naisaras-tumen-greating-for-you`,
        img: `${ALBUM_IMG_PATH}/2002-front.jpg`,
      },
    }
  },
  {
    title: "Tjirej Le Gilja = Minden Dalom A Tiéd = All My Songs Are Yours",
    date: "2004",
    desc: "Album Released",
    albumInfo: {
      label: "RTL Zeneklub",
      link: {
        page: `${ALBUM_PAGE_ROUTE}/tjirej-le-gilja-minden-dalom-a-tiéd-all-my-songs-are-yours`,
        img: `${ALBUM_IMG_PATH}/2004-front.jpg`,
      },
    }
  },
];

export default items;