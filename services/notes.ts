const notes = [
    {
        id: 1,
        content: "next.js utilizes React Server Components",
        important: true
    },
    {
        id: 2,
        content: "next.js is built on top of React",
        important: true
    },
    {
        id: 3,
        content: "next.js supports both static and dynamic rendering",
        important: false
    }
]


let nextId = 4


export default function getNotes() {
    return notes
}


export function getNoteById(noteId: number) {
    return notes.find(note => note.id === noteId)
}


export function addNote(content: string, important: boolean) {
    notes.push({
        id: nextId++,
        content,
        important
    })
}


export function toggleImportance(noteId: number) {
    const note = notes.find(note => note.id === noteId)
    if (note) {
        note.important = !note.important
    }
}
