import jwt from "jsonwebtoken";
import env from "@/config/loadEnv";

enum TokenExpiredDuration {
  ACCESS_TOKEN_DURATION = "3h",
}

export const generateAccessToken = (
  payload: object,
  expiry: string = TokenExpiredDuration.ACCESS_TOKEN_DURATION,
) => {
  return jwt.sign(payload, env.SECRET_ACCESS_TOKEN, {
    expiresIn: expiry ?? TokenExpiredDuration.ACCESS_TOKEN_DURATION,
  });
};

export const validateAccessToken = (token: string) => {
  return jwt.verify(token, env.SECRET_ACCESS_TOKEN);
};

export function verifyAccessToken(token: string) {
  return jwt.verify(token, env.SECRET_ACCESS_TOKEN);
}
