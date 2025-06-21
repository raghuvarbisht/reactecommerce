export function useAuth() {
    const isAuthenticated = true; // Simulate true/false for testing
    const user = { name: "John Doe", role: "user" }; // Add role if needed
    return { isAuthenticated, user };
  }