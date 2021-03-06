// app/friend.service.ts

// Step 1. Import Injectable Decorator
import { Injectable } from '@angular/core';

// Step 2. Use @Injectable() to declare the FriendSerivce class as an Injectable
@Injectable()

/**
    Step 3A. - Create and export FriendsService  Class { }
    3B: create friends object and declare it to be an Array of any values/
    3C: Add friends object to the constructor function
    3D: create getFriends() function to call all friends values.
**/
// 3A
export class FriendService {

    // 3B
    friends:Array<any>;

    // 3C
    constructor() {
        this.friends = [
            { age: 40, name: 'Jordan Houston' },
    { age: 23, name: 'Josh Beh' },
    { age: 23, name: 'Joseph Canina' },
    { age: 24, name: 'Alexandra Wilkins' },
    { age: 22, name: 'Kiersten Costanzo' },
    { age: 23, name: 'Ku Sherwood' },
    { age: 25, name: 'Arta Halili' },
    { age: 21, name: 'Patrick Cooney' },
    { age: 21, name: 'Z.A. Perr' },
    { age: 18, name: 'Tyler Mulligan' },
    { age: 26, name: 'Dennis Dempsey' },
    { age: 32, name: 'Francis Yeager' },
    { age: 23, name: 'Phil Belardi' },
    { age: 25, name: 'Bryan Roman' }
        ];
    }

    // 3D
    getFriends() {
        return this.friends;
    }

}
