export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row md:px-8">
                <p className="text-sm text-muted-foreground">
                    SLC-app
                </p>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/RicardoRb06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}