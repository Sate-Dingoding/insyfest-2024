export interface CreateUserModel {
  email: string;
  username: string;
  password: string;
  fullName: string;
}

export interface LoginUserModel {
  email: string;
  password: string;
}

export interface NotesModel {
  notes: string;
}