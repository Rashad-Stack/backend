import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { User } from "@prisma/client";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("all")
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post("create")
  async createUser(@Body() userData: User): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Patch("update")
  async updateUser(@Body() userData: User): Promise<User> {
    return this.userService.updateUser(userData);
  }
}
