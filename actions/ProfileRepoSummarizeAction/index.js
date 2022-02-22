const core = require('@actions/core');
const github = require('@actions/github');

try {
  const githubToken = core.getInput('token');
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);

  const client = github.getOctokit(githubToken);
  let org = github.context.repo.owner;
  let repoName = github.context.repo.repo;

  const profiles = await client.rest.repos.getContent(org, repoName, "CustomProfiles");

  // loop through available profiles
  for (let index = 0; index < profiles.data.length; index++) {
    let profile = profiles.data.at(index)

    if (profile.type != "dir")
      continue;

    let name = profile.name
  }

  for (const profile in profiles.data) {
    if (Object.hasOwnProperty.call(profiles.data, profiles)) {
      const element = profiles.data[profiles];
      console.log("a");
    }
  }

} catch (error) {
  core.setFailed(error.message);
}

class Profile {
  constructor(name, description, creators, imageUrl, isInstalled) {
    this.name = name;
    this.description = description;
    this.creators = creators;
    this.imageUrl = imageUrl;
    this.isInstalled = isInstalled;
  }
}