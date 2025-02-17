    import conf from "../conf/conf";
    import { Client,Account,ID } from "appwrite";


    export class AuthService {
        client = new Client();
        account;

        constructor(){
            this.client.setEndpoint(conf.appwriteUrl);
            this.client.setProject(conf.appwriteProjectId);
            // this.client.setDatabase(conf.appwriteDatabaseId);
            // this.client.setCollection(conf.appwriteCollectionId);
            // this.client.setBucket(conf.appwriteBucketId);
            this.account = new Account(this.client);  
        }

        async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email, password, name);
            if(userAccount){
                //will call another function
                return this.login({email, password });
            }
            else{
                    return userAccount;
            }
            }
            
        catch (error) {
            throw error;
        }
        }

        async login({email, password}){
            // await this.account.deleteSessions();
            try {
                return await this.account.createEmailPasswordSession(email, password);
            } catch (error) {
                throw error;
            }
        }

        async getCurrentUser(){
            try {
                return await this.account.get();
            } catch (error) {
                console.log("Appwrite service :: getCurrentUser :: error", error);
            }
            return null;
        }
        async logout() {
            try {
                await this.account.deleteSessions();
                return true;  // Explicitly returning true if logout succeeds
            } catch (error) {  
                console.log("Appwrite service :: Logout :: error", error);
                return false;  // Return false in case of an error for better handling in the calling function
            }
        }
    }


    const authService = new AuthService();

    export default authService