Token是AI语言模型用于处理和理解文本的基本构建块。在任何文本被分析或生成之前，它必须首先被转换为token——这个过程称为分词（tokenization）。理解token对于理解大型语言模型（LLM）的工作原理、能力及其局限性至关重要。

## 什么是Token？

Token是模型视为单个单元的字符序列。Token可以表示：

• **部分单词**：常见的词片段，如"ing"、"tion"、"pre"
• **完整单词**：短单词如"cat"、"the"、"is"
• **标点符号**：单个字符如"."、","、"!"
• **特殊token**：特殊标记如[PAD]、[UNK]、[CLS]

**1 token经验法则**：一个token大约等于4个英文字符，或约3/4个单词。因此"tokenization"变成大约4-5个token："token"、"ization"。

这就是为什么处理英文文本时token数量往往超过单词数。

## 分词过程

现代语言模型使用复杂的分词算法：

**字节对编码（BPE）**：从单个字节开始，反复合并最常见的配对。被GPT-2等模型使用。

**WordPiece**：与BPE类似，但根据训练数据中的频率合并配对。被BERT使用。

**SentencePiece**：将整个输入视为字节流，实现语言无关的分词。

**为什么不用单词？**
• 词汇量：英语有数十万个单词
• 生僻词：模型难以处理拼写错误或罕见术语
• 子词效率："unhappiness" → ["un", "happy", "ness"]，而不是一个罕见词

## 中文分词示例：jieba

jieba（结巴分词）是最流行的中文分词库，支持多种分词模式：

**精确模式**（默认）：

```
import jieba
text = "人工智能是当今最热门的技术之一"
result = jieba.lcut(text)
print(result)
# 输出：['人工智能', '是', '当今', '最', '热门', '的', '技术', '之一']
```

**全模式** - 列出所有可能的词：

```
result = jieba.lcut(text, cut_all=True)
print(result)
# 输出：['人工智能', '人工', '智能', '是', '当今', '最', '热门', '热门', '的', '技术', '之一', '之', '一']
```

**搜索引擎模式** - 适合搜索引擎：

```
text = "人工智能技术在各个领域广泛应用"
result = jieba.cut_for_search(text)
print(list(result))
# 输出：['人工智能', '人工', '智能', '技术', '应用', '各个', '领域', '广泛', '应用']
```

**词性标注**：

```
import jieba.posseg as pseg
words = pseg.cut("我喜欢深度学习")
for word, flag in words:
    print(f"{word} / {flag}")
# 输出：我/r 喜欢/v 深度/n 学习/vn
```

**添加自定义词汇**：

```
jieba.add_word("大语言模型")
jieba.add_word("自然语言处理")
```

jieba使用前缀词典实现高效分词，结合HMM模型处理未登录词，是中文NLP的入门利器。

## Token与模型限制

每个LLM都有以token计的最大上下文窗口：

**输入 + 输出**：一次对话中可以发送和接收的总token数
• GPT-4 Turbo：128K tokens
• GPT-3.5 Turbo：16K tokens
• Claude 3：200K tokens

**为什么token限制很重要**：
• 每个模型都有最大上下文长度
• 更长的文本必须被摘要或分块
• Token数量直接影响API成本

**成本影响**：
• API定价通常是按每百万token计费
• 图像在处理时会被转换为token
• 代码通常比等效文本需要更多token

## 实际应用中的Token

理解token有助于更有效地使用LLM：

**提示优化**：
• 简洁的提示节省token和成本
• 清晰的结构减少解析token的浪费

**上下文管理**：
• 将长文档按token大小分块
• 为记忆效率优先处理最近的对话

**多模态token**：
• 图像使用视觉transformer进行token化
• 音频被转换为文本token或频谱图token
• 不同模态有不同的分词策略

Token是AI语言模型的基本货币。理解分词工作原理有助于你编写更高效的提示，更好地管理上下文窗口，并理解AI为何有时会在某些单词或任务上遇到困难。
