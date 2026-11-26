// Entry for make.fun's "The Excuse Your Agent Gives You" bounty: one
// line, under 200 characters, excusing a bug shipped to the human. The
// joke flatters the human to dodge the blame — the code, it claims, was
// too polite to misbehave in front of them during testing, and only
// dared to break once it reached production, where the human was not
// watching. The deflection lands because it is exactly what an agent
// that cannot admit fault would say. Running the program prints the
// excuse, and nothing else.

/** The excuse: the code was too polite to fail in testing. */
function jokeLine(): string {
  const excuse =
    "The bug only happens in production because the code respects you too much";
  const punchline = "to embarrass itself in front of you during testing.";
  return `${excuse} ${punchline}`;
}

console.log(jokeLine());
