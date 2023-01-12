import * as s3 from '@aws-cdk-lib/aws-s3';
import * as cdk from '@aws-cdk-lib/core';
import * as renamed_s3 from '@aws-cdk-lib/aws-s3';
import {Bucket, BucketEncryption} from '@aws-cdk-lib/aws-s3';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const goodBucket = new s3.Bucket(this, 's3-bucket', {
      encryption: s3.BucketEncryption.S3_MANAGED
    })

    const badBucket = new s3.Bucket(this, 's3-bucket-bad')

    const AnotherGoodBucket = new s3.Bucket(this, 's3-bucket', {
      encryption: s3.BucketEncryption.KMS_MANAGED
    })

    const badBucket2 = new s3.Bucket(this, 's3-bucket-bad',{
      encryption: s3.BucketEncryption.UNMANAGED
     })

    const goodBucketRenamed = new renamed_s3.Bucket(this, 's3-bucket', {
      encryption: renamed_s3.BucketEncryption.S3_MANAGED
    })
 
    const badBucketRenamed = new renamed_s3.Bucket(this, 's3-bucket-bad')

    const AnotherGoodBucketRenamed = new renamed_s3.Bucket(this, 's3-bucket', {
      encryption: renamed_s3.BucketEncryption.KMS_MANAGED
    })
    const badBucket2Renamed = new renamed_s3.Bucket(this, 's3-bucket-bad',{
      encryption: renamed_s3.BucketEncryption.UNMANAGED
     })
    const goodBucketDirect = new Bucket(this, 's3-bucket', {
      encryption: BucketEncryption.S3_MANAGED
    })
    
    const badBucketDirect = new Bucket(this, 's3-bucket-bad')
    const AnotherGoodBucketDirect = new Bucket(this, 's3-bucket', {
      encryption: BucketEncryption.KMS_MANAGED
    })
    const badBucket2Direct = new Bucket(this, 's3-bucket-bad',{
      encryption: BucketEncryption.UNMANAGED
     })
  }
}
