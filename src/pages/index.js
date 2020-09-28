import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Image from "../components/Image"

function IndexPage() {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Home"
            />

            <Image imageName="wave.jpg" className="mb-10" />
            <p className="text-justify">
                The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, "Under the Wave off Kanagawa"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833[1] in the late Edo period as the first print in Hokusai's series Thirty-six Views of Mount Fuji. It is Hokusai's most famous work and is often considered the most recognizable work of Japanese art in the world.
                The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background. Sometimes assumed to be a tsunami, the wave is more likely to be a large rogue wave.[2] As with the other prints in the series, it depicts the area and activities around Mount Fuji under varying conditions. Throughout the series are dramatic uses of Berlin blue pigment.
            </p>

        </Layout>
    );
}

export default IndexPage;
