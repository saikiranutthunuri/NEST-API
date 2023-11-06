import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  

@Get('/accessentries')
async getHVACData(): Promise<any> {
  return {
    "_id": {
      "$oid": "65448923dda12144065c4741"
    },
    "date": "3/11/2023",
    "did": "JM033456901",
    "parentDid": "bafybmih4ucl2tsod4iqtkx6ww3x7bv3mfmq5jrf4cickc4zilka2fzyowh",
    "inTime": "10:13 AM",
    "outTime": "11:13 AM",
    "duration": 1,
    "noOfBreaks": 5,
    "accessGateId": "xyz",
    "createTimeStamp": null,
    "lastEntry": "bafybmih4ucl2tsod4iqtkx6ww3x7bv3mfmq5jrf4cickc4zilka2fzyowe",
    "lastExit": "bafybmih4ucl2tsod4iqtkx6ww3x7bv3mfmq5jrf4cickc4zilka2fzyowb",
    "avgTime": "10",
    "exitHighest": "bafybmih4ucl2tsod4iqtkx6ww3x7bv3mfmq5jrf4cickc4zilka2fzyowd",
    "exitLowest": "bafybmih4ucl2tsod4iqtkx6ww3x7bv3mfmq5jrf4cickc4zilka2fzyowe",
    "__v": 0
  };
}
@Get('/ocupancy')
async  getdata(): Promise<any> {
    return {
      "no.of.occupants": 5,
      "lastentry": "bafybmih4ucl2tsod4iqtkx6ww3x7bv3mfmq5jrf4cickc4zilka2fzyowc",
      "lastexit": "bafybmih4ucl2tsod4iqtkx6ww3x7bv3mfmq5jrf4cickc4zilka2fzyoef"
      ,
      "avgtime":  10 ,
    }
  }

@Get('/exit')
 async getexit(): Promise<any> {
    return {
      "exit"  : {
        highest:"bafybmih4ucl2tsod4iqtkx6ww3x7bv3mfmq5jrf4cickc4zilka2fzyowc",
        lowest:" bafybmih4ucl2tsod4iqtkx6ww3x7bv3mfmq5jrf4cickc4zilka2fzyowx",
      }
    }
  }

@Get('/break')
 async getbreak(): Promise<any> {
    return {
      "break": {
        peaktime:" 7-8 AM",
        offtime:" 8-9 AM",
        nofpeople:" 5",
        popular_zone :" ground floor",
      }
    }
  }

@Get('/HVAC/general')
 async HVACG(): Promise<any> {
    return {      

  "general": {
    "temperature": "29",
    "energyused": "48",
    "runtim": "13"
  },
 
  "outsideconditions": {
    "temperature": "39",
    "humidity": "56"
  }

    }
  }

@Get('/HVAC/AQI')
 async HVACAQI(): Promise<any> {
    return {
"airquality": {
    "pm2": "130"
  },
    }
  }

@Get('/lighting/general')
 async lightingg(): Promise<any> {
    return {
      
  "_id": {
    "$oid": "65436c67c768f45caa10ff3a"
  },
  "general": {
    "luminosity": "32",
    "energyused": "30",
    "runtime": "6"
  }

    }
  }



}
