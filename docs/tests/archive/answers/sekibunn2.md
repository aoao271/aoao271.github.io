---
title: 微分の応用 - 解答
description: 積分テストNo.2の解答と解説
level: classified
---

# 微分の応用 - 解答

1. $6x + \frac{5}{x}$

    !!! note "解説"
        $\begin{align}
        y & = 3x^2 + 5\log x \\
        y' & = 6x + \frac{5}{x}
        \end{align}$

2. $-\dfrac{4}{\sin^2x}$ 

    !!! note "解説"
        $\begin{align}
        y & = \dfrac{4}{\tan x} \\
        y' & = -\dfrac{4}{\sin^2x}
        \end{align}$

3. $(1 + 2x)e^{2x}$

    !!! note "解説"
        $\begin{align}
        y & = xe^{2x} \\
        y' & = x'e^{2x} + x(e^{2x})' \\
        & = e^{2x} + x\{ (2x)' \cdot e^{2x} \} \\
        & = e^{2x} + 2xe^{2x} \\
        & = (1 + 2x)e^{2x}
        \end{align}$

4. $114514 \cdot 810^{114514x}\log 810$

    !!! note "解説"
        $\begin{align}
        y & = 810^{114514x} \\
        y' & = (114514x)' \cdot 810^{114514x}\log 810 \\
        & = 114514 \cdot 810^{114514x}\log 810
        \end{align}$

5. $\{ (\cos x\log x + \frac{\sin x}{x})x\log x + 1 \}x^{x^{\sin x} + \sin x - 1}$

    !!! note "解説"
        $\begin{align}
        y & = x^{x^{\sin x}} \\
        y' & = (e^{x^{\sin x}\log x})' \\
        & = (x^{\sin x}\log x)'e^{x^{\sin x}\log x} \\
        & = (x^{\sin x}\log x)'x^{x^{\sin x}} \\
        & = \{ (x^{\sin x})'\log x + x^{\sin x - 1} \}x^{x^{\sin x}}
        \end{align}$

        ここで $(x^{\sin x})'$ について：
        $\begin{align}
        (x^{\sin x})' & = (e^{\sin x\log x})' \\
        & = (\sin x\log x)'e^{\sin x\log x}  \\
        & = (\cos x\log x + \frac{\sin x}{x})x^{\sin x}
        \end{align}$

        これを代入すると：
        $\begin{align}
        y' & = \{ (\cos x\log x + \frac{\sin x}{x})x^{\sin x}\log x + x^{\sin x - 1} \}x^{x^{\sin x}} \\
        & = \{ (\cos x\log x + \frac{\sin x}{x})x\log x + 1 \}x^{x^{\sin x} + \sin x - 1}
        \end{align}$

!!! note "参考資料"
    [微分公式一覧（基礎から発展まで）](https://manabitimes.jp/math/1109){:target="_blank"}