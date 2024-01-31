import { Request, Response } from "express";
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  handler: (req: Request, res: Response) => {
    res.status(429).json({ error: "Too Many Requests" });
  },
});

export default limiter;
