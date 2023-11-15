import jsonwebtoken from "jsonwebtoken"
const SECRET = process.env.JWT_SECRET || `secret`

interface payload {
    id: number
}

export function generateToken(payload: payload): string {
    return `Access Token`
}

export function verifyToken(token: string): payload {
    return { id: 1 }
}