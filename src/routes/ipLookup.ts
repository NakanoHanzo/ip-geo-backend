import { Router, Request, Response } from 'express';
import axios from 'axios';

const router = Router();

interface IpLookupRequestBody {
  ip: string;
}

const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const ipv6Regex = /^(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$/;

const isValidIP = (ip: string) => ipv4Regex.test(ip) || ipv6Regex.test(ip);

router.post('/lookup', async (req: Request<{}, {}, IpLookupRequestBody>, res: Response) => {
  const { ip } = req.body;
  if (!isValidIP(ip)) {
    return res.status(400).json({ error: 'Invalid IP address' });
  }
  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching IP information' });
  }
});

export default router;
