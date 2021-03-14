import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café']),
    new User('Sepiol', 'Sam', 'fsociety@fsociety.us', 'water',  ['OSINT', 'Hacking'])
  ];
  userSubject = new Subject<User[]>();

  emitUsers(): void {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User): void{
    this.users.push(user);
    this.emitUsers();
  }
}
