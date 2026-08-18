import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    const response = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];

    console.log('[GET /users] Returning users list:', response);
    return response;
  }

  @Get(':id')
  public getUserByIdWithQueryParams(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('name') name?: string,
    @Query('age') age?: string,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,
  ) {
    const response =
      'Your user id is: ' +
      id +
      ', your name is: ' +
      name +
      ', and your age is: ' +
      age +
      '. Limit: ' +
      limit +
      ', Page: ' +
      page;

    console.log(typeof id, typeof name, typeof age, typeof limit, typeof page);
    console.log('[GET /users/:id] Params and query:', {
      id,
      name,
      age,
      limit,
      page,
    });
    return response;
  }

  @Get(':id/:optional')
  public getUserByIdWithOptional(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Param('optional') optional: string,
  ) {
    const response =
      'Your user id is: ' + id + ' and your optional parameter is: ' + optional;
    console.log(typeof id, typeof optional);
    console.log('[GET /users/:id/:optional] Params:', { id, optional });
    return response;
  }

  // @Post()
  // public createUsers(
  //   @Body() body: Record<string, unknown>,
  //   @Headers() headers: Record<string, string | string[] | undefined>,
  //   @Ip() ip: string,
  // ) {
  //   const response =
  //     'This is body: ' +
  //     JSON.stringify(body) +
  //     ' and these are headers: ' +
  //     JSON.stringify(headers) +
  //     ' and this is the IP: ' +
  //     ip;

  //   console.log('[POST /users] Body, headers and IP:', { body, headers, ip });
  //   return response;
  // }

  // @Put(':id')
  // public updateUser(
  //   @Param() params: Record<string, string>,
  //   @Param('id') id: string,
  //   @Query('notify') notify?: string,
  //   @Body() body?: Record<string, unknown>,
  //   @Body('name') name?: string,
  // ) {
  //   const response = {
  //     action: 'put',
  //     message: 'User replaced successfully',
  //     params,
  //     id,
  //     notify,
  //     body,
  //     name,
  //   };

  //   console.log('[PUT /users/:id] Full params/query/body and specific key:', {
  //     params,
  //     id,
  //     notify,
  //     body,
  //     name,
  //   });
  //   return response;
  // }

  // @Patch(':id')
  // public patchUser(
  //   @Param() params: Record<string, string>,
  //   @Param('id') id: string,
  //   @Query() query: Record<string, string>,
  //   @Query('track') track?: string,
  //   @Body() body?: Record<string, unknown>,
  //   @Body('email') email?: string,
  // ) {
  //   const response = {
  //     action: 'patch',
  //     message: 'User partially updated',
  //     params,
  //     id,
  //     query,
  //     track,
  //     body,
  //     email,
  //   };

  //   console.log('[PATCH /users/:id] Full params/query/body and specific key:', {
  //     params,
  //     id,
  //     query,
  //     track,
  //     body,
  //     email,
  //   });
  //   return response;
  // }

  // @Delete(':id')
  // public deleteUser(
  //   @Param() params: Record<string, string>,
  //   @Param('id') id: string,
  //   @Query() query: Record<string, string>,
  //   @Query('reason') reason?: string,
  // ) {
  //   const response = {
  //     action: 'delete',
  //     message: 'User deleted',
  //     params,
  //     id,
  //     query,
  //     reason,
  //   };

  //   console.log('[DELETE /users/:id] Full params/query and specific key:', {
  //     params,
  //     id,
  //     query,
  //     reason,
  //   });
  //   return response;
  // }
}
