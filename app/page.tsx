import NavBar from "@/components/NavBar";

export default function AboutPage() {
    return (
        <main className="dark:bg-[#1F1F1F] min-h-screen flex flex-col items-center justify-center p-10">
            <NavBar /> {/* Include the navigation bar */}
            <div className="max-w-3xl text-center">
                <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Hi, I'm Julius Chan! I'm a software developer passionate about building innovative
                    solutions with modern technologies. I love working with Next.js, React, and other web development tools.
                </p>

                <p className="text-lg text-gray-300 mt-4">
                    In my free time, I enjoy exploring AI advancements, contributing to open-source projects,
                    and continuously learning new programming concepts. Feel free to connect with me!
                </p>

                <div className="mt-6">
                    <a
                        href="https://github.com/yourgithubusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        GitHub
                    </a>{" "}
                    |{" "}
                    <a
                        href="https://linkedin.com/in/yourlinkedinusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </main>
    );
}
