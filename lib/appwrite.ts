import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('YOUR_PROJECT_ID'); // Your project ID

export const account = new Account(client);
export const databases = new Databases(client);

export { client };

