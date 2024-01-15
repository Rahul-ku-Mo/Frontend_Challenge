import { User } from "../types";

export const joinedTag = (user: User) => user.name.split(' ').map(part => part[0]).join('')