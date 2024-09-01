import Header from "@/components/client/Header";
import "../styles/app.css";
import KeyVisual from "@/components/client/sections/KeyVisual";
import Trouble from "@/components/client/sections/Trouble";
import About from "@/components/client/sections/About";
import Apps from "@/components/client/sections/Apps";
import Footer from "@/components/client/Footer";
import FootLineAt from "@/components/client/FootLineAt";
import MoveTop from "@/components/client/MoveTop";

export default function Home() {
    return (
        <main>
            <Header />
            <div className="sections">
                <KeyVisual />
                <Trouble/>
                <About />
                <Apps/>
                <MoveTop/>
            </div>
            <Footer/>
            <FootLineAt/>
        </main>
    );
}
