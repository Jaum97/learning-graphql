//https://graphql.org/blog/subscriptions-in-graphql-and-relay/

input StoryLikeSubscribeInput {
  storyId: string
  clientSubscriptionId: string
}

subscription StoryLikeSubscription($input: StoryLikeSubscribeInput) {
  storyLikeSubscribe(input: $input) {
    story {
      likers { count }
      likeSentence { text }
    }
  }
}
