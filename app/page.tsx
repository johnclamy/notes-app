const HomePage = () => {
    console.log('hello next.js')
    return (
        <main>
            <header>
                <h1>notes app</h1>
                <p>
                    An example app for {" "}
                    <a href="https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs">
                        <i>Full Stack Open Next.js</i>
                    </a>
                </p>
            </header>

            <section>
                <p>
                    See {" "}
                    <a href="https://github.com/fullstack-hy2020/nextjs-notes">
                        https://github.com/fullstack-hy2020/nextjs-notes
                    </a>{" "}
                    for the source code.
                </p>
            </section>
        </main>
    )
}


export default HomePage
