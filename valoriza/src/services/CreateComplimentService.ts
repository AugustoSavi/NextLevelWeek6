import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { hash } from "bcryptjs";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
}

class CreateComplimentService {
  async execute({ user_sender, user_receiver, tag_id, message }: IComplimentRequest) {
    const complimentRepository = getCustomRepository(ComplimentsRepositories);
    const userRepository = getCustomRepository(UsersRepositories);

    const userReceiverExists = await userRepository.findOne(user_receiver);

    if(user_sender === user_receiver){
      throw new Error("Incorrect user receiver");
    }

    if (!userReceiverExists) {
      throw new Error("User receiver doesnt exists");
    }

    const compliment = complimentRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      message
    });
    
    await complimentRepository.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };