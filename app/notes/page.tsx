import getNotes from '../../services/notes'


export default function NotesPage() {
    return (
        <main>
            <header>
                <h1>Notes</h1>
            </header>            

            <article>
                {getNotes().map(note => (
                    <section key={note.id}>
                        {note.content} {note.important && <strong>(important)</strong>}
                    </section>
                ))}
            </article>
        </main>
    )
}


