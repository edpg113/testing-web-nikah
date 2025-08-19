import "./App.css";
import Pria from "./assets/pria.jpg";
import Wanita from "./assets/wanita.jpg";
import Home from "./assets/home.svg";
import Carousel from "./components/Carousel";
import Prewed1 from "./assets/prewed.jpg";
import Prewed2 from "./assets/prewed2.jpg";
import Prewed3 from "./assets/prewed3.jpg";
import Mandiri from "./assets/mandiri.png";
import Bca from "./assets/bca.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MusicPlayer from "./components/Musik";
import Backsound from "./audio/backsound pernikahan.m4a";
import { useRef, useState } from "react";

const foto = [Prewed1, Prewed2, Prewed3];

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 2500,
      offset: 100, // jarak scroll sebelum animasi aktif
      delay: 100,
      easing: "ease-in-out",
    });

    document.body.style.overflow = "hidden"; // Sembunyikan scroll saat di landing page
  }, []);

  const getQueryParam = (param) => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
  };

  const namaTamu = getQueryParam("to") || "Tamu Undangan";

  const openInvitation = () => {
    const invitationSection = document.querySelector(".start");
    invitationSection.style.marginTop = "-100vh"; // Geser bagian undangan ke atas

    // scroll
    document.body.style.overflow = "auto"; // Sembunyikan scroll

    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Autoplay ditolak oleh browser:", err);
      });
      setIsPlaying(true); // Setel status pemutaran musik ke true
    }
  };

  return (
    <div className="App">
      {/* Landing */}
      <div className="start">
        <MusicPlayer
          src={Backsound}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <div className="bg-undangan">
          <div className="container" data-aos="fade-up">
            <h3>The Wedding of</h3>
            <div className="namaPengantin">
              <h1>
                Ading <br />
                <span>&amp;</span> <br />
                Aisyah
              </h1>
              <div className="kepada">
                <p>Sabtu, 20 September 2025</p>
                <hr />
                <p>Kepada Yth. Bapak/Ibu/Sdr/i</p>
                <strong>{decodeURIComponent(namaTamu)}</strong>
                <hr />
              </div>
            </div>
            <button onClick={openInvitation}>Buka Undangan</button>
          </div>
        </div>
      </div>
      {/* Quotes */}
      <div className="quotes">
        <div className="bg-quotes">
          <div className="container2" data-aos="fade-up">
            <h1>Save Our Date</h1>
            <span>20.09.2025</span>
            <h1 className="namaPengantin2">
              Ading <span>&amp;</span> Aisyah
            </h1>
            <p>
              “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa
              kasih dan sayang.”
              <br />
              (Q.S. Ar-Rum: 21)
            </p>
          </div>
        </div>
      </div>
      {/* Pengantin */}
      <div className="pengantin">
        <div className="bg-pengantin">
          <div className="container3" data-aos="fade-up">
            <h1>Kedua Mempelai</h1>
            <div className="pengantin-container">
              <div
                className="pengantin-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="bg-foto">
                  <img className="foto" src={Pria} alt="Pria" />
                </div>
                <h2>Ading</h2>
                <p>Putra dari Bapak Rudi dan Ibu Siti</p>
              </div>
              <span>&amp;</span>
              <div
                className="pengantin-item"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="bg-foto">
                  <img className="foto" src={Wanita} alt="Wanita" />
                </div>
                <h2>Siti Aisyah</h2>
                <p>Putri dari Bapak Ferdy dan Ibu Maya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rangkaian Acara */}
      <div className="acara">
        <div className="bg-acara">
          <div className="container4" data-aos="fade-up">
            <h1>Rangkaian Acara</h1>
              <div className="acara-item">
                <h2>Akad Nikah</h2>
                <p>Sabtu, 20 September 2025</p>
                <p>Pukul 09.00 WIB</p>
              </div>
              <div className="acara-item">
                <h2>Resepsi</h2>
                <p>Sabtu, 20 September 2025</p>
                <p>Pukul 12.00 WIB</p>
              </div>
              <div className="acara-item">
                <img src={Home} alt="home" className="iconHome" />
                <p>Rumah Mempelai Wanita</p>
                <p>Jl. Bojong Keji, Rt 05/10, Bogor</p>
              </div>
              <button>
                <a
                  href="https://maps.app.goo.gl/gEJnAvN1uovBGu2E6"
                  target="_blank"
                >
                  Buka Lokasi
                </a>
              </button>
          </div>
        </div>
      </div>
      {/* <!-- CERITA CINTA --> */}
      <div className="progress" id="cerita">
        {/* <!-- JUDUL --> */}
        <div
          className="container-cerita"
          data-aos="fade-up"
        
        >
          <div class="judul-undangan">
            <h1>Cerita Cinta</h1>
            <p>
              Banyak cerita yang kami lalui sehingga akhirnya kami bisa bersatu,
              cerita yang akan kami kenang selalu, dan cerita itu kami bagi
              untuk anda.
            </p>
          </div>

          <section class="timeline">
            <ul>
              <li>
                <div>
                  <p>Pertama kali jumpa</p>
                  <span>
                    <time>Kamis 12 Oktober 2019</time> At vero eos et accusamus
                    et iusto odio dignissimos ducimus qui blanditiis praesentium
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <p>Pertama kali jumpa</p>
                  <span>
                    <time>Kamis 12 Oktober 2019</time> At vero eos et accusamus
                    et iusto odio dignissimos ducimus qui blanditiis praesentium
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <p>Pertama kali jumpa</p>
                  <span>
                    <time>Kamis 12 Oktober 2019</time> At vero eos et accusamus
                    et iusto odio dignissimos ducimus qui blanditiis praesentium
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <p>Pertama kali jumpa</p>
                  <span>
                    <time>Kamis 12 Oktober 2019</time> At vero eos et accusamus
                    et iusto odio dignissimos ducimus qui blanditiis praesentium
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
      {/* Galery */}
      <div className="galery">
        <div className="bg-galery">
          <div className="container5" data-aos="fade-up">
            <h1>Galeri</h1>
            <p>
              "Cinta bukan tentang menemukan seseorang untuk hidup bersama, tapi
              tentang menemukan seseorang yang tak bisa kamu hidup tanpanya."
            </p>
            <Carousel images={foto} autoPlayInterval={4000} />
          </div>
        </div>
      </div>
      {/* Wedding Gift */}
      <div className="gift">
        <div className="bg-gift">
          <div className="container6" data-aos="fade-up">
            <h1>Wedding Gift</h1>
            <p>
              "Hadiah terbaik adalah kehadiranmu di hari bahagia kami. Namun
              jika ingin memberikan hadiah, kami menerima dengan senang hati."
            </p>
            <div className="icon-bank" data-aos="fade-up" data-aos-delay="300">
              <img src={Mandiri} alt="Mandiri" />
              <div className="rekening">
                <h3>Ading</h3>
                <h3>123-456-7890</h3>
              </div>
            </div>
            <div className="icon-bank" data-aos="fade-up" data-aos-delay="600">
              <img src={Bca} alt="BCA" />
              <div className="rekening">
                <h3>Siti Aisyah</h3>
                <h3>098-765-4321</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* penutup */}
      <div className="penutup">
        <div className="bg-penutup">
          <div className="container7" data-aos="fade-up">
            <h1>Terima Kasih</h1>
            <p>
              Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
              kepada kami.
            </p>
            <p>Atas kehadiran dan doa restunya kami ucapkan terima kasih.</p>
            <p>Kami yang berbahagia</p>
            <h2>Ading & Aisyah</h2>
            <div className="watermark">
              <a href="https://www.instagram.com/apiww.izz/">
                Undangan Digital by Rafi Mauludi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
