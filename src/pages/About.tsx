import { Header } from "../components";

/**
 * DONT FORGET
 * - "MUSC438R Creative Project - Paolo Atienza"
 * - Explanation on how to use the site (click on the albums, etc.)
 * - Bibliography
 */

function About() {
  return (
    <>
      <Header />
      <div className="text-tan-600 m-10 font-mono">
        <div className="mb-10">
          <h2 className="text-3xl">
            MUSC438R Creative Project - Paolo Atienza
          </h2>
          <p className="text-2xl font-serif mt-5">
            This site was made using the ReactTS, Vite, and TailwindCSS libraries; no AI was involved in the design or coding of this website!
          </p>
          <p className="text-2xl font-serif mt-5">
            To use the timeline, simply <u>scroll down</u> to view any events. The search feature allows you to jump to a specific event based on year. 
            <br/>For album releases, click on either the <u>album art or name</u> to access a page with more historical context surrounding the album release year!
            Please contact my email if you have any questions!
          </p>
          <p className="text-2xl font-serif mt-5">
            <a className="underline" target="_blank" href="https://github.com/Zenza235/musc438r-final-project">[GitHub Repository]</a>
          </p>
        </div>
        <div>
          <h2 className="text-3xl mb-5">Bibliography</h2>
          <ul className="text-2xl font-serif mt-5 space-y-5">
            <li>
              <i>Ágnes Daróczi</i>. <a className="underline" target="_blank" href="http://www.romarchive.eu/en/collection/p/agnes-daroczi">www.romarchive.eu/en/collection/p/agnes-daroczi.</a>
            </li>
            <li>
              Daróczi, Ágnes. “Shouldn't We Have a History?” 
              <i>Populism, Memory and Minority Rights: Central and Eastern European Issues in Global Perspective</i>, 2018, pp. 20-35. <a className="underline" target="_blank" href="https://doi.org/10.1163/9789004386426_003">https://doi.org/10.1163/9789004386426_003.</a>
            </li>
            <li>
              “Kalyi Jag Discography.” <i>Discogs</i>, <a className="underline" target="_blank" href="https://www.discogs.com/artist/1056288-Kalyi-Jag?srsltid=AfmBOoqM5z9pLLgB20KIqKchuhrRCAtTT5K4pMj6HrU6I1ItRMhFuGhD&superFilter=Releases&subFilter=Albums">www.discogs.com/artist/1056288-Kalyi-Jag?srsltid=AfmBOoqM5z9pLLgB20KIqKchuhrRCAtTT5K4pMj6HrU6I1ItRMhFuGhD&superFilter=Releases&subFilter=Albums</a>. Accessed 12 Dec. 2025.
            </li>
            <li>
              Kovalcsik, Katalin. “The Romani Musicians on the Stage of Pluri-Culturalism: The Case of the Kalyi Jag Group in Hungary.” <i>Multi-Disciplinary Approaches to Romany Studies</i>, edited by Michael Stewart and Márton Rövid, Central European UP, 2010, <a className="underline" target="_blank" href="http://dl1.cuni.cz/pluginfile.php/495454/mod_resource/content/1/stewart_rovai_multidisciplinary_approaches_to_romany_studies_.pdf">dl1.cuni.cz/pluginfile.php/495454/mod_resource/content/1/stewart_rovai_multidisciplinary_approaches_to_romany_studies_.pdf.</a>
            </li>
          </ul>
        </div>
        
      </div>
    </>
  );
}

export default About;