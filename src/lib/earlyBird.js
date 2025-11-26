export function isEarlyBird() {
    const cutoff = new Date(2025,8,6);
    return new Date() < cutoff;
}