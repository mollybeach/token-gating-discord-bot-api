#########################
# AWS PROVIDER VARIABLES
#########################
variable "aws_region" {
  description = "The region where our vpc, subnets and default cloud configuration will live"
  default     = "us-east-1"
}

#variable "access_key" {}

#variable "secret_key" {}


########################################
# SERVERLESS IAM User/Role
########################################
variable "username" {
  description = ""
}

variable "tags" {
  description = "Tags for every resource made by the module"
  default     = {
    Project     = "TOKEN-DISCORD-ENV"
    Environment = "DEVELOPMENT-ENV"
  }
}
