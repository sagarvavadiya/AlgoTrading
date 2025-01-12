import { createEntry, readEntries } from "@/utils/manageAlgo/manageActiveTrade";

export const dynamic = 'force-static'

export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  const obj = {
    "uniqId": "1",
    "isShortSell": false,
    "entryPrice": 99017.04,
    "quantity": 1,
    "stopLoss": 99016.941,
    "targetPrice": 100007.2104,
    "loss": 3.959999999991851
  }
  createEntry(obj, 'activeTrade');
  let allRec = readEntries('activeTrade')
  const data = 'await res.json()'

  return Response.json({ allRec })
}
