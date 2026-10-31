'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { addNote, toggleImportance } from '../../services/notes'


export default async function createNote(formData: FormData) {
    const content = formData.get('content') as string
    const important = formData.get('important') === 'on'

    addNote(content, important)
    revalidatePath("/notes")
    redirect('/notes')
}


export async function toggleNoteImportance(formData: FormData) {
    const id = Number(formData.get('id'))

    toggleImportance(id)
    revalidatePath(`/notes/${id}`)
    revalidatePath("/notes")
}
