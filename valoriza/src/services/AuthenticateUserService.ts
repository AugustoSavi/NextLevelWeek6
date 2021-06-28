import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface IAuthenticateUserRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
 
    async execute({email, password}: IAuthenticateUserRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({email});

        if(!user){
            throw new Error("Email/Password incorrect");
        }
        
        const passwordMatch = await compare(password, user.password);
        
        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        //augustosavi
        const token = sign({
            email: user.email,
        },"a4a3703aaa21fce74633ebe1416044a1",{
            subject: user.id,
            expiresIn: "1d"
        });

        return token;

    }
}

export {AuthenticateUserService}