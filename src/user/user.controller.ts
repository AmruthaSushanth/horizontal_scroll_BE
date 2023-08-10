import { Body, Controller, Post, Get, Res, Param, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/model/user.schema';

@Controller('/user')
export class UserController {

    constructor(private readonly userServerice: UserService) { }

    @Post('/signup')
    async create(@Res() response,@Body() user: User) {
        const postUser =  await this.userServerice.createUser(user);
        return response.status(HttpStatus.CREATED).json({
            message:"User added succesfully"
        })
    }

    @Get('/fetchUsers')
    async fetchUsers(@Res() response){
        const usersList = await this.userServerice.fetchUserList();
        return response.status(HttpStatus.OK).json({
            usersList:usersList,
            message:"Users list fetched successfully"
        })
    }

    @Get('/fetchUser/:id')
    async fetchUserById(@Res() response,@Param('id')_id){
        const userById = await this.userServerice.fetchUserById(_id);
        return  response.status(HttpStatus.OK).json({
            userById:userById,
            message:"Fetch user successfully"
        })
    }

}
