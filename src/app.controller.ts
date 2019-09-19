import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('data')
  getData(): { name: string } {
    return {
      name: 'Jose Zena'
    }
  }
  
  @Get('text-data')
  @Header('Content-Type', 'text/html')
  gettextData(): { name: string } {
    return {
      name: 'Jose Zena'
    }
  }
}
