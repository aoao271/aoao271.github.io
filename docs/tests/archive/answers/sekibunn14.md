---
title: 無限級数の極限 - 解答
description: 積分テストNo.14の解答と解説
level: classified
---

# 無限級数の極限 - 解答

1. $\log2$

    !!! note "解説"
        $\begin{align}
        \lim_{n \to \infty} \left(\frac{1}{n + 1} + \frac{1}{n + 2} + \cdots + \frac{1}{2n}\right) &= \lim_{n \to \infty} \sum_{k=1}^{n} \frac{1}{n + k} \\
        &= \lim_{n \to \infty} \frac{1}{n} \sum_{k=1}^{n} \frac{1}{1 + \frac{k}{n}} \\
        &= \int_{0}^{1} \frac{1}{1 + x} dx \\
        &= \log2
        \end{align}$

2. $\frac{\pi}{4}$

    !!! note "解説"
        $\begin{align}
        \lim_{n \to \infty} \left(\frac{n}{n^2 + 1} + \frac{n}{n^2 + 4} + \cdots + \frac{n}{2n}\right) &= \lim_{n \to \infty} \sum_{k=1}^{n} \frac{n}{n^2 + k^2} \\
        &= \lim_{n \to \infty} \frac{1}{n} \sum_{k=1}^{n} \frac{1}{1 + \left(\frac{k}{n}\right)^2} \\
        &= \int_{0}^{1} \frac{1}{1 + x^2} dx \\
        &= \frac{\pi}{4}
        \end{align}$

3. $\sqrt{2} - 1$

    !!! note "解説"
        $\begin{align}
        \lim_{n \to \infty} \frac{1}{n} \left(\frac{1}{\sqrt{n^2 + 1}} + \frac{2}{\sqrt{n^2 + 4}} + \cdots + \frac{n - 1}{\sqrt{2n^2 - 2n + 1}}\right) &= \lim_{n \to \infty} \frac{1}{n} \sum_{k=1}^{n} \frac{1}{\sqrt{1 + \left(\frac{k}{n}\right)^2}} \\
        &= \int_{0}^{1} \frac{1}{\sqrt{1 + x^2}} dx \\
        &= \sqrt{2} - 1
        \end{align}$

4. $1$

    !!! note "解説"
        $\begin{align}
        \lim_{n \to \infty} \frac{1}{n^2} \sum_{k=1}^{n} ke^{\frac{k}{n}} &= \lim_{n \to \infty} \frac{1}{n} \sum_{k=1}^{n} \frac{k}{n} e^{\frac{k}{n}} \\
        &= \int_{0}^{1} xe^x dx \\
        &= 1
        \end{align}$

5. $\frac{3}{2}\log3 - 1$

    !!! note "解説"
        $\begin{align}
        A &= \lim_{n \to \infty} \frac{\sqrt[n]{(n + 2)(n + 4) \cdots (3n)}}{n} \\
        \log A &= \lim_{n \to \infty} \frac{1}{n} \log \left(1 + \frac{2}{n}\right) \left(1 + \frac{4}{n}\right) \cdots \left(1 + \frac{2n}{n}\right) \\
        &= \lim_{n \to \infty} \frac{1}{n} \sum_{k=1}^{n} \log \left(1 + 2\frac{k}{n}\right) \\
        &= \int_{0}^{1} \log(1 + 2x) dx \\
        &= \frac{3}{2}\log3 - 1
        \end{align}$

!!! note "参考資料"
    [これだよ](https://hiraocafe.com/note/kubunkyuseki.html){:target="_blank"}