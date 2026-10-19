import ContrastChecker from "./components/contrast-checker";

function App() {
    return (
        <main className="flex min-h-screen items-center justify-center p-5 md:p-10">
            <div className="w-full max-w-3xl">
                <header className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <p className="font-geist text-muted-foreground text-sm font-normal">
                            WCA 2.2 -
                        </p>
                        <p
                            className="font-geist text-muted-foreground text-sm uppercase
                            font-normal"
                        >
                            contraste
                        </p>
                    </div>
                    <h1 className="font-geist text-2xl text-foreground font-semibold">
                        Verificado de <br className="md:hidden" /> contraste WCAG
                    </h1>
                </header>
                <ContrastChecker />
            </div>
        </main>
    );
}

export default App;
