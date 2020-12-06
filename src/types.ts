import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";
import { createReactionLoader } from "./utils/createReactionLoader";
import { createUserLoader } from "./utils/createUserLoader";

export type MyContext = {
  req: Request & {
    session: Session & Partial<SessionData> & { userId?: number };
  };
  redis: Redis;
  res: Response;
  userLoader: ReturnType<typeof createUserLoader>;
  reactionLoader: ReturnType<typeof createReactionLoader>;
};
