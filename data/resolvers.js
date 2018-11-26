// class Friend {
//   constructor (id, { firstName, lastName, gender, age ,language, email , contacts}){
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.gender = gender;
//     this.language = language;
//     this.email = email;
//     this.age = age;
//     this.contacts = contacts;
//   }
// }
// const friendDatabase = {};
// --- el fo2 dh kona bnmla fel memory -------------------

const mongoose = require('mongoose');
const { Friends } = require('./dbConnectors');

const resolvers = {
    //   friend: ()=> {
    //     return {
    //       "id": 2941106,
    //       "firstName": "osama",
    //       "lastName": "alaa",
    //       "gender": "Male",
    //       "language": "Arabic",
    //       "emails": [{email: "me@me.com"}, {email: "osama@me.com"}]
    //
    //     }
    //
    // },
    Query: {
      getFriend: ({id}) =>{
        return new Friend(id , friendDatabase[id]);

      },

    },

    Mutation: {
      createFriend: (root , {input}) => {
        // let id = require('crypto').randomBytes(10).toString('hex'); // crypto de node function bta5od el id w t7wlo l random bytes , w b3den by7wlhole string
        // friendDatabase[id] = input;
        // return new Friend(id , input);
        const newFriend = new Friends ({
          firstName: input.firstName,
          lastName: input.lastName,
          language: input.language,
          gender: input.gender,
          age: input.age,
          email: input.email,
          contacts: input.contacts


        });

        newFriend.id = newFriend._id; // ---> dh hna byassing el id lel _id el mwgod fel database
// hna hwa el mafroud hyb3t lel database el friend el gded fa l mafroud ystna y4ofo f m7tagen el promise object
// bta5od resolve el hwa true tmam w bta5od el object el wdah
        return new Promise((resolve, object)=>{
          newFriend.save((err)=>{
            if(err) reject(err) // lw feh error reject el error
            else resolve(newFriend) // wtl3le el newFriend 
          })

        })

      },
    },





};

module.exports = resolvers;
