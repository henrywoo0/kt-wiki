import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TokenModule } from '../token/token.module';
import UserRepository from './repository/user.repository';
import { UserService } from './user.service';

const mockUserRepository = () => ({
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  softDelete: jest.fn(),
  findById: jest.fn(),
});

describe('UserService', () => {
  let userService: UserService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        TokenModule,
      ],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserRepository),
          useValue: mockUserRepository(),
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('user 회원가입 성공', async () => {
    const mockedUser = {
      id: 'test1234',
      password: 'test0987',
      name: '우준성',
    };

    const result = await userService.signUp(mockedUser);

    expect(userRepository.findById).toHaveBeenCalledWith('test1234');
    expect(result.id).toEqual(mockedUser.id);
  });
});
