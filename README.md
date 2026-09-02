# verification-fixture

A deliberately small repository used by EZiL Works to prove that the sandbox runner clones a real repository, installs it, runs its static checks and its own test suite, and reports honestly.

**The task:** one test fails on purpose. `grossPayLabel` divides paise by 10; a rupee has 100 paise. Fix the divisor in `src/pricing.ts`, keep every other test green, and open a pull request against `main`.

```
bun install
bun test        # 1 failing test until the bug is fixed
bun run typecheck
```

No secrets, no services, no serve descriptor: the runner's serve stage is skipped for this repository by design.
