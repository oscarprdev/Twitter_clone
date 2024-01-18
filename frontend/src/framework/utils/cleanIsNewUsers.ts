import { User } from '../../features/shared/domain/types/user';

export const cleanIsNewUsers = (users: User[]) => [...users.map((user) => ({ ...user, isNew: false }))];
