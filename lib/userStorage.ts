import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = '@app:users';
const CURRENT_USER_KEY = '@app:currentUser';

export type Usuario = {
  nome: string;
  cpf: string;
  senha: string;
  idade: string;
  curso: string;
  cep: string;
  rua: string;
  cidade: string;
  estado: string;
};

export async function listarUsuarios(): Promise<Usuario[]> {
  const raw = await AsyncStorage.getItem(USERS_KEY);
  return raw ? (JSON.parse(raw) as Usuario[]) : [];
}

export async function salvarUsuario(usuario: Usuario): Promise<void> {
  const usuarios = await listarUsuarios();
  const semDuplicado = usuarios.filter((u) => u.cpf !== usuario.cpf);
  semDuplicado.push(usuario);
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(semDuplicado));
}

export async function buscarUsuario(
  cpf: string,
  senha: string,
): Promise<Usuario | null> {
  const usuarios = await listarUsuarios();
  return usuarios.find((u) => u.cpf === cpf && u.senha === senha) ?? null;
}

export async function definirUsuarioAtual(usuario: Usuario): Promise<void> {
  await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(usuario));
}

export async function obterUsuarioAtual(): Promise<Usuario | null> {
  const raw = await AsyncStorage.getItem(CURRENT_USER_KEY);
  return raw ? (JSON.parse(raw) as Usuario) : null;
}

export async function limparUsuarioAtual(): Promise<void> {
  await AsyncStorage.removeItem(CURRENT_USER_KEY);
}
