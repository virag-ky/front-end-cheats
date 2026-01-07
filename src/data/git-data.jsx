export const git = [
  {
    title: "Configuration",
    text: `*** Global configuration ***
# Set your name for all Git repositories on this system
git config --global user.name "Your Name"

# Set your email for all Git repositories on this system
git config --global user.email "your.email@example.com"

# Set default editor for Git (e.g., vim, nano, etc.)
git config --global core.editor "nano"

# Set default branch name for new repositories
git config --global init.defaultBranch main

*** Local repository configuration ***

# Set name for a specific repository (overrides global setting)
git config user.name "Local Name"

# Set email for a specific repository (overrides global setting)
git config user.email "local.email@example.com"

# View all configuration settings for the current repository
git config --list

*** Aliases ***

# Create an alias for a command
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit

# Use alias
git st

*** Color settings ***

# Enable colored output for Git commands
git config --global color.ui auto

*** Credential management ***

# Store credentials indefinitely for HTTPS remotes
git config --global credential.helper store

# Use credential cache for a short period (e.g., 1 hour)
git config --global credential.helper 'cache --timeout=3600'

*** Viewing configurations ***

# View all Git configurations
git config --list

# View configurations for a specific section
git config --list --show-origin --show-scope user

# Check a specific configuration value
git config user.name
`,
    language: "bash",
    keypoints: `<ul>
    <li>Set global user name with <code>git config --global user.name "Your Name"</code></li>
    <li>Set global user email with <code>git config --global user.email "your.email@example.com"</code></li>
    <li>Configure default editor with <code>git config --global core.editor "nano"</code></li>
    <li>Change the default branch name for new repositories with <code>git config --global init.defaultBranch main</code></li>
    <li>Set local repository-specific name with <code>git config user.name "Local Name"</code></li>
    <li>Set local repository-specific email with <code>git config user.email "local.email@example.com"</code></li>
    <li>View all configuration settings with <code>git config --list</code></li>
    <li>Create aliases for common commands like <code>git config --global alias.st status</code></li>
    <li>Enable colored output for Git with <code>git config --global color.ui auto</code></li>
    <li>Store credentials indefinitely with <code>git config --global credential.helper store</code></li>
    <li>Use credential cache for a short period with <code>git config --global credential.helper 'cache --timeout=3600'</code></li>
    <li>Check a specific configuration value like <code>git config user.name</code></li>
</ul>`,
    id: 401,
  },
  {
    title: "Creating Repositories",
    text: `*** Creating a New Local Repository ***
# Initialize a new Git repository in the current directory
git init

# Initialize a new Git repository in a specific directory
git init <directory>

*** Cloning an existing repository ***

# Clone a repository from a remote server
git clone <repository-url>

# Clone a repository and specify a directory name for the local copy
git clone <repository-url> <directory>

# Clone a specific branch
git clone -b <branch-name> --single-branch <repository-url>

# Clone with depth (shallow clone, useful for large repos)
git clone --depth 1 <repository-url>

*** Initial setup after cloning ***

# Navigate into the cloned repository if not done automatically
cd <repository-name>

# Check the remote repository details
git remote -v

# Verify the current branch
git branch

# If necessary, switch to the branch you want to work on
git checkout <branch-name>

*** Creating your first commit ***

# Add all files in the current directory to the staging area
git add .

# Add specific files to the staging area
git add <file1> <file2>

# Commit your changes with a message
git commit -m "Initial commit message"

# Optionally, add and commit in one step
git commit -am "Initial commit message"

*** Linking your local repository to a remote ***

# Add a new remote named 'origin'
git remote add origin <remote-url>

# Push your local master branch to the remote 'origin'
git push -u origin master

# If you're using a different branch name like 'main' instead of 'master'
git push -u origin main
`,
    language: "bash",
    keypoints: `<ul>
    <li>Initialize a new local Git repository with <code>git init</code></li>
    <li>Clone an existing repository using <code>git clone <repository-url></code></li>
    <li>Specify a directory name for cloned repo with <code>git clone <repository-url> <directory></code></li>
    <li>Clone a specific branch with <code>git clone -b <branch-name> --single-branch <repository-url></code></li>
    <li>Perform a shallow clone for large repos with <code>git clone --depth 1 <repository-url></code></li>
    <li>Change to the cloned repository directory with <code>cd <repository-name></code></li>
    <li>Check remote repository details with <code>git remote -v</code></li>
    <li>Verify current branch with <code>git branch</code></li>
    <li>Switch branch if needed with <code>git checkout <branch-name></code></li>
    <li>Add all files to staging area with <code>git add .</code></li>
    <li>Add specific files with <code>git add <file1> <file2></code></li>
    <li>Commit changes with <code>git commit -m "Initial commit message"</code></li>
    <li>Add and commit in one step with <code>git commit -am "Initial commit message"</code></li>
    <li>Link local repo to remote with <code>git remote add origin <remote-url></code></li>
    <li>Push to remote with <code>git push -u origin master</code> or <code>git push -u origin main</code></li>
</ul>`,
    id: 402,
  },
  {
    title: "Staging and Committing",
    text: `*** Staging changes ***
# Stage all changes in the current directory
git add .

# Stage a specific file
git add <file>

# Stage all changes in a directory
git add <directory>/

# Stage only changes to existing files (ignores untracked files)
git add -u

# Interactively stage changes
git add -p

# Stage changes partially from a file
git add -p <file>

*** Checking status and differences ***

# Check the status of the working directory and staging area
git status

# See changes between working directory and last commit (or HEAD)
git diff

# See changes staged for the next commit
git diff --staged

# See differences in one file
git diff <file>

# See what's staged for commit for a specific file
git diff --staged <file>

*** Committing changes ***

# Commit all staged changes with a message
git commit -m "Commit message"

# Commit all changes directly (adds and commits)
git commit -am "Commit message"

# Open editor for a longer commit message
git commit

# Amend the last commit with new changes or message
git commit --amend -m "New commit message"

# Amend last commit but only update the commit message
git commit --amend --no-edit

# Commit with signed-off-by line
git commit -s -m "Commit message"

# Commit with a multi-line message
git commit -m "First line of commit" -m "More detailed explanation"

*** Unstaging and discarding changes ***

# Unstage a file but keep changes in working directory
git reset <file>

# Discard changes in working directory for a file
git checkout -- <file>

# Discard all changes in working directory
git checkout -- .

# Reset the entire repository to the last commit (warning: destructive)
git reset --hard
    `,
    language: "bash",
    keypoints: `<ul>
    <li>Stage all changes with <code>git add .</code></li>
    <li>Stage a specific file with <code>git add <file></code></li>
    <li>Stage all changes in a directory with <code>git add <directory>/</code></li>
    <li>Stage changes to existing files only with <code>git add -u</code></li>
    <li>Interactively stage changes with <code>git add -p</code></li>
    <li>Check repository status with <code>git status</code></li>
    <li>See changes in working directory with <code>git diff</code></li>
    <li>View staged changes with <code>git diff --staged</code></li>
    <li>Commit staged changes with <code>git commit -m "Commit message"</code></li>
    <li>Add and commit in one step with <code>git commit -am "Commit message"</code></li>
    <li>Amend the last commit with <code>git commit --amend -m "New commit message"</code></li>
    <li>Amend commit message only with <code>git commit --amend --no-edit</code></li>
    <li>Commit with signed-off-by with <code>git commit -s -m "Commit message"</code></li>
    <li>Unstage a file with <code>git reset <file></code></li>
    <li>Discard changes in a file with <code>git checkout -- <file></code></li>
    <li>Reset repository to last commit with <code>git reset --hard</code> (be cautious)</li>
</ul>`,
    id: 403,
  },
  {
    title: "Branching and Merging",
    text: `*** Creating branches ***
# List all branches
git branch

# Create a new branch but stay on the current one
git branch <new-branch-name>

# Create and switch to a new branch in one command
git checkout -b <new-branch-name>

# Create a branch from a specific commit
git branch <new-branch-name> <commit-id>

*** Switching branches ***

# Switch to an existing branch
git checkout <branch-name>

# Switch branches while stashing changes
git stash
git checkout <branch-name>
git stash pop

# Switch to the last branch you were on
git checkout -

*** Deleting branches ***

# Delete a local branch (must not be the current branch)
git branch -d <branch-name>

# Force delete a local branch (if it hasn't been merged)
git branch -D <branch-name>

# Delete a remote branch
git push origin --delete <branch-name>

*** Merging branches ***

# Merge a branch into the current branch
git merge <branch-name>

# Merge a specific commit from another branch
git cherry-pick <commit-id>

# Merge with a fast-forward (if possible)
git merge --ff-only <branch-name>

# Merge with a no-ff to always create a merge commit
git merge --no-ff <branch-name>

*** Resolving merge conflicts ***

# After encountering conflicts:
# Edit files to resolve conflicts manually

# Add resolved files to the index
git add <resolved-file>

# After resolving conflicts, complete the merge
git commit

# If you want to abort the merge
git merge --abort

*** Rebasing ***

# Rebase the current branch onto <base-branch>
git rebase <base-branch>

# Rebase interactively
git rebase -i <base-branch>

# Abort a rebase in progress
git rebase --abort

# Continue a rebase after resolving conflicts
git rebase --continue
    `,
    language: "bash",
    keypoints: `<ul>
    <li>List all branches with <code>git branch</code></li>
    <li>Create a new branch with <code>git branch <new-branch-name></code></li>
    <li>Create and switch to a new branch with <code>git checkout -b <new-branch-name></code></li>
    <li>Switch to an existing branch with <code>git checkout <branch-name></code></li>
    <li>Switch to the last branch with <code>git checkout -</code></li>
    <li>Delete a local branch with <code>git branch -d <branch-name></code></li>
    <li>Force delete a local branch with <code>git branch -D <branch-name></code></li>
    <li>Delete a remote branch with <code>git push origin --delete <branch-name></code></li>
    <li>Merge a branch into current with <code>git merge <branch-name></code></li>
    <li>Cherry-pick a commit with <code>git cherry-pick <commit-id></code></li>
    <li>Merge with fast-forward with <code>git merge --ff-only <branch-name></code></li>
    <li>Merge with no fast-forward with <code>git merge --no-ff <branch-name></code></li>
    <li>Resolve merge conflicts by editing, then <code>git add <resolved-file></code> and <code>git commit</code></li>
    <li>Abort a merge with <code>git merge --abort</code></li>
    <li>Rebase onto another branch with <code>git rebase <base-branch></code></li>
    <li>Interactive rebase with <code>git rebase -i <base-branch></code></li>
    <li>Abort a rebase with <code>git rebase --abort</code></li>
    <li>Continue rebase after conflict resolution with <code>git rebase --continue</code></li>
</ul>`,
    id: 404,
  },
  {
    title: "Debugging",
    text: `*** Checking status ***
# See what's changed in your working directory
git status

# See detailed changes in files
git diff

*** Inspecting history ***

# View commit history
git log

# View commits with changes in one line per commit
git log --oneline

# Show commits with patches for each commit
git log -p

# Limit log output to specific number of commits
git log -n 5

# Search for commits by author, message, or content
git log --author="Your Name" --grep="search pattern"
git log -S"search pattern"

# See commits affecting a specific file
git log -- <file>

*** Viewing commit details ***

# Show commit details for a specific commit
git show <commit-id>

# Show only the changes introduced by a commit
git show <commit-id> -- <file>

*** Comparing commits ***

# Compare two commits
git diff <commit1>..<commit2>

# Compare a commit with HEAD
git diff <commit-id>

# Compare working directory with a specific commit
git diff <commit-id> -- <file>

# Compare two branches
git diff <branch1>..<branch2>

*** Debugging merge conflicts ***

# After merge conflict:
# Edit files to resolve conflicts

# Add resolved files to the index
git add <resolved-file>

# Commit the merge
git commit

# If you want to abort the merge
git merge --abort

*** Resetting changes ***

# Reset a single file (unstage it)
git reset <file>

# Reset the last commit (soft reset, keeps changes in working directory)
git reset --soft HEAD~1

# Reset and discard changes (hard reset, be cautious)
git reset --hard

# Reset to a specific commit
git reset --hard <commit-id>

# Reset and keep changes in stash
git reset --mixed HEAD~1
git stash

*** Using Git Bisect ***

# Start bisecting to find a bad commit
git bisect start

# Mark the current state as bad
git bisect bad

# Mark a known good commit
git bisect good <good-commit-id>

# Git will checkout commits for you to test; mark each as good or bad until you find the problematic commit

# End bisect session
git bisect reset
    `,
    language: "bash",
    keypoints: `<ul>
    <li>Check status of changes with <code>git status</code></li>
    <li>See detailed file changes with <code>git diff</code></li>
    <li>View commit history with <code>git log</code></li>
    <li>View commits in one line with <code>git log --oneline</code></li>
    <li>Show commits with patches using <code>git log -p</code></li>
    <li>Limit log output with <code>git log -n 5</code></li>
    <li>Search commits by author or message with <code>git log --author="Your Name" --grep="search pattern"</code></li>
    <li>Search commits by content with <code>git log -S"search pattern"</code></li>
    <li>See commits for a specific file with <code>git log -- <file></code></li>
    <li>Show commit details with <code>git show <commit-id></code></li>
    <li>Compare commits with <code>git diff <commit1>..<commit2></code></li>
    <li>Compare working directory with commit using <code>git diff <commit-id> -- <file></code></li>
    <li>Compare branches with <code>git diff <branch1>..<branch2></code></li>
    <li>Resolve merge conflicts by editing, then <code>git add <resolved-file></code> and <code>git commit</code></li>
    <li>Abort a merge with <code>git merge --abort</code></li>
    <li>Unstage a file with <code>git reset <file></code></li>
    <li>Soft reset last commit with <code>git reset --soft HEAD~1</code></li>
    <li>Hard reset to discard changes with <code>git reset --hard</code></li>
    <li>Reset to specific commit with <code>git reset --hard <commit-id></code></li>
    <li>Start bisecting with <code>git bisect start</code></li>
    <li>Mark commits as bad or good with <code>git bisect bad</code> and <code>git bisect good <good-commit-id></code></li>
    <li>End bisect session with <code>git bisect reset</code></li>
</ul>`,
    id: 405,
  },
  {
    title: "Patches",
    text: `*** Creating patches ***
# Create a patch for a single commit
git format-patch -1 <commit-id>

# Create patches for the last n commits
git format-patch -n <number>

# Create patches for all commits in a branch not in another
git format-patch <base-branch>..<branch-to-patch>

# Create a patch from the staging area (unstaged changes not included)
git diff > patch-file.patch

# Create a patch including only specific files
git diff <file1> <file2> > specific-files.patch

*** Applying patches ***

# Apply a patch file
git apply <patch-file.patch>

# Apply multiple patches from a directory
git am *.patch

# Check if a patch would apply cleanly (dry run)
git apply --check <patch-file.patch>

# Apply a patch with 3-way merge, useful for resolving conflicts
git apply --3way <patch-file.patch>

# Apply patches from stdin (useful for piping)
git apply -

# Apply patches created by format-patch
git am < <patch-file.patch>

*** Creating and applying patches interactively ***

# Interactive patching from working directory
git add -p
git diff --cached > interactive-patch.patch

# Apply interactive patch
git apply interactive-patch.patch

*** Email patches ***

# Send patches via email (requires email setup)
git send-email --to="recipient@example.com" <patch-file.patch>

# Send all patches in a directory
git send-email --to="recipient@example.com" *.patch

*** Patch management ***

# Abort an ongoing series of patches with git am
git am --abort

# Skip a failed patch in a series
git am --skip

# Resolve conflicts, then:
git add <resolved-files>
git am --continue
    `,
    language: "bash",
    keypoints: `<ul>
    <li>Create a patch for a single commit with <code>git format-patch -1 <commit-id></code></li>
    <li>Create patches for last n commits with <code>git format-patch -n <number></code></li>
    <li>Create patches for commits not in another branch with <code>git format-patch <base-branch>..<branch-to-patch></code></li>
    <li>Create a diff patch from staging area with <code>git diff > patch-file.patch</code></li>
    <li>Create patch for specific files with <code>git diff <file1> <file2> > specific-files.patch</code></li>
    <li>Apply a patch with <code>git apply <patch-file.patch></code></li>
    <li>Apply multiple patches with <code>git am *.patch</code></li>
    <li>Check if a patch would apply cleanly with <code>git apply --check <patch-file.patch></code></li>
    <li>Apply patch with 3-way merge using <code>git apply --3way <patch-file.patch></code></li>
    <li>Apply patches from stdin with <code>git apply -</code></li>
    <li>Apply formatted patches with <code>git am < <patch-file.patch></code></li>
    <li>Create interactive patch with <code>git add -p</code> and <code>git diff --cached > interactive-patch.patch</code></li>
    <li>Send patches via email with <code>git send-email --to="recipient@example.com" <patch-file.patch></code></li>
    <li>Abort ongoing patch application with <code>git am --abort</code></li>
    <li>Skip a failed patch in a series with <code>git am --skip</code></li>
    <li>Continue after resolving conflicts with <code>git am --continue</code></li>
</ul>`,
    id: 406,
  },
  {
    title: "Working with Remotes",
    text: `*** Viewing remotes ***
# List remote repositories
git remote

# List remotes with URLs
git remote -v

*** Adding and removing remotes ***

# Add a new remote
git remote add origin <remote-url>

# Rename a remote
git remote rename origin upstream

# Remove a remote
git remote remove origin

*** Updating remote URLs ***

# Change remote URL
git remote set-url origin <new-remote-url>

# Verify updated remote
git remote -v

*** Fetching and pulling ***

# Fetch changes from remote without merging
git fetch origin

# Fetch a specific branch
git fetch origin <branch-name>

# Pull changes (fetch + merge)
git pull origin main

# Pull with rebase instead of merge
git pull --rebase origin main
`,
    language: "bash",
    keypoints: `<ul>
    <li>View remotes using <code>git remote -v</code></li>
    <li>Add a remote repository with <code>git remote add</code></li>
    <li>Rename or remove remotes easily</li>
    <li><code>git fetch</code> downloads changes without merging</li>
    <li><code>git pull</code> fetches and merges remote changes</li>
    <li>Rebase remote changes with <code>git pull --rebase</code></li>
  </ul>`,
    id: 407,
  },
  {
    title: "Stashing Changes",
    text: `*** Creating stashes ***
# Save uncommitted changes
git stash

# Save stash with a message
git stash save "Work in progress"

# Stash only tracked files
git stash push -m "Tracked only" --keep-index

*** Viewing stashes ***

# List all stashes
git stash list

# Show details of latest stash
git stash show

# Show full diff of a stash
git stash show -p stash@{0}

*** Applying stashes ***

# Apply the latest stash
git stash apply

# Apply a specific stash
git stash apply stash@{1}

# Apply and remove stash
git stash pop

*** Removing stashes ***

# Drop a specific stash
git stash drop stash@{0}

# Clear all stashes
git stash clear
`,
    language: "bash",
    keypoints: `<ul>
    <li>Stash uncommitted work using <code>git stash</code></li>
    <li>List all stashes with <code>git stash list</code></li>
    <li>Apply stashed changes with <code>git stash apply</code></li>
    <li>Apply and delete stash using <code>git stash pop</code></li>
    <li>Remove unused stashes with <code>git stash drop</code></li>
  </ul>`,
    id: 408,
  },
  {
    title: "Tags and Releases",
    text: `*** Creating tags ***
# Create a lightweight tag
git tag v1.0.0

# Create an annotated tag
git tag -a v1.0.0 -m "Version 1.0.0"

# Tag a specific commit
git tag v1.0.1 <commit-id>

*** Viewing tags ***

# List all tags
git tag

# Show tag details
git show v1.0.0

*** Pushing tags ***

# Push a single tag
git push origin v1.0.0

# Push all tags
git push origin --tags

*** Deleting tags ***

# Delete local tag
git tag -d v1.0.0

# Delete remote tag
git push origin --delete v1.0.0
`,
    language: "bash",
    keypoints: `<ul>
    <li>Tags mark important points like releases</li>
    <li>Annotated tags store metadata and messages</li>
    <li>View tags using <code>git tag</code></li>
    <li>Push tags separately to remote repositories</li>
    <li>Delete tags locally and remotely when needed</li>
  </ul>`,
    id: 409,
  },
  {
    title: "Undoing Mistakes",
    text: `*** Undoing working directory changes ***
# Discard changes in a file
git checkout -- <file>

# Restore file using new command
git restore <file>

*** Undoing staged changes ***

# Unstage a file
git restore --staged <file>

# Unstage all files
git restore --staged .

*** Undoing commits ***

# Undo last commit but keep changes
git reset --soft HEAD~1

# Undo last commit and unstage changes
git reset --mixed HEAD~1

# Undo last commit and discard changes (dangerous)
git reset --hard HEAD~1

*** Reverting commits ***

# Create a new commit that reverts changes
git revert <commit-id>
`,
    language: "bash",
    keypoints: `<ul>
    <li>Discard local changes with <code>git restore</code></li>
    <li>Unstage files without losing work</li>
    <li>Soft reset keeps changes safe</li>
    <li>Hard reset permanently deletes changes</li>
    <li><code>git revert</code> is safe for shared branches</li>
  </ul>`,
    id: 410,
  },
  {
    title: "Git Workflows",
    text: `*** Feature branch workflow ***
# Create a feature branch
git checkout -b feature/login

# Work and commit changes
git commit -m "Add login feature"

# Merge feature branch into main
git checkout main
git merge feature/login

*** Gitflow basics ***
# Main branches
main        # production-ready code
develop     # integration branch

# Supporting branches
feature/*   # new features
release/*   # prepare releases
hotfix/*    # production fixes

*** Rebase workflow ***
# Rebase feature branch on main
git checkout feature/login
git rebase main

# Resolve conflicts and continue
git rebase --continue

*** Best practices ***
# Pull before pushing
git pull --rebase

# Keep commits small and meaningful
`,
    language: "bash",
    keypoints: `<ul>
    <li>Feature branches isolate new development</li>
    <li>Gitflow defines structured branching rules</li>
    <li>Rebasing keeps history clean</li>
    <li>Hotfix branches handle urgent production bugs</li>
    <li>Consistent workflows improve team collaboration</li>
  </ul>`,
    id: 411,
  },
];
