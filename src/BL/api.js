import axios from 'axios';

class UserService {
    async getUserFromServer (data) {
        try{
            let user = await axios.post('https://private-052d6-testapi4528.apiary-mock.com/authenticate',data);
            return user;

        }catch(err){
            console.log(err);
        }
    }

    async getUserProjectsFromServer (data) {
        try{
            let userProjects = await axios.get('https://private-052d6-testapi4528.apiary-mock.com/info',data);
            return userProjects.data;

        }catch(err){
            console.log(err);
        }
    }
}

export default UserService;