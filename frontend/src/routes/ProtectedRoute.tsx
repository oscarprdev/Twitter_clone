import { ReactNode } from 'react';
import { navigate } from 'wouter/use-location';

interface ProtectedRouteProps {
	userId: string;
	children: ReactNode;
}

const ProtectedRoute = ({ userId, children }: ProtectedRouteProps) => {
	if (!userId) {
		navigate('/');
	}

	return { children };
};

export default ProtectedRoute;
