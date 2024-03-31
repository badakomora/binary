import { ascending, max, min, timeFormat } from "d3";
import { OHLCTick, Tick } from "../../../../../recoil/Atom";

type OHLCType = {
  time: Date;
  bid: number;
};
export const convertToOHLC = (data: Tick[] = [], timeSegmentMs: any) => {
  data = [...data].sort((a, b) => ascending(a.ts, b.ts));

  const result: OHLCTick[] = [];

  const timeformat = timeFormat("%Y-%m-%d %I:%M:%S");

  data = data.map((d: Tick & { date?: string }) => {
    const date = timeformat(
      new Date(Math.floor(d.ts / timeSegmentMs) * timeSegmentMs)
    );

    return {
      ...d,
      date,
    };
  });

  const allDates = [...new Set(data.map((d: any) => d.date))];

  allDates.forEach((d) => {
    const tempObject: any = {};

    const filteredData = data.filter((e: any) => e.date === d);

    tempObject.date = d;
    tempObject.open = filteredData[0].bid;
    tempObject.high = max(filteredData, (e: any) => e.bid);
    tempObject.low = min(filteredData, (e: any) => e.bid);
    tempObject.close = filteredData[filteredData.length - 1].bid;

    result.push(tempObject);
  });

  return result;
};
