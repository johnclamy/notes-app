import { notFound } from 'next/navigation'
import { getNoteById } from '@/services/notes'


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
        {note.content} {note.important && <strong>(important)</strong>}
      </article>
    </main>
  );
}


export default NotePage;
