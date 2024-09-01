import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect } from '@nestjs/common'

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return `This action adds a new cat`
  }

  /**
   * @description The route will match abcd, ab_cd, abecd and so on
   * @note A wildcard in the middle of the route is only supported by express
   */
  @Get('ab*cd')
  // @Redirect('https://nestjs.com', 301)
  async findAll(): Promise<any[]> {
    return []
  }

  /**
   * @note all return will be overrided
   */
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs() {
    return
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id)
    return `This action returns a #${params.id} cat`
  }
}
