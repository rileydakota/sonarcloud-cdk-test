import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import * as codebuild from '@aws-cdk/aws-codebuild'

export class CdkStarterStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
      super(scope, id, props);

      // ruleid:awscdk-codebuild-project-public
      const publicProject1 = new codebuild.Project(this, 'publicProject', {
          badge: true
      })

      const bucket = new s3.Bucket()
      // ok:awscdk-codebuild-project-public
      const privateProject1 = codebuild.Project(this, 'privateProject1', {
        source: codebuild.Source.s3({
            bucket: bucket,
            path: 'path/to/file.zip',
          }),
    })
      // ok:awscdk-codebuild-project-public
      const privateProject2 = codebuild.Project(this, 'privateProject2', {
          badge: false
      })
     
      // ok:awscdk-codebuild-project-public
      const privateProject3 = codebuild.Project(this, 'privateProject3')
    }
}