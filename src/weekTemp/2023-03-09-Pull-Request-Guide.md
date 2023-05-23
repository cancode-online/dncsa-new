# "Pull Request Guide"

> "In depth guide to smart and safe contributing"

- toc: true
- branch: master
- badges: true
- comments: true
- author: Vunsh Mehta
- categories: [guide, github]
- hide: false

# What is a Pull Request?

A pull request is a method of submitting contributions to an open development project. It occurs when a developer asks for changes committed to an external repository to be considered for inclusion in a project's main repository after the peer review. Pull requests are used by teams and organizations using the shared repository model. The idea behind a pull request is that someone forks an existing repository, makes changes to it, and then sends a pull request asking to merge their changes into the original repository. The pull request shows the differences of the content from both branches. The changes are not merged until a reviewer(s) approves the pull request.

# Why is it important?

Pull requests are vital to our success in tri 3 of CSA. With teams being sa big as 13 people. Committing every change to a singular repository is confusing and potentially harmful. In order to stay organized and ensure projects are developed efficiently and effectively, we use pull requests.
Benefits to using pull requests:

- Allows for peer review of code, a crucial step in the development process
- Allows for a more organized workflow
- Ensures requirements are being met on each commit
- Allows everyone to contribute to the project
- Keeps main repository secure and clean
- Can sync with issues and close issues upon being accepted
- Many Github bots and tools to assist with pull requests

# How to make a pull request

## As a developer

### Step 1: Fork the repository

Forking a repository is creating a copy of the repository under your own account. This allows you to make changes to the repository without affecting the original repository. To fork a repository, click the fork button in the top right corner of the repository page. This will create a copy of the repository under your account.

_If the fork button is grayed out, you do not have permission to fork the repository. Contact the repository owner to request access. See "as a maintainer" to learn how to setup repository for pull requests._

### Step 2: Clone the forked repository

Cloning a repository is creating a local copy of the repository on your computer. This allows you to make changes to the repository without affecting the original repository. If you do not know how to clone repositories, check out the official github docs [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

### Step 3: Make changes to the forked repository

Now that you have a local copy of the repository, you can make changes to the repository. Make sure to follow contributing guidelines of the repository, if any. Once you are finished editing, commit and push your changes to your forked changes. Commiting docs can be found [here](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository)

### Step 4: Create a pull request

Now that you have made changes to the repository, you can create a pull request. Navigate to your forked repository, and click the **contribute** dropdown. Then click **open pull request**. This will open a new page where you can create a pull request.

<a href="https://ibb.co/S7gq51N"><img src="https://i.ibb.co/XkPmjdX/image-2023-03-09-101058091.png" alt="image-2023-03-09-101058091" border="0"></a>

Your browser should open to a page like this. Verify the branches and repositories automatically supplied by Github are correct. Ensure you provide an accurate title and description of the pull request. You can mention specific issues in the parent repository by typing # and the issue number. For our purposes, ensure you allow edits from mainteners. Once satisfied, click **create pull request**.

<a href="https://ibb.co/QkYz2kf"><img src="https://i.ibb.co/bFNqSFP/image-2023-03-09-101442218.png" alt="image-2023-03-09-101442218" border="0"></a>

_Note: If you are still working on the pull request, you can click **convert to draft** to prevent the pull request from being merged. You can also add commits to your pull request later or edit the changes._

### Step 5: Wait for review

Once you have created a pull request, you must wait for a maintainer to review your pull request. Watch out for comments from maintainers and project members, and ensure you update your request as needed. Once the pull request is approved, it will be merged into the main repository.

## As a maintainer

### Step 1: Setup repository for pull requests

In order to allow for pull requests, you must enable the repository for pull request. To ensure forking is allowed, navigate to the settings tab of the repository. Then click **manage access**. Then click **allow members to create forks**.

### Step 2: Setup maintainers

Before you can merge pull requests, you must add maintainers to the repository. Add members to the repository you trust to review and merge pull requests. To add a maintainer, navigate to the settings tab of the repository. If adding individual members, give them **write** access. If adding a team, give them **maintain** access.

## Good Practices

> Create and follow a contributing guide for best results
> Follow code guidelines specified by class
> Be descriptive

# Resources

- [Github Docs](https://docs.github.com/en/)
- [Github Docs: Creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
- [Github Docs: Creating a pull request from a fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)
- [Github Docs: About pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
- [Github Docs: About forks](https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo)
- [Github Docs: About branches](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-branches)
- [Github Docs: About issues](https://docs.github.com/en/github/managing-your-work-on-github/about-issues)
- [Github Docs: About code reviews](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)
