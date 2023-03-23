output "user_arn" {
  description = "ARN of created IAM user"
  value       = "${aws_iam_user.user.arn}"
}

