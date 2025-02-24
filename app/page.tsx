import Introduction from "@/components/homepage/Introduction";
import Script from "next/script";

export default function Home() {
    return (
        <main className="dark:bg-[#1F1F1F] min-h-screen flex flex-col items-center justify-center">
            <Introduction />

            {/* Load the model-viewer script */}
            <Script
                async
                strategy="afterInteractive"
                type="module"
                src="https://unpkg.com/@google/model-viewer@^2.1.1/dist/model-viewer.min.js"
            />

            <div className="min-h-screen min-w-full flex items-center justify-center">
                <model-viewer
                    src="/greeting_waving_110_frames_loop.glb"
                    shadow-intensity="1"
                    auto-rotate="true"
                    camera-controls="true"
                    touch-action="pan-y"
                    ar="true"
                    ar-modes="webxr scene-viewer quick-look"
                    poster="/poster.png"
                    class="modelViewer"
                    style={{ width: "320px", height: "500px" }} // <--- If you need style
                >
                    <button slot="ar-button" className="bg-red-500 text-white p-2 rounded-md">
                        View in your space
                    </button>
                </model-viewer>
            </div>
        </main>
    );
}
