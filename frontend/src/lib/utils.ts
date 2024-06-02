export function getBackendURL() {
  return process.env.API_URL ?? "http://localhost:3001";
}
