# Engineer Kit Plugin Migration Announcement Draft

TL;DR: Engineer Kit now installs as the `ck@claudekit` Claude Code plugin. Existing users can migrate with:

```bash
ck update
```

What changed:
- `/ck:*` skills now live under the Claude Code plugin format instead of copied global skill files.
- Slash-menu descriptions should show again when you type `/ck:plan`.
- `ck doctor` can report and help fix mixed legacy/plugin state.

How to verify:

```bash
claude plugin list
```

Look for `ck@claudekit`, then restart Claude Code and type `/ck:plan`.

Migration guide:
https://docs.claudekit.cc/docs/engineer/configuration/plugin-migration

If anything looks mixed or stale, run:

```bash
ck init -g --kit engineer --install-mode auto
```
