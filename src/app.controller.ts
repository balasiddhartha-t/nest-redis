import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHelloRedis(): string {
    return this.appService.setRedisHello();
  }


  @Get('/redis')
  async getDataFromRedis(){
    let sid = await this.appService.getRedisHello();
    console.log(sid);
    return sid;
  }
}
