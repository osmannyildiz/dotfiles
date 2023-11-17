# dotfiles/vscode

## Link profiles

1. Create a new profile from within VSCode.
2. Learn that new profile's profile ID and assign it to the `VSCODE_PROFILE_ID` shell variable, like shown below.
3. Run the commands below **with relevant values**.

```sh
$ VSCODE_PROFILE_ID="-1ee7c0de"
$ ./link_profile.sh tavsan_Main "$HOME/Library/Application Support/Code/User/profiles/$VSCODE_PROFILE_ID"
```
