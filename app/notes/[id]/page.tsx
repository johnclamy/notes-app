import { notFound } from 'next/navigation'
import { getNoteById } from '@/services/notes'
import { toggleNoteImportance } from '@/app/actions/notes'


type NotePageProps = {
    params: Promise<{ id: string }>;
}


async function NotePage({ params }: NotePageProps) {
    const { id } = await params
    const note = getNoteById(Number(id))

    if (!note) {
        notFound()
    }

    return (
        <main>
            <header>
                <h1>Note {note.id}</h1>
            </header>
            <article>
                <p>{note.content}</p>
                <p>{note.important ? 'Important' : 'Not important'}</p>
                <form action={toggleNoteImportance}>
                    <input type='hidden' name='id' value={note.id} />
                    <button type='submit'>
                        {note.important ? 'Mark as not important' : 'Mark as important'}
                    </button>
                </form>
            </article>
        </main>
    )
}


export default NotePage;
