import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ok:awscdk-bucket-encryption
    const goodBucket = new s3.Bucket(this, 's3-bucket', {
      encryption: s3.BucketEncryption.S3_MANAGED
    })
    // ruleid:awscdk-bucket-encryption
    const badBucket = new s3.Bucket(this, 's3-bucket-bad')
    // ok:awscdk-bucket-encryption
    const AnotherGoodBucket = new s3.Bucket(this, 's3-bucket', {
      encryption: s3.BucketEncryption.KMS_MANAGED
    })
    // ruleid:awscdk-bucket-encryption
    const badBucket2 = new s3.Bucket(this, 's3-bucket-bad',{
      encryption: s3.BucketEncryption.UNMANAGED
     })
  }
}