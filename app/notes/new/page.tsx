import createNote from '../../actions/notes'


export default function NewNotePage() {
    return (
        <main>
            <header>
                <h1>Create a note</h1>
            </header>

            <form action={createNote}>
                <div>
                    <label htmlFor="content">content:</label>
                    <input type="text" id="content" name="content" required />
                </div>
                <div>
                    <label htmlFor="important">important:</label>
                    <input type="checkbox" id="important" name="important" />
                </div>
                <button type="submit">create</button>
            </form>
        </main>
    )
}
