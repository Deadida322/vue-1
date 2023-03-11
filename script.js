const app = new Vue({
    el: "#app",
    data: {
        note: {},
        editStatus: false,
        currentEdit: undefined,
        notes: [
            {
                title: "Глеб",
                description: "Лох",
            },
        ],
    },
    methods: {
        addNote() {
            if (this.note.title && this.note.description) {
                this.notes.push({ ...this.note });
                this.note = {};
            }
        },
        removeNote(key) {
            this.notes.splice(key, 1);
        },
        goEdit(note, key) {
            this.currentEdit = key;
            this.note = { ...note };
            this.editStatus = true;
        },
        saveNote() {
            this.notes.splice(this.currentEdit, 1, this.note);
            this.cancelEdit()
        },
        cancelEdit() {
            this.note = {};
            this.currentEdit = undefined
            this.editStatus = false
        }
    },
});
