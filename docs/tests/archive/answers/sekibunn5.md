---
title: 合成関数の微分 - 解答
description: 積分テストNo.5の解答と解説
level: classified
---

# 合成関数の微分 - 解答

1. $3(\cos x + \sin x)^2(\cos x - \sin x)$

    !!! note "解説"
        $\begin{align}
        y & = (\cos x + \sin x)^3 \\
        y' & = 3(\cos x + \sin x)^2(\cos x + \sin x)' \\
        & = 3(\cos x + \sin x)^2(\cos x - \sin x)
        \end{align}$

2. $x^2\log 3x$

    !!! note "解説"
        $\begin{align}
        y & = \dfrac{1}{3}x^3\log 3x - \dfrac{1}{9}x^3 \\
        y' & = (\dfrac{1}{3}x^3)'\log 3x + \dfrac{1}{3}x^3(\log 3x)' - \dfrac{1}{3}x^2 \\
        & = x^2\log 3x + \dfrac{1}{3}x^3 \cdot \dfrac{(3x)'}{3x} - \dfrac{1}{3}x^2 \\
        & = x^2\log 3x + \dfrac{1}{3}x^2 - \dfrac{1}{3}x^2 \\
        & = x^2\log 3x
        \end{align}$

3. $-x(x^2 + 1)^{-\frac{3}{2}}$

    !!! note "解説"
        $\begin{align}
        y & = \dfrac{1}{\sqrt{x^2 + 1}} \\
        y' & = -\dfrac{(\sqrt{x^2 + 1})'}{(\sqrt{x^2 + 1})^2} \\
        & = -\dfrac{\frac{(x^2 + 1)'}{2\sqrt{x^2 + 1}}}{x^2 + 1} \\
        & = -\dfrac{\frac{2x}{2\sqrt{x^2 + 1}}}{x^2 + 1} \\
        & = -\dfrac{\frac{x}{\sqrt{x^2 + 1}}}{x^2 + 1} \\
        & = -x(x^2 + 1)^{-\frac{3}{2}}
        \end{align}$

4. $\dfrac{1}{\cos x}$

    !!! note "解説"
        $\begin{align}
        y & = \dfrac{1}{2}\log \dfrac{1 + \sin x}{1 - \sin x} \\
        & = \dfrac{1}{2}\{ \log (1 + \sin x) - \log (1 - \sin x) \} \\
        y' & = \dfrac{1}{2}\{ \frac{(1 + \sin x)'}{1 + \sin x} - \frac{(1 - \sin x)'}{1 - \sin x} \} \\
        & = \dfrac{1}{2}( \frac{\cos x}{1 + \sin x} - \frac{-\cos x}{1 - \sin x} ) \\
        & = \dfrac{1}{2}\{ \frac{\cos x(1 - \sin x) + \cos x(1 + \sin x)}{(1 + \sin x)(1 - \sin x)} \} \\
        & = \dfrac{1}{2}\dfrac{2\cos x}{1 - \sin^2 x} \\
        & = \dfrac{\cos x}{\cos^2 x} \\
        & = \dfrac{1}{\cos x}
        \end{align}$

5. $\{ (-\sin x\log x + \dfrac{\cos x}{x})x\log x + 1 \}x^{x^{\cos x} + \cos x - 1}$

    !!! note "解説"
        $\begin{align}
        y & = x^{x^{\cos x}} \\
        y' & = (e^{x^{\cos x}\log x})' \\
        & = (x^{\cos x}\log x)'e^{x^{\cos x}\log x} \\
        & = (x^{\cos x}\log x)'x^{x^{\cos x}} \\
        & = \{ (x^{\cos x})'\log x + x^{\cos x - 1} \}x^{x^{\cos x}}
        \end{align}$

        $(x^{\cos x})'$ について：
        $\begin{align}
        (x^{\cos x})' & = (e^{\cos x\log x})' \\
        & = (\cos x\log x)'e^{\cos x\log x}  \\
        & = (-\sin x\log x + \frac{\cos x}{x})x^{\cos x}
        \end{align}$

        これを代入すると：
        $\begin{align}
        y' & = \{ (-\sin x\log x + \frac{\cos x}{x})x^{\cos x}\log x + x^{\cos x - 1} \}x^{x^{\cos x}} \\
        & = \{ (-\sin x\log x + \frac{\cos x}{x})x\log x + 1 \}x^{x^{\cos x} + \cos x - 1}
        \end{align}$

!!! note "参考資料"
    [微分公式一覧（基礎から発展まで）](https://manabitimes.jp/math/1109){:target="_blank"}