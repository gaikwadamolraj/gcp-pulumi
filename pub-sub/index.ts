import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

const topic = new gcp.pubsub.Topic("compliance-dashboard-topic", {
  labels: {
    compalince: "report",
  },
  messageRetentionDuration: "86600s",
});
export const topicName = topic.name;

const subscription = new gcp.pubsub.Subscription(
  "compliance-dashboard-topic-sub",
  {
    topic: topicName,
    ackDeadlineSeconds: 20,
    labels: {
      compliance: "dashboard",
    },
  }
);

export const subscriptionName = subscription.name;
