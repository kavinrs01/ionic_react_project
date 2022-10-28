export type AddNoteAction = {
    type: "ADD_NOTE";
    payload: string;
  };
  
  export const addNote = (note: string): AddNoteAction => ({
    type: "ADD_NOTE",
    payload: note
  });
  

  export type UpdateNoteAction = {
    type: "UPDATE_NOTE";
    payload: string;
  };
  
  export const updateNote = (note: string): UpdateNoteAction => ({
    type: "UPDATE_NOTE",
    payload: note
  });

  
  export type UpdateContactAction = {
    type: "UPDATE_CONTACT";
    payload: string;
  };
  
  export const updateContact = (note: string): UpdateNoteAction => ({
    type: "UPDATE_CONTACT",
    payload: note
  });
  