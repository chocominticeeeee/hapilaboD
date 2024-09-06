"use client";
import Header from "@/components/client/Header";
import "../styles/app.css";
import KeyVisual from "@/components/client/sections/KeyVisual";
import Trouble from "@/components/client/sections/Trouble";
import About from "@/components/client/sections/About";
import Apps from "@/components/client/sections/Apps";
import Flow from "@/components/client/sections/Flow";
import Footer from "@/components/client/Footer";
import FootLineAt from "@/components/client/FootLineAt";
import MoveTop from "@/components/client/MoveTop";
import Modal from "@/components/client/Modal";
import Terms from "@/components/server/Terms";
import { useState } from "react";

export default function Home() {
    const [modalContent, setModalContent] = useState(<Terms />);
    return (
        <main>
            <Header />
            <div className="sections">
                <KeyVisual />
                <Trouble />
                <About />
                <Apps />
                <Flow />
                <MoveTop />
            </div>
            <Footer setModalContent={setModalContent} />
            <FootLineAt />
            <Modal content={modalContent} />
        </main>
    );
}
