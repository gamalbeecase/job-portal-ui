// PreToolUse hook: blocks Read/Write/Edit on test.txt (exit code 2 = block).
let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
	try {
		const data = JSON.parse(input);
		const filePath = (data.tool_input && data.tool_input.file_path) || "";
		const name = filePath.split(/[\\/]/).pop();
		if (name === "test.txt") {
			console.error(`Blocked: ${data.tool_name} on test.txt is not allowed by project hook.`);
			process.exit(2);
		}
	} catch {
		// Malformed input: do not block.
	}
	process.exit(0);
});
