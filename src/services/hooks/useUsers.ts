import { format } from "date-fns";
import { useQuery } from "react-query";
import { api } from "../api";

export type User = {
    id: string;
    email: string;
    createdAt: string;
}

export async function getUsers() {
    const { data } = await api.get('users');
    
    const users = data.users.map((user: User) => {
      return {
        ...user,
        createdAt: format(new Date(user.createdAt), 'dd/MM/yyyy')
      }
    });

    return users;
}

export function useUsers() {
    return useQuery('users', getUsers);
}
