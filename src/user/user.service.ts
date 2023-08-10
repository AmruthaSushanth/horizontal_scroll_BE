import { Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/model/user.schema';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async createUser(user: User) :Promise<User>{
        return await new this.userModel(user).save()
    }

    async fetchUserList(){
        return this.userModel.find();
    }

    async fetchUserById(_id:string):Promise<string>{
        return this.userModel.findById(_id);
    }
}
