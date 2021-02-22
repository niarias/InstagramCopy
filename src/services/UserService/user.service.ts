import { Injectable } from '@angular/core';

import { User } from 'src/data/User';
import { Dictionary } from 'src/data/Helpers/Dictionary';
import { Randomizer } from 'src/data/Helpers/Randomizer';
import { Shuffler } from 'src/data/Helpers/Shuffler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  mainUser: User;
  usersDictionary = new Dictionary<User>();

  constructor() {
    this.initialiseMainUser();
    this.initialiseUsers();
  }

  initialiseMainUser() {
    this.mainUser = new User(
      'Hazel Swanson',
      'assets/images/users/main-user.png',
      ''
    );
  }

  initialiseUsers() {
    const user1 = new User(
      'Maisy Ware',
      'assets/images/users/user 1.png',
      ''
    );
    this.usersDictionary.Add(user1.id, user1);

    const user2 = new User(
      'Tara Lambert',
      'assets/images/users/user 2.png',
      ''
    );
    this.usersDictionary.Add(user2.id, user2);

    const user3 = new User(
      'Justin Barrett',
      'assets/images/users/user 3.png',
      ''
    );
    this.usersDictionary.Add(user3.id, user3);


  }

  getUser(userId: string): User {
    return this.usersDictionary.Item(userId);
  }

  getUsers(): User[] {
    return Shuffler.shuffle(this.usersDictionary.Values().slice());
  }

  getRandomUsers(userCount: number): User[] {
    return Shuffler.shuffle(this.usersDictionary.Values().slice()).splice(
      0,
      userCount
    );
  }

  getRandomUser(): User {
    return this.usersDictionary.Values().slice()[
      Randomizer.randomIntFromInterval(0, 9)
    ];
  }
}
