terraform {
  backend "s3" {
    shared_credentials_file = "~/.aws/credentials"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

/*
Must create a role that has at least the policy of: Power User
*/
provider "aws" {
#  access_key = "${var.access_key}"
#  secret_key = "${var.secret_key}"
  shared_config_files      = ["~/.aws/config"]
  shared_credentials_files = ["~/.aws/credentials"]
  #profile                  = "default"
  region     = "${var.aws_region}"
}