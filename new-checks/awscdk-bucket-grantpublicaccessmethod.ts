import * as cdk from 'aws-cdk-lib/core';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as rename_s3  from 'aws-cdk-lib/aws-s3';
import {Bucket} from 'aws-cdk-lib/aws-s3';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const publicBucket1 = new s3.Bucket(this, 'bucket')
    console.log('something unrelated')
    publicBucket1.grantPublicAccess()

    const publicBucket2 = new s3.Bucket(this, 'bucket')
    publicBucket2.grantPublicAccess()

    const nonPublicBucketRenamed = new rename_s3.Bucket(this, 'bucket')

    const publicBucket1Rename = new rename_s3.Bucket(this, 'bucket')
    console.log('something unrelated')
    publicBucket1Rename.grantPublicAccess()

    const publicBucket2Rename = new rename_s3.Bucket(this, 'bucket')
    publicBucket2Rename.grantPublicAccess()

    const nonPublicBucketRename = new rename_s3.Bucket(this, 'bucket')

    const publicBucket1Direct = new Bucket(this, 'bucket')
    console.log('something unrelated')
    publicBucket1Direct.grantPublicAccess()

    const publicBucket2Direct = new Bucket(this, 'bucket')
    publicBucket2Direct.grantPublicAccess()
    const nonPublicBucketDirect = new Bucket(this, 'bucket')
  }
}
