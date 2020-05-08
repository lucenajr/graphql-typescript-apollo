import { getRepository } from 'typeorm';
import User from '../models/User';

class CreateUserService {
  public async execute(): Promise<void> {
    const userRepository = getRepository(User);
    userRepository.find();
  }
}

export default CreateUserService;
