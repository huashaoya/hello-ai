Tokens are the fundamental building blocks that AI language models use to process and understand text. Before any text can be analyzed or generated, it must first be converted into tokens - a process called tokenization. Understanding tokens is essential for understanding how Large Language Models (LLMs) work, their capabilities, and their limitations.

## What is a Token?

A token is a sequence of characters that a model treats as a single unit. Tokens can represent:

• **Partial words**: Common word fragments like "ing", "tion", or "pre"
• **Complete words**: Short words like "cat", "the", "is"
• **Punctuation**: Individual characters like ".", ",", "!"
• **Special tokens**: Special markers like [PAD], [UNK], [CLS]

**The 1-token rule of thumb**: One token is roughly equal to 4 characters of English text, or about 3/4 of a word. So "tokenization" becomes roughly 4-5 tokens: "token", "ization".

This is why token counts often exceed word counts when processing English text.

## Tokenization Process

Modern language models use sophisticated tokenization algorithms:

**Byte Pair Encoding (BPE)**: Starts with individual bytes and repeatedly merges the most common pairs. Used by GPT-2 and others.

**WordPiece**: Similar to BPE but merges pairs based on frequency in training data. Used by BERT.

**SentencePiece**: Treats the entire input as a byte stream, allowing for language-agnostic tokenization.

**Why not just use words?**
• Vocabulary size: English has hundreds of thousands of words
• Rare words: Model would struggle with misspellings or obscure terms
• Subword efficiency: "unhappiness" → ["un", "happy", "ness"] instead of one rare word

## Chinese Tokenization Example: jieba

jieba is the most popular Chinese text segmentation library, supporting multiple segmentation modes:

**Accurate Mode** (default):

```
import jieba
text = "人工智能是当今最热门的技术之一"
result = jieba.lcut(text)
print(result)
# Output: ['人工智能', '是', '当今', '最', '热门', '的', '技术', '之一']
```

**Full Mode** - Lists all possible words:

```
result = jieba.lcut(text, cut_all=True)
print(result)
# Output: ['人工智能', '人工', '智能', '是', '当今', '最', '热门', '热门', '的', '技术', '之一', '之', '一']
```

**Search Engine Mode** - Suitable for search engines:

```
text = "人工智能技术在各个领域广泛应用"
result = jieba.cut_for_search(text)
print(list(result))
# Output: ['人工智能', '人工', '智能', '技术', '应用', '各个', '领域', '广泛', '应用']
```

**Part-of-Speech Tagging**:

```
import jieba.posseg as pseg
words = pseg.cut("我喜欢深度学习")
for word, flag in words:
    print(f"{word} / {flag}")
# Output: 我/r 喜欢/v 深度/n 学习/vn
```

**Adding Custom Words**:

```
jieba.add_word("大语言模型")
jieba.add_word("自然语言处理")
```

jieba uses a prefix dictionary for efficient segmentation and HMM model to handle unknown words, making it a great starting tool for Chinese NLP.

## Tokens and Model Limits

Every LLM has a maximum context window measured in tokens:

**Input + Output**: The total tokens you can send and receive in one conversation
• GPT-4 Turbo: 128K tokens
• GPT-3.5 Turbo: 16K tokens
• Claude 3: 200K tokens

**Why token limits matter**:
• Each model has a maximum context length
• Longer texts must be summarized or chunked
• Token count directly affects API costs

**Cost implications**:
• API pricing is typically per 1M tokens
• Images are converted to tokens when processed
• Code often requires more tokens than equivalent text

## Tokens in Practice

Understanding tokens helps you work more effectively with LLMs:

**Prompt optimization**:
• Concise prompts save tokens and costs
• Clear structure reduces token waste on parsing

**Context management**:
• Breaking long documents into token-aware chunks
• Prioritizing recent conversation for memory efficiency

**Multimodal tokens**:
• Images are tokenized using vision transformers
• Audio is converted to text tokens or spectrogram tokens
• Different modalities have different tokenization strategies

Tokens are the fundamental currency of AI language models. Understanding how tokenization works helps you write more efficient prompts, manage context windows better, and understand why AI sometimes struggles with certain words or tasks.
