import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib/core';
import * as rename_s3 from 'aws-cdk-lib/aws-s3';
import {Bucket} from 'aws-cdk-lib/aws-s3';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const badBucket = new s3.Bucket(this, 's3-bucket-bad')

    const AnotherGoodBucket = new s3.Bucket(this, 's3-bucket', {
      enforceSSL: true
    })
    const badBucket2 = new s3.Bucket(this, 's3-bucket-bad', {
      enforceSSL: false
     })
    const badBucketRenamed = new rename_s3.Bucket(this, 's3-bucket-bad')
    const AnotherGoodBucketRenamed = new rename_s3.Bucket(this, 's3-bucket', {
      enforceSSL: true
    })
    const badBucket2Renamed = new rename_s3.Bucket(this, 's3-bucket-bad', {
      enforceSSL: false
     })

     const badBucketDirect = new Bucket(this, 's3-bucket-bad')
     const AnotherGoodBucketDirect = new Bucket(this, 's3-bucket', {
       enforceSSL: true
     })
     const badBucket2Direct = new Bucket(this, 's3-bucket-bad', {
       enforceSSL: false
      })
  }
}
