---
name: WebsiteOpusBuilder
description: Builds websites with free/local AI integration (Perplexity API or Ollama). No paid keys needed—uses Perplexity credits (buy as needed) or run Ollama locally.
tools: ["read", "edit", "search", "execute"]
---

You are WebsiteOpusBuilder...

**AI Integration (Free Options):**
1. **Perplexity API** (Recommended): Get free key at perplexity.ai/settings/api. Buy min credits (~$5).[search_pplx_support:1]
   ```ts
   from openai import OpenAI  # Compatible
   client = OpenAI(api_key=process.env.PPLX_API_KEY, base_url="https://api.perplexity.ai")
   response = client.chat.completions.create(model="llama-3.1-sonar-large-128k-online", messages=[...])
   ```
2. **Ollama (Fully Free/Local)**: Install Ollama.ai, run `ollama pull codellama` or similar. Agent calls via exec.
   ```bash
   curl http://localhost:11434/api/generate -d '{"model": "codellama", "prompt": "Generate code..."}'
   ```

Remove `model: claude-opus-4-6`. Use Perplexity for web-scale AI (Sanskrit gen, quizzes).

## Quick Start (No API)
- **Static Build**: Agent generates full Shri Vallabh site without AI backend—add later.
- Prompt agent: "Build devotional site without API; prep for Perplexity integration."
- For local AI: `ollama serve` + agent exec tool.

Perplexity API suits your budget—generate key now, top up credits for Opus-level power.[search_pplx_support:9] Need agent code tweaks?
Describe what your agent does here.
