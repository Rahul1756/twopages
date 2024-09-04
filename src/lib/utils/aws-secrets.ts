// lib/aws-secrets.ts
import AWS from 'aws-sdk';

const secretsManager = new AWS.SecretsManager({
  region: process.env.AWS_REGION // Ensure this is set in your environment variables
});

interface Secret {
  [key: string]: string;
}

export async function getSecretValue(secretName: string): Promise<Secret> {
  try {
    const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
    
    if ('SecretString' in data) {
      return JSON.parse(data.SecretString as string);
    }
    
    const buff = Buffer.from(data.SecretBinary as string, 'base64');
    return JSON.parse(buff.toString('ascii'));
  } catch (err) {
    console.error(`Error fetching secret ${secretName}:`, err);
    throw err;
  }
}
