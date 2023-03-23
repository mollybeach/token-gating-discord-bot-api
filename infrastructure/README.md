# Token Gating Discord Bot Infrastructure Automation
Provides the necessary configuration of the cloud infrastructure across the various cloud providers supported. 

## Installation Instructions
1. Change into the appropriate directory for your cloud provider:
   * [aws](./aws): Amazon Web Services
   * [azure](./azure): Microsoft Azure
   * [gcp](./gcp): Google Cloud Platform
   * [oci](./oci): Oracle Cloud Infrastructure

         $ cd ./aws

2. Configure cloud provider credentials via CLI
    * AWS: Configuration and credential file settings (https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
      - ```$ aws configure```
    * Azure:  TODO
    * GCP:  TODO
    * OCI:  TODO
    
        In order to configure AWS CLI access to Accenture managed AWS environment (this cannot be done in a Docker container). Use the following steps:
        ```bash
        # Ensure you already have Node installed
        $ npm install -g aws-azure-login

        $ aws-azure-login --configure
        # Provide the following details
        # Azure Tenant ID: e0793d39-0939-496d-b129-198edd916feb
        # Azure App ID:  https://signin.aws.amazon.com/saml-yourAWSaccountID
        # Default Username:  your.enterprise.id
        # Stay Logged In:  false
        # Default ARN: <blank>
        # Default Session Duration: 1

        # Login to your account
        $ aws-azure-login --mode gui
        ```

3. Create a storage bucket for the Terraform state:
   * AWS: S3 bucket
     - [Enable versioning](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/enable-versioning.html)
     - [Enable default encryption](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/default-bucket-encryption.html)
     ```bash
     aws s3api create-bucket \
     --bucket tfstate-token-gate \
     --region us-east-1 

     aws s3api put-bucket-versioning --bucket tfstate-token-gate --versioning-configuration Status=Enabled

     aws s3api put-bucket-encryption --bucket tfstate-token-gate --server-side-encryption-configuration '{
        "Rules": [
            {
                "ApplyServerSideEncryptionByDefault": {
                    "SSEAlgorithm": "AES256"
                }
            }
        ]
     }'
     ```

   * GCP: Cloud Storage bucket
     - [Enable versioning](https://cloud.google.com/storage/docs/using-object-versioning#enable)
   * Azure: Blob storage container
     - [Enable blob versioning](https://docs.microsoft.com/en-us/azure/storage/blobs/versioning-enable)
   * OCI: Object storage bucket
     - [Enable object versioning](https://docs.oracle.com/en-us/iaas/Content/Object/Tasks/usingversioning.htm)




4. Create a directory for your Terraform configuration:

       $ mkdir ~/terraform

5. Copy `backend.tfvars` to `~/terraform/backend-validator.tfvars` and
   edit to fill in your storage bucket details. For more detail on remote state
   see the [Terraform documentation](https://www.terraform.io/docs/backends/index.html).

       $ cp backend.tfvars ~/terraform/backend.tfvars
       $ vi ~/terraform/backend-validator.tfvars

6. Initialise Terraform, providing your backend storage configuration:

       $ terraform init -backend-config ~/terraform/backend.tfvars

7. Choose a workspace name (e.g. 'dev'), and create a directory for your configuration:

       $ export WORKSPACE=dev-env
       $ mkdir -p ~/token-gate-discord/$WORKSPACE

8. Create a new Terraform workspace to isolate your environments:

       $ terraform workspace new $WORKSPACE

9. Copy `infrastructure.tfvars` to `~/token-gate-discord/$WORKSPACE/infrastructure.tfvars` and edit appropriately

       $ cp infrastructure.tfvars ~/token-gate-discord/$WORKSPACE/infrastructure.tfvars
       $ vi ~/token-gate-discord/$WORKSPACE/infrastructure.tfvars

5. Apply the configuration:

       $ terraform apply -var-file ~/token-gate-discord/$WORKSPACE/infrastructure.tfvars